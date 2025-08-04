export type Replace<T, K extends keyof T, V> = Omit<T, K> & { [P in K]: V };

export type ReplaceKey<
  T,
  OldKey extends keyof T,
  NewKey extends string,
  NewType
> = Omit<T, OldKey> & { [K in NewKey]: NewType };