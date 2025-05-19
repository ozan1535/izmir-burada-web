export interface ISeferSaati {
  VarisSaati: string;
  KalkisSaati: string;
}

export interface ISeferSatiri {
  IptalAciklama: string | null;
  seferSaatleri: ISeferSaati[];
  IptalMi: boolean | null;
  Aciklama: string;
}

export interface IHatData {
  hatAdi: string;
  iskeleler: string[];
  seferSatirlari: ISeferSatiri[];
}
