import { IDenizler } from "./denizler.types";

export const getDenizlerMapping = (records: IDenizler[]) => {
  return records.map(({ ILCE, ADI, ENLEM, BOYLAM }: IDenizler) => ({
    ILCE,
    ADI,
    ENLEM,
    BOYLAM,
  }));
};
