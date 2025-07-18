import { getCurrentDate } from "@/utils/helpers";
import { INamazVakitleri, IPrayerTimes } from "./namazVakitleri.types";

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

export const getPrayerTimes = (currentDateItems: INamazVakitleri) => {
  return [
    { label: "İmsak", time: currentDateItems?.Imsak },
    { label: "Güneş", time: currentDateItems?.Gunes },
    { label: "Öğle", time: currentDateItems?.Ogle },
    { label: "İkindi", time: currentDateItems?.Ikindi },
    { label: "Akşam", time: currentDateItems?.Aksam },
    { label: "Yatsı", time: currentDateItems?.Yatsi },
  ];
};

// export const getTimeInMinutes = (timeString: string) => {
//   const [hours, minutes] = timeString.split(":").map(Number);
//   return hours * 60 + minutes;
// };

export const getTimeInMinutes = (timeString: string) => {
  // Normalize "20.40" → "20:40"
  const [h, m] = timeString.replace(".", ":").split(":").map(Number);
  return h * 60 + m;
};

export const getCurrentDateItems = (data: INamazVakitleri[]) => {
  return data.find((item) => item.MiladiTarihKisa === getCurrentDate());
};

// export const getNextPrayer = (prayerTimes: IPrayerTimes[]) => {
//   const currentTime = new Date();
//   const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

//   return prayerTimes.find((prayer) => {
//     const prayerTimeInMinutes = getTimeInMinutes(prayer.time);
//     return prayerTimeInMinutes > currentMinutes;
//   });
// };

export const getNextPrayer = (prayerTimes: IPrayerTimes[]) => {
  const now = new Date();

  for (const prayer of prayerTimes) {
    const [h, m] = prayer.time.replace(".", ":").split(":").map(Number);
    const prayerDate = new Date();
    prayerDate.setHours(h, m, 0, 0);

    if (prayerDate.getTime() > now.getTime()) {
      console.log(prayer, "getNextPrayer");
      return prayer;
    }
  }

  return null; // all passed
};
