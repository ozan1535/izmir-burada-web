import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["tr", "en", "de"],

  // Used when no locale matches
  defaultLocale: "tr",
  pathnames: {
    "/izmir-namaz-vakitleri": {
      tr: "/izmir-namaz-vakitleri",
      en: "/izmir-praying-times",
      de: "/izmir-gebetszeiten",
    },
    "/izmir-nobetci-eczaneler": {
      tr: "/izmir-nobetci-eczaneler",
      en: "/on-duty-pharmacies-in-izmir",
      de: "/apotheke-im-dienst-in-izmir",
    },
    "/izmir-son-depremler": {
      tr: "/izmir-son-depremler",
      en: "/recent-earthquakes-in-izmir",
      de: "/letzte-erdbeben-in-izmir",
    },
    "/izmir-su-kesintileri": {
      tr: "/izmir-su-kesintileri",
      en: "/water-outages-in-izmir",
      de: "/wasserunterbrechungen-in-izmir",
    },
    "/izmir-otobus-saatleri": {
      tr: "/izmir-otobus-saatleri",
      en: "/izmir-bus-schedules",
      de: "/izmir-busfahrpläne",
    },
    "/izmir-vapur-saatleri": {
      tr: "/izmir-vapur-saatleri",
      en: "/izmir-ferry-schedules",
      de: "/izmir-faehrfahrpläne",
    },
    "/otobusum-nerede": {
      tr: "/otobusum-nerede",
      en: "/where-is-my-bus",
      de: "/wo-ist-mein-bus",
    },
    "/etkinlikler": {
      tr: "/etkinlikler",
      en: "/events",
      de: "/veranstaltungen",
    },
    "/tuvalet-konumlari": {
      tr: "/tuvalet-konumlari",
      en: "/toilet-locations",
      de: "/toiletten-standorte",
    },
    "/ucretsiz-wifi-noktalari": {
      tr: "/ucretsiz-wifi-noktalari",
      en: "/free-wifi-locations",
      de: "/kostenlose-wifi-standorte",
    },
    "/faydali-bilgiler": {
      tr: "/faydali-bilgiler",
      en: "/useful-information",
      de: "/nutzliche-informationen",
    },
    "/kesfet": {
      tr: "/kesfet",
      en: "/discover",
      de: "/entdecken",
    },
    "/gizlilik-politikasi": {
      tr: "/gizlilik-politikasi",
      en: "/privacy-policy",
      de: "/datenschutzrichtlinie",
    },
    "/kullanim-sartlari": {
      tr: "/kullanim-sartlari",
      en: "/terms-of-use",
      de: "/nutzungsbedingungen",
    },
  },
});
