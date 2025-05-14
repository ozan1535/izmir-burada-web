export const getDenizlerMapping = (records) => {
  return records.map(({ ILCE, ADI, ENLEM, BOYLAM }) => ({
    ILCE,
    ADI,
    ENLEM,
    BOYLAM,
  }));
};
