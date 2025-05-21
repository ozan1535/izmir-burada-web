export interface IEtkinlik {
  Tur: string;
  Id: number;
  Adi: string;
  EtkinlikBitisTarihi: string;
  KucukAfis: string;
  EtkinlikMerkezi: string;
  KisaAciklama: string;
  BiletSatisLinki: string | null;
  UcretsizMi: boolean;
  Resim: string;
  EtkinlikUrl: string;
  EtkinlikBaslamaTarihi: string;
}
