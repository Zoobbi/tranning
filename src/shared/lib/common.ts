export type Noop = (...args: unknown[]) => void;
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop: Noop = () => {};

export const buildUniqueKey = (uniqueId: string, index: number) =>
  `${uniqueId}-${index}`;
