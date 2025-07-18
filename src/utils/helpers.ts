import { Metadata } from "next";
import { IOnemliYer } from "./types";
import { DateTime } from "luxon";

export const categories = [
  {
    id: 0,
    name: {
      tr: "TARİH VE KÜLTÜR",
      en: "HISTORY AND CULTURE",
      de: "GESCHICHTE UND KULTUR",
    },
    href: {
      tr: "/tarih-ve-kultur",
      en: "/tarih-ve-kultur",
      de: "/tarih-ve-kultur",
    },
    media: "/assets/boxImages/tarih-ve-kultur.png",
  },
  {
    id: 2,
    name: {
      tr: "DENİZLER",
      en: "SEAS",
      de: "MEERE",
    },
    href: {
      tr: "/denizler",
      en: "/denizler",
      de: "/denizler",
    },
    media: "/assets/boxImages/denizler.png",
  },
  {
    id: 1,
    name: {
      tr: "DOĞA VE AGRO",
      en: "NATURE AND AGRO",
      de: "NATUR UND AGRO",
    },
    href: {
      tr: "/doga-ve-agro",
      en: "/doga-ve-agro",
      de: "/doga-ve-agro",
    },
    media: "/assets/boxImages/doga-ve-agro.png",
  },
  {
    id: 4,
    name: {
      tr: "MÜZE VE SANAT",
      en: "MUSEUMS AND ART",
      de: "MUSEEN UND KUNST",
    },
    href: {
      tr: "/muze-ve-sanat",
      en: "/muze-ve-sanat",
      de: "/muze-ve-sanat",
    },
    media: "/assets/boxImages/muze-ve-sanat.png",
  },
  {
    id: 5,
    name: {
      tr: "ALIŞVERİŞ",
      en: "SHOPPING",
      de: "EINKAUFEN",
    },
    href: {
      tr: "/alisveris",
      en: "/alisveris",
      de: "/alisveris",
    },
    media: "/assets/boxImages/alisveris.png",
  },
  {
    id: 8,
    name: {
      tr: "ETKİNLİKLER",
      en: "EVENTS",
      de: "VERANSTALTUNGEN",
    },
    href: {
      tr: "/etkinlikler",
      en: "/events",
      de: "/veranstaltungen",
    },
    media: "/assets/boxImages/etkinlikler.png",
  },
];
/* [
  {
    //https://openapi.izmir.bel.tr/api/ibb/cbs/kuleanitveheykeller
    //https://openapi.izmir.bel.tr/api/ibb/cbs/tarihicarsivehanlar
    //https://openapi.izmir.bel.tr/api/ibb/cbs/antikkentler
    //https://openapi.izmir.bel.tr/api/ibb/cbs/meydanlar
    //https://openapi.izmir.bel.tr/api/ibb/cbs/tarihiyapilar
    //https://openapi.izmir.bel.tr/api/ibb/cbs/antikkentyapilari
    id: 0,
    name: "TARİH VE KÜLTÜR",
    href: "tarih-ve-kultur",
    media: "/assets/boxImages/tarih-ve-kultur.png",
  },
  {
    //https://openapi.izmir.bel.tr/api/ibb/cbs/plajlar
    //https://openapi.izmir.bel.tr/api/ibb/cbs/mavibayrakplajlar
    id: 2,
    name: "DENİZLER",
    href: "denizler",
    media: "/assets/boxImages/denizler.png",
  },
  //   {
  //   id: 3,
  //   name: "Inanç",
  //   href: "inanc",
  //   media: "",
  // }, 
  {
    //https://openapi.izmir.bel.tr/api/ibb/cbs/kaplicalar
    //https://openapi.izmir.bel.tr/api/ibb/cbs/hamamlar
    //https://openapi.izmir.bel.tr/api/ibb/cbs/tarihisuyapilari
    //https://acikveri.bizizmir.com/dataset/cografi-yer-sekilleri
    id: 1,
    name: "DOĞA VE AGRO",
    href: "doga-ve-agro",
    media: "/assets/boxImages/doga-ve-agro.png",
  },
  // {
  //   id: 10,
  //   name: "Lezzetler",
  //   href: "lezzetler",
  //   media: "",
  // },
  {
    //https://openapi.izmir.bel.tr/api/ibb/cbs/muzeler
    //https://acikveri.bizizmir.com/dataset/kultur-ve-sanat-merkezleri
    //https://openapi.izmir.bel.tr/api/ibb/cbs/kulturmerkezleri
    //https://openapi.izmir.bel.tr/api/ibb/cbs/galerivesalonlar
    id: 4,
    name: "MÜZE VE SANAT",
    href: "muze-ve-sanat",
    media: "/assets/boxImages/muze-ve-sanat.png",
  },
  {
    //https://openapi.izmir.bel.tr/api/ibb/cbs/pazaryerleri
    id: 5,
    name: "ALIŞVERİŞ",
    href: "alisveris",
    media: "/assets/boxImages/alisveris.png",
  },
  {
    //https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler
    id: 8,
    name: "ETKİNLİKLER",
    href: "etkinlikler",
    media: "/assets/boxImages/etkinlikler.png",
  },
  // {
  //   //https://acikveri.bizizmir.com/api/3/action/datastore_search?resource_id=165358a6-a4fe-48df-9e3b-e6a310329d96
  //   id: 9,
  //   name: "Kardeş Kentler",
  //   href: "kardes-kentler",
  //   media: "",
  // }, 
  //   {
  //   //https://acikveri.bizizmir.com/api/3/action/datastore_search?resource_id=165358a6-a4fe-48df-9e3b-e6a310329d96
  //   id: 11,
  //   name: "Konumlar",
  //   href: "konumlar",
  //   media: "",
  // }, 
]; */

