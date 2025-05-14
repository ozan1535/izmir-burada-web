export const getToiletsMapping = (records) => {
  return records.map(({ ILCE, TESIS_ADI, ENLEM, BOYLAM }) => ({
    ILCE,
    ADI: TESIS_ADI,
    ENLEM,
    BOYLAM,
  }));
};
