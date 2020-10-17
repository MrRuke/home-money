export interface BemModifiersObject {
  [modifier: string]: boolean | string | number;
}

export type BemModifiers = BemModifiersObject | string;
