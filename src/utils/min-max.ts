export const minMax = (value: number, min: number, max: number): number =>
  value < min ? min : value > max ? max : value;
