export interface IBusHour {
  DONUS_SAATI: string;
  SIRA: string;
  GIDIS_SAATI: string;
  DONUS_ELEKTRIKLI_OTOBUS: string;
  BISIKLETLI_DONUS: string;
  _full_text: string;
  GIDIS_ENGELLI_DESTEGI: string;
  GIDIS_ELEKTRIKLI_OTOBUS: string;
  HAT_NO: string;
  TARIFE_ID: string;
  DONUS_ENGELLI_DESTEGI: string;
  _id: number;
  BISIKLETLI_GIDIS: string;
}

export interface IBusInformation {
  HAT_BASLANGIC: string;
  GUZERGAH_ACIKLAMA: string;
  _full_text: string;
  HAT_NO: string;
  HAT_BITIS: string;
  _id: number;
  HAT_ADI: string;
  ACIKLAMA: string;
}

export interface IOtobusSaatleri {
  busHours: IBusHour[];
  busInformation: IBusInformation[];
}

export interface FormattedDayData {
  date: string;
  day: string;
  busHours: IBusHour[];
}