export const usefulInformations = [
  {
    id: 0,
    name: {
      tr: "NAMAZ VAKİTLERİ",
      en: "PRAYING TIMES",
      de: "GEBETSZEITEN",
    },
    href: {
      tr: "/izmir-namaz-vakitleri",
      en: "/izmir-praying-times",
      de: "/izmir-gebetszeiten",
    },
    media: "/assets/boxImages/namaz-vakitleri.png",
  },
  {
    id: 1,
    name: {
      tr: "NÖBETÇİ ECZANELER",
      en: "ON-DUTY PHARMACIES",
      de: "APOTHEKEN IM DIENST",
    },
    href: {
      tr: "/izmir-nobetci-eczaneler",
      en: "/on-duty-pharmacies-in-izmir",
      de: "/apotheke-im-dienst-in-izmir",
    },
    media: "/assets/boxImages/nobetcieczane.png",
  },
  {
    id: 2,
    name: {
      tr: "SON DEPREMLER",
      en: "RECENT EARTHQUAKES",
      de: "LETZTE ERDBEBEN",
    },
    href: {
      tr: "/izmir-son-depremler",
      en: "/recent-earthquakes-in-izmir",
      de: "/letzte-erdbeben-in-izmir",
    },
    media: "/assets/boxImages/son-depremler.png",
  },
  {
    id: 3,
    name: {
      tr: "SU KESİNTİLERİ",
      en: "WATER OUTAGES",
      de: "WASSERUNTERBRECHUNGEN",
    },
    href: {
      tr: "/izmir-su-kesintileri",
      en: "/water-outages-in-izmir",
      de: "/wasserunterbrechungen-in-izmir",
    },
    media: "/assets/boxImages/su-kesintileri.png",
  },
  {
    id: 4,
    name: {
      tr: "ETKİNLİKLER",
      en: "EVENTS",
      de: "VERANSTALTUNGEN",
    },
    href: {
      tr: "/etkinlikler",
      en: "/events",
      de: "/veranstaltungen",
    },
    media: "/assets/boxImages/etkinlikler.png",
  },
];

export const transportation = [
  {
    id: 0,
    name: {
      tr: "OTOBÜS SAATLERİ",
      en: "BUS SCHEDULES",
      de: "BUSFAHRPLÄNE",
    },
    href: {
      tr: "/izmir-otobus-saatleri",
      en: "/izmir-bus-schedules",
      de: "/izmir-busfahrpläne",
    },
    media: "/assets/boxImages/otobussaatleri.png",
  },
  {
    id: 1,
    name: {
      tr: "OTOBÜSÜM NEREDE",
      en: "WHERE IS MY BUS",
      de: "WO IST MEIN BUS",
    },
    href: {
      tr: "/otobusum-nerede",
      en: "/where-is-my-bus",
      de: "/wo-ist-mein-bus",
    },
    media: "/assets/boxImages/yaklasanotobus.png",
  },
  {
    id: 2,
    name: {
      tr: "VAPUR SAATLERİ",
      en: "FERRY SCHEDULES",
      de: "FÄHRFAHRPLÄNE",
    },
    href: {
      tr: "/izmir-vapur-saatleri",
      en: "/izmir-ferry-schedules",
      de: "/izmir-faehrfahrpläne",
    },
    media: "/assets/boxImages/vapursaatleri.png",
  },
  {
    id: 3,
    name: {
      tr: "İZMİRİM KART",
      en: "İZMİRİM CARD",
      de: "İZMİRİM KARTE",
    },
    href: {
      tr: "/izmirim-kart",
      en: "/izmirim-kart",
      de: "/izmirim-kart",
    },
    media: "/assets/boxImages/izmirim-kart.png",
  },
];

