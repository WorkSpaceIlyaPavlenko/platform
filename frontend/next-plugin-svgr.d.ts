declare module '*.svg' {
  import * as React from 'react';
  const SVGComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default SVGComponent;
}
declare module '*.svg?component' {
  import * as React from 'react';
  const SVGComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default SVGComponent;
}
declare module '*.svg?url' {
  const url: string;
  export default url;
}
declare module '*.svg?inline' {
  const content: string; // сырой SVG как строка
  export default content;
}
declare module "*.svg" {
  import * as React from "react";
  const C: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default C;
}
declare module "*.svg?url" { const url: string; export default url; }
declare module "*.svg?inline" { const raw: string; export default raw; }