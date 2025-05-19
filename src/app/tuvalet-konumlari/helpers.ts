import { ITuvalet, ITuvaletKonumu } from "./tuvaletKonumlari.types";

export const getToiletsMapping = (records: ITuvalet[]) => {
  return records.map(({ ILCE, TESIS_ADI, ENLEM, BOYLAM }: ITuvaletKonumu) => ({
    ILCE,
    ADI: TESIS_ADI,
    ENLEM,
    BOYLAM,
  }));
};