export const locations = [
  {
    id: 0,
    name: {
      tr: "ÜCRETSİZ Wi-Fi NOKTALARI",
      en: "FREE Wi-Fi LOCATIONS",
      de: "KOSTENLOSE Wi-Fi STANDORTE",
    },
    href: {
      tr: "/ucretsiz-wifi-noktalari",
      en: "/free-wifi-locations",
      de: "/kostenlose-wifi-standorte",
    },
    media: "/assets/boxImages/wifi.png",
  },
  {
    id: 1,
    name: {
      tr: "TUVALET Konumları",
      en: "TOILET LOCATIONS",
      de: "TOILETTEN STANDORTE",
    },
    href: {
      tr: "/tuvalet-konumlari",
      en: "/toilet-locations",
      de: "/toiletten-standorte",
    },
    media: "/assets/boxImages/tuvaletler.png",
  },
  {
    id: 2,
    name: {
      tr: "HASTANELER",
      en: "HOSPITALS",
      de: "KRANKENHÄUSER",
    },
    href: {
      tr: "/hastaneler",
      en: "/hospitals",
      de: "/krankenhaeuser",
    },
    media: "/assets/boxImages/hastaneler.png",
  },
  {
    id: 3,
    name: {
      tr: "MÜZELER",
      en: "MUSEUMS",
      de: "MUSEEN",
    },
    href: {
      tr: "/muzeler",
      en: "/museums",
      de: "/museen",
    },
    media: "/assets/boxImages/muzeler.png",
  },
  {
    id: 4,
    name: {
      tr: "KONSOLOSLUKLAR",
      en: "CONSULATES",
      de: "KONSULATE",
    },
    href: {
      tr: "/konsolosluklar",
      en: "/consulates",
      de: "/konsulate",
    },
    media: "/assets/boxImages/konsolosluklar.png",
  },
];

export function getFormattedDate(language: "en" | "tr" | "de"): string {
  const currentDate = DateTime.now().setZone("Europe/Istanbul");
  const months: Record<"en" | "tr" | "de", string[]> = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    tr: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
    de: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
  };

  const weekdays: Record<"en" | "tr" | "de", string[]> = {
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    tr: [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ],
    de: [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ],
  };

  // const day = currentDate.getDate();
  // const month = months[language][currentDate.getMonth()];
  // const year = currentDate.getFullYear();
  // const weekday = weekdays[language][currentDate.getDay()];

  // return `${day} ${month} ${year} ${weekday}`;

  const day = currentDate.day;
  const month = months[language][currentDate.month - 1];
  const year = currentDate.year;
  const weekday = weekdays[language][currentDate.weekday % 7];

  return `${day} ${month} ${year} ${weekday}`;
}

export function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = today.getFullYear();

  return `${day}.${month}.${year}`;
}

