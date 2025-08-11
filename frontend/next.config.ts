import type { NextConfig } from "next";

import type {
  Configuration,
  RuleSetRule,
  RuleSetCondition,
  RuleSetUseItem,
} from "webpack";

function ruleHandlesSvg(rule: RuleSetRule): boolean {
  return rule.test instanceof RegExp && rule.test.test(".svg");
}

function findSvgAssetRule(rules: RuleSetRule[]): RuleSetRule | undefined {
  for (const rule of rules) {
    if (ruleHandlesSvg(rule)) return rule;
    if (Array.isArray(rule.oneOf)) {
      const nested = findSvgAssetRule(rule.oneOf as RuleSetRule[]);
      if (nested) return nested;
    }
  }
  return undefined;
}


const nextConfig: NextConfig = {
  output: 'standalone',
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              typescript: true,
              icon: true,
              ref: true,
              titleProp: true,
              svgo: true,
              svgoConfig: {
                plugins: [
                  { name: "preset-default", params: { overrides: { removeViewBox: false } } },
                  { name: "removeDimensions", active: true },
                ],
              },
              svgProps: { fill: "currentColor" },
            },
          },
        ],
        as: "*.js", // сообщаем Turbopack, что после лоадера это JS-модуль
      },
    },
  },

  webpack(config: Configuration) {
    // Убедимся, что модульная секция есть
    if (!config.module) config.module = { rules: [] };
    const rules = (config.module.rules ?? []) as RuleSetRule[];

    // 1) Найти стандартный rule, который ловит .svg, и исключить из него .svg
    const svgAssetRule = findSvgAssetRule(rules);
    const svgRegex: RuleSetCondition = /\.svg$/i;

    if (svgAssetRule) {
      if (typeof svgAssetRule.exclude === "undefined") {
        svgAssetRule.exclude = svgRegex;
      } else if (Array.isArray(svgAssetRule.exclude)) {
        svgAssetRule.exclude = [...svgAssetRule.exclude, svgRegex];
      } else {
        svgAssetRule.exclude = [svgAssetRule.exclude, svgRegex];
      }
    }

    // 2) Наш SVGR rule
    const svgrUse: RuleSetUseItem[] = [
      {
        loader: "@svgr/webpack",
        options: {
          typescript: true,
          icon: true,
          ref: true,
          titleProp: true,
          svgo: true,
          svgoConfig: {
            plugins: [
              { name: "preset-default", params: { overrides: { removeViewBox: false } } },
              { name: "removeDimensions", active: true },
            ],
          },
          svgProps: { fill: "currentColor" },
        },
      },
    ];

    const svgrRule: RuleSetRule = {
      test: /\.svg$/i,
      oneOf: [
        // import x from './x.svg?url'     → string URL
        { resourceQuery: /url/, type: "asset/resource" },

        // import x from './x.svg?inline'  → raw SVG string
        { resourceQuery: /inline/, type: "asset/source" },

        // import X from './x.svg?component' → React-компонент явно
        { resourceQuery: /component/, use: svgrUse },

        // import X from './x.svg' → по умолчанию React-компонент
        { use: svgrUse },
      ],
    };

    rules.push(svgrRule);
    config.module.rules = rules;

    return config;
  },
};

export default nextConfig;
