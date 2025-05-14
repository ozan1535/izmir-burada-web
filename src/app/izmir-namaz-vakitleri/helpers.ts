import { getCurrentDate } from "@/utils/helpers";

export const namazVakitleriTableHeaderItems = [
  {
    id: 0,
    name: "Mİladİ Tarİh",
  },
  {
    id: 1,
    name: "Hİcrİ Tarİh",
  },
  {
    id: 2,
    name: "İmsak",
  },
  {
    id: 3,
    name: "Güneş",
  },
  {
    id: 4,
    name: "Öğle",
  },
  {
    id: 5,
    name: "İkİndİ",
  },
  {
    id: 6,
    name: "Akşam",
  },
  {
    id: 7,
    name: "Yatsı",
  },
];

export const namazVakitleriKeys = [
  {
    id: 1,
    name: "MiladiTarihUzun",
  },
  {
    id: 2,
    name: "HicriTarihUzun",
  },
  {
    id: 3,
    name: "Imsak",
  },
  {
    id: 4,
    name: "Gunes",
  },
  {
    id: 5,
    name: "Ogle",
  },
  {
    id: 6,
    name: "Ikindi",
  },
  {
    id: 7,
    name: "Aksam",
  },
  {
    id: 8,
    name: "Yatsi",
  },
];

export const getPrayerTimes = (currentDateItems) => {
  return [
    { label: "İmsak", time: currentDateItems?.Imsak },
    { label: "Güneş", time: currentDateItems?.Gunes },
    { label: "Öğle", time: currentDateItems?.Ogle },
    { label: "İkindi", time: currentDateItems?.Ikindi },
    { label: "Akşam", time: currentDateItems?.Aksam },
    { label: "Yatsı", time: currentDateItems?.Yatsi },
  ];
};

export const getTimeInMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
};

export const getCurrentDateItems = (data) => {
  return data.find((item) => item.MiladiTarihKisa === getCurrentDate());
};

export const getNextPrayer = (prayerTimes) => {
  const currentTime = new Date();
  const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  return prayerTimes.find((prayer) => {
    const prayerTimeInMinutes = getTimeInMinutes(prayer.time);
    return prayerTimeInMinutes > currentMinutes;
  });
};