export const izmirDistincts = [
  { id: 0, name: "ALSANCAK" },
  { id: 1, name: "ALSANCAK-BASMANE" },
  { id: 2, name: "ALTINDAĞ" },
  { id: 3, name: "ALİAĞA" },
  { id: 4, name: "ATATÜRK-OSMANGAZİ" },
  { id: 5, name: "AYRANCILAR" },
  { id: 6, name: "BALÇOVA" },
  { id: 7, name: "BASIN SİTESİ" },
  { id: 8, name: "BAYINDIR" },
  { id: 9, name: "BAYRAKLI" },
  { id: 10, name: "BERGAMA" },
  { id: 11, name: "BEYDAĞ" },
  { id: 12, name: "BORNOVA 1" },
  { id: 13, name: "BORNOVA 2" },
  { id: 14, name: "BORNOVA 3" },
  { id: 15, name: "BORNOVA 4" },
  { id: 16, name: "BOZYAKA" },
  { id: 17, name: "BUCA 1" },
  { id: 18, name: "BUCA 2" },
  { id: 19, name: "DİKİLİ" },
  { id: 20, name: "ESKİ FOÇA" },
  { id: 21, name: "ESKİİZMİR-CENNETÇEŞME" },
  { id: 22, name: "EVKA 1" },
  { id: 23, name: "GAZİEMİR" },
  { id: 24, name: "GEDİZ" },
  { id: 25, name: "GÜLTEPE" },
  { id: 26, name: "GÜMÜŞPALA" },
  { id: 27, name: "GÜZELBAHÇE" },
  { id: 28, name: "HATAY" },
  { id: 29, name: "KARABAĞLAR" },
  { id: 30, name: "KARABURUN" },
  { id: 31, name: "KARŞIYAKA 1" },
  { id: 32, name: "KARŞIYAKA 2" },
  { id: 33, name: "KARŞIYAKA 3" },
  { id: 34, name: "KARŞIYAKA 4" },
  { id: 35, name: "KEMALPAŞA" },
  { id: 36, name: "KINIK" },
  { id: 37, name: "KİRAZ" },
  { id: 38, name: "MENDERES" },
  { id: 39, name: "MENEMEN" },
  { id: 40, name: "MENEMEN 2" },
  { id: 41, name: "MORDOĞAN" },
  { id: 42, name: "MİTHATPAŞA" },
  { id: 43, name: "NARLIDERE" },
  { id: 44, name: "PINARBAŞI" },
  { id: 45, name: "SARNIÇ" },
  { id: 46, name: "SEFERİHİSAR" },
  { id: 47, name: "SEFERİHİSAR-SIĞACIK BÖLGESİ" },
  { id: 48, name: "SELÇUK" },
  { id: 49, name: "TORBALI" },
  { id: 51, name: "TİRE" },
  { id: 52, name: "URLA" },
  { id: 53, name: "YENİ FOÇA" },
  { id: 54, name: "YENİ ŞAKRAN" },
  { id: 55, name: "YENİŞEHİR" },
  { id: 56, name: "YEŞİLYURT" },
  { id: 57, name: "ZEYTİNALANI" },
  { id: 58, name: "ÇAMDİBİ" },
  { id: 59, name: "ÇANDARLI" },
  { id: 60, name: "ÇEŞME" },
  { id: 61, name: "ÇİĞLİ" },
  { id: 62, name: "ÖDEMİŞ" },
  { id: 63, name: "ÖZDERE" },
  { id: 64, name: "ÜÇYOL" },
  { id: 65, name: "İNCİRALTI" },
  { id: 66, name: "İSKELE" },
  { id: 67, name: "ŞİRİNYER" },
];

export const days = [
  {
    id: 1,
    name: "Pazartesi",
  },
  {
    id: 2,
    name: "Salı",
  },
  {
    id: 3,
    name: "Çarşamba",
  },
  {
    id: 4,
    name: "Perşembe",
  },
  {
    id: 5,
    name: "Cuma",
  },
  {
    id: 6,
    name: "Cumartesi",
  },
  {
    id: 7,
    name: "Pazar",
  },
];

export const ports = [
  {
    id: 1,
    name: "Konak",
  },
  {
    id: 2,
    name: "Karşıyaka",
  },
  {
    id: 3,
    name: "Bostanlı",
  },
  {
    id: 4,
    name: "Pasaport",
  },
  {
    id: 5,
    name: "Alsancak",
  },
  {
    id: 6,
    name: "Göztepe",
  },
  {
    id: 7,
    name: "Üçkuyular",
  },
  {
    id: 8,
    name: "Bayraklı",
  },
  {
    id: 9,
    name: "Foça",
  },
  {
    id: 10,
    name: "Yassıcaada",
  },
  {
    id: 11,
    name: "Urla",
  },
  {
    id: 12,
    name: "Güzelbahçe",
  },
  {
    id: 13,
    name: "Mordoğan",
  },
  {
    id: 1019,
    name: "Karantina",
  },
];

