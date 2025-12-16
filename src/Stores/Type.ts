import type { banks } from "./Datas";

export interface Youpay {
  name: string;
  image: string;
}
export interface Payfrom {
  name: string;
  image: string;
}

export type BankName = typeof banks[number];