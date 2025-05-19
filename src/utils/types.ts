export interface ICommonKey {
  id: number;
  name: string | string[];
  hasCustomComponent?: boolean;
  linkBuilder?: string;
  staticName?: string;
}

export interface INameAndId {
  name: string;
  id: number;
}

export interface IApiInfo {
  sayfadaki_kayitsayisi: number;
  kayit_sayisi: number;
  sayfa_numarasi: number;
}

export interface IOnemliYer {
  ILCE: string;
  KAPINO: string;
  ENLEM: number;
  ACIKLAMA: string;
  ILCEID: string;
  MAHALLE: string;
  MAHALLEID: null | string;
  ADI: string;
  BOYLAM: number;
  YOL: string;
}

export interface ICommonType extends IApiInfo {
  onemliyer: IOnemliYer[];
}