export const IzmirTowns = [
  {
    id: 460,
    name: "Aliağa",
  },
  {
    id: 461,
    name: "Balçova",
  },
  {
    id: 462,
    name: "Bayındır",
  },
  {
    id: 463,
    name: "Bayraklı",
  },
  {
    id: 464,
    name: "Bergama",
  },
  {
    id: 465,
    name: "Beydağ",
  },
  {
    id: 466,
    name: "Bornova",
  },
  {
    id: 467,
    name: "Buca",
  },
  {
    id: 468,
    name: "Çeşme",
  },
  {
    id: 469,
    name: "Çiğli",
  },
  {
    id: 470,
    name: "Dikili",
  },
  {
    id: 471,
    name: "Foça",
  },
  {
    id: 472,
    name: "Gaziemir",
  },
  {
    id: 473,
    name: "Güzelbahçe",
  },
  {
    id: 474,
    name: "Karabağlar",
  },
  {
    id: 475,
    name: "Karaburun",
  },
  {
    id: 476,
    name: "Karşıyaka",
  },
  {
    id: 477,
    name: "Kemalpaşa",
  },
  {
    id: 478,
    name: "Kınık",
  },
  {
    id: 479,
    name: "Kiraz",
  },
  {
    id: 480,
    name: "Konak",
  },
  {
    id: 481,
    name: "Menderes",
  },
  {
    id: 482,
    name: "Menemen",
  },
  {
    id: 483,
    name: "Narlıdere",
  },
  {
    id: 484,
    name: "Ödemiş",
  },
  {
    id: 485,
    name: "Seferihisar",
  },
  {
    id: 486,
    name: "Selçuk",
  },
  {
    id: 487,
    name: "Tire",
  },
  {
    id: 488,
    name: "Torbalı",
  },
  {
    id: 489,
    name: "Urla",
  },
];

export async function fetchData<T = unknown>(urls: string[]): Promise<T[]> {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    responses.forEach((res, idx) => {
      if (!res.ok) {
        throw new Error(
          `Request to ${urls[idx]} failed with status ${res.status}`
        );
      }
    });

    const data = await Promise.all(responses.map((res) => res.json()));
    return data;
  } catch (error) {
    console.error("Error fetching multiple URLs:", error);
    throw error;
  }
}

export const linkBuilders: { [key: string]: (item: any) => string } = {
  pharmacyLink: (item) =>
    `https://maps.google.com/?q=${item.LokasyonX},${item.LokasyonY}`,
  commonLocationInTurkish: (item) =>
    `https://maps.google.com/?q=${item.ENLEM},${item.BOYLAM}`,
};

export const getNestedValue = (obj: Record<string, any>, path: string): any => {
  return path
    .split(".")
    .reduce((acc, part) => (acc ? acc[part] : undefined), obj);
};

// A utility to flatten mapped nested data from a list of objects
export const flatMapData = (
  items: any[],
  dataPath: string,
  mapFunction: (records: any[]) => any[]
) => {
  return items.flatMap((response) => {
    const records = getNestedValue(response as IOnemliYer, dataPath);
    return mapFunction(records);
  });
};

export const commonHeadItemsWithDetailAndLocation = [
  {
    id: 0,
    name: "Adi",
  },
  {
    id: 1,
    name: "Ilce",
  },
  {
    id: 2,
    name: "Detay",
  },
  {
    id: 3,
    name: "Lokasyon",
  },
];

export const commonKeysWithCustomComponentAndLinkBuilder = [
  {
    id: 0,
    name: "ADI",
  },
  {
    id: 1,
    name: "ILCE",
  },
  {
    id: 2,
    name: "",
    hasCustomComponent: true,
  },
  {
    id: 3,
    name: "",
    linkBuilder: "commonLocationInTurkish",
    staticName: "Haritada Gör",
  },
];

export const getCommonMappingWithLocationAndDetail = (
  records: IOnemliYer[]
) => {
  return records.map(({ ILCE, ADI, ENLEM, BOYLAM, ACIKLAMA }) => ({
    ILCE,
    ADI,
    ENLEM,
    BOYLAM,
    ACIKLAMA,
  }));
};

export const commonHeadItemsWithLocation = [
  {
    id: 0,
    name: "Adi",
  },
  {
    id: 1,
    name: "Ilce",
  },
  {
    id: 2,
    name: "Lokasyon",
  },
];

export const commonKeysWithLocation = [
  {
    id: 0,
    name: "ADI",
  },
  {
    id: 1,
    name: "ILCE",
  },
  {
    id: 3,
    name: "",
    linkBuilder: "commonLocationInTurkish",
    staticName: "Haritada Gör",
  },
];

export function createMetadata(
  title: string,
  description: string,
  keywords: string,
  image: string,
  url: string
): Metadata {
  const metadata: Metadata = {
    title,
    description,
    keywords,
    metadataBase: new URL("https://izmir-burada.com"),
    openGraph: {
      title,
      description,
      ...(url && { url }),
      ...(image && {
        images: [
          {
            url: `https://izmir-burada.com${image}`,
            width: 1200,
            height: 630,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  };

  return metadata;
}
