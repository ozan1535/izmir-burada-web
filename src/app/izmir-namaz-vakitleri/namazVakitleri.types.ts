export interface INamazVakitleri {
  HicriTarihKisa: string;
  HicriTarihKisaIso8601: null | string;
  HicriTarihUzun: string;
  HicriTarihUzunIso8601: null | string;
  AyinSekliURL: string;
  MiladiTarihKisa: string;
  MiladiTarihKisaIso8601: string;
  MiladiTarihUzun: string;
  MiladiTarihUzunIso8601: string;
  GreenwichOrtalamaZamani: number;
  Aksam: string;
  Gunes: string;
  GunesBatis: string;
  GunesDogus: string;
  Ikindi: string;
  Imsak: string;
  KibleSaati: string;
  Ogle: string;
  Yatsi: string;
}

export interface IPrayerTimes {
  label: string;
  time: string;
}
