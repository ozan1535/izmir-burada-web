import { days } from "@/utils/helpers";

export const busLines = [
  {
    id: "5",
    name: "5: NARLIDERE - ÜÇKUYULAR İSKELE",
  },
  {
    id: "6",
    name: "6: ARIKENT - ÜÇKUYULAR İSK.",
  },
  {
    id: "7",
    name: "7: SAHİLEVLERİ - ÜÇKUYULAR İSK.",
  },
  {
    id: "8",
    name: "8: GÜZELBAHÇE - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "9",
    name: "9: ÖZZÜMRÜT EVLERİ - SİTELER",
  },
  {
    id: "10",
    name: "10: ÜÇKUYULAR İSKELE - KONAK",
  },
  {
    id: "15",
    name: "15: İNÖNÜ - KONAK",
  },
  {
    id: "16",
    name: "16: VATAN MAHALLESİ - ÜÇYOL",
  },
  {
    id: "17",
    name: "17: UZUNDERE TOPLU KONUTLARI - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "18",
    name: "18: YEŞİLYURT - KONAK",
  },
  {
    id: "19",
    name: "19: ŞEHİTLER - KONAK",
  },
  {
    id: "20",
    name: "20: KOOPERATİF EVLERİ - KONAK",
  },
  {
    id: "21",
    name: "21: HALİL RIFAT PAŞA - KONAK",
  },
  {
    id: "23",
    name: "23: UZUNDERE - KONAK",
  },
  {
    id: "24",
    name: "24: KAVACIK - ÜÇKUYULAR İSKELE",
  },
  {
    id: "25",
    name: "25: OYUNLAR KÖYÜ - ÜÇKUYULAR İSKELE",
  },
  {
    id: "27",
    name: "27: ÇAMLIK - KONAK",
  },
  {
    id: "28",
    name: "28: KAVACIK - GÜZELBAHÇE",
  },
  {
    id: "29",
    name: "29: KADRİYE MAH. - KONAK",
  },
  {
    id: "30",
    name: "30: KAYNAK - KONAK",
  },
  {
    id: "32",
    name: "32: ÇİMENTEPE SİTESİ - KONAK",
  },
  {
    id: "33",
    name: "33: KADİFEKALE - KONAK",
  },
  {
    id: "34",
    name: "34: ESENTEPE - GÜMRÜK",
  },
  {
    id: "35",
    name: "35: BALLIKUYU - KONAK",
  },
  {
    id: "36",
    name: "36: ŞİRİNYER AKTARMA MERKEZİ - GÜMRÜK",
  },
  {
    id: "39",
    name: "39: İSMETPAŞA MAH. - GÜMRÜK",
  },
  {
    id: "41",
    name: "41: LEVENT - GÜMRÜK",
  },
  {
    id: "42",
    name: "42: ÇINARTEPE - GÜMRÜK",
  },
  {
    id: "44",
    name: "44: MERSİNPINAR - GÜMRÜK",
  },
  {
    id: "45",
    name: "45: GÜLTEPE - GÜMRÜK",
  },
  {
    id: "46",
    name: "46: ÇOBANÇEŞME - GÜMRÜK",
  },
  {
    id: "53",
    name: "53: MTK ALTINDAĞ - HALKAPINAR METRO",
  },
  {
    id: "54",
    name: "54: OTOGAR - KEMER AKTARMA MERKEZİ",
  },
  {
    id: "57",
    name: "57: ALTINDAĞ - KEMER AKTARMA MERKEZİ",
  },
  {
    id: "58",
    name: "58: KANDERE - KEMER AKTARMA MERKEZİ",
  },
  {
    id: "59",
    name: "59: BORNOVA METRO - KEMER AKTARMA MERKEZİ",
  },
  {
    id: "60",
    name: "60: PINARBAŞI - KEMER AKTARMA MERKEZİ",
  },
  {
    id: "64",
    name: "64: AYAKKABICILAR SİT. - KEMER AKTARMA MERKEZİ",
  },
  {
    id: "67",
    name: "67: PINARBAŞI - EVKA3 METRO",
  },
  {
    id: "72",
    name: "72: İŞÇİEVLERİ - KONAK",
  },
  {
    id: "74",
    name: "74: YENİGÜN MAH. - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "77",
    name: "77: NAFİZ GÜRMAN - HALKAPINAR METRO 2",
  },
  {
    id: "78",
    name: "78: YAMANLAR - HALKAPINAR METRO 2",
  },
  {
    id: "82",
    name: "82: SİTELER - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "84",
    name: "84: SALİH OMURTAK - ÜÇYOL METRO",
  },
  {
    id: "89",
    name: "89: CENNETOĞLU - ÜÇYOL METRO",
  },
  {
    id: "92",
    name: "92: FUAR İZMİR - ÜÇYOL METRO",
  },
  {
    id: "102",
    name: "102: ALPASLAN MAH. - HALKAPINAR METRO",
  },
  {
    id: "104",
    name: "104: BUCA TOPLU KONUTLARI - KONAK",
  },
  {
    id: "105",
    name: "105: ÇAMLIKULE - KONAK",
  },
  {
    id: "108",
    name: "108: ESERKENT - ÜÇYOL METRO",
  },
  {
    id: "111",
    name: "111: NALDÖKEN - EVKA3 METRO",
  },
  {
    id: "114",
    name: "114: EVKA 3 - EVKA3 METRO",
  },
  {
    id: "117",
    name: "117: KAVAKLIDERE - KEMER AKTARMA MERKEZİ",
  },
  {
    id: "119",
    name: "119: ALTINDAĞ - BORNOVA METRO",
  },
  {
    id: "121",
    name: "121: MAVİŞEHİR AKTARMA MERKEZİ - KONAK",
  },
  {
    id: "123",
    name: "123: ŞİRİNEVLER - ÇİĞLİ AKTARMA MERKEZİ",
  },
  {
    id: "124",
    name: "124: ALİ FUAT ERDEN - ÜÇYOL METRO",
  },
  {
    id: "125",
    name: "125: MUSTAFA KEMAL MAH - HALKAPINAR METRO2",
  },
  {
    id: "126",
    name: "126: CUMHURİYET MAH. - KARŞIYAKA",
  },
  {
    id: "128",
    name: "128: EGEKENT 2 - EGEKENT AKTARMA ",
  },
  {
    id: "135",
    name: "135: DOĞANÇAY - KARŞIYAKA",
  },
  {
    id: "136",
    name: "136: ÖRNEKKÖY - KARŞIYAKA",
  },
  {
    id: "137",
    name: "137: YAMANLAR - KARŞIYAKA",
  },
  {
    id: "140",
    name: "140: ÖRNEKKÖY - HALKAPINAR METRO2",
  },
  {
    id: "147",
    name: "147: POSTACI - HALKAPINAR METRO2",
  },
  {
    id: "148",
    name: "148: ONUR MAH. - HALKAPINAR METRO2",
  },
  {
    id: "149",
    name: "149: KAKLIÇ - ÇİĞLİ AKTARMA MERKEZİ",
  },
  {
    id: "152",
    name: "152: GAZİEMİR - KONAK",
  },
  {
    id: "153",
    name: "153: ÇAMKULE - KEMER AKTARMA MERKEZİ",
  },
  {
    id: "154",
    name: "154: ALTINDAĞ - HALKAPINAR METRO",
  },
  {
    id: "156",
    name: "156: SAĞLIK OCAĞI - ÜÇYOL METRO",
  },
  {
    id: "157",
    name: "157: AKTEPE MAHALLESİ - KONAK",
  },
  {
    id: "167",
    name: "167: BALÇOVA KABRİSTAN - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "168",
    name: "168: EVKA 4 - HALKAPINAR METRO",
  },
  {
    id: "171",
    name: "171: TINAZTEPE - KONAK",
  },
  {
    id: "176",
    name: "176: DEMİRCİKÖY - ADATEPE",
  },
  {
    id: "177",
    name: "177: KAYNAKLAR - ADATEPE",
  },
  {
    id: "193",
    name: "193: YURTOĞLU - KONAK",
  },
  {
    id: "196",
    name: "196: NAFİZ GÜRMAN - KARŞIYAKA İSKELE",
  },
  {
    id: "197",
    name: "197: NAFİZ GÜRMAN - KARŞIYAKA",
  },
  {
    id: "200",
    name: "200: MAVİŞEHİR AKTARMA MERKEZİ - HAVALİMANI",
  },
  {
    id: "202",
    name: "202: CUMHURİYET MEYDANI - HAVALİMANI",
  },
  {
    id: "204",
    name: "204: BORNOVA METRO - HAVALİMANI",
  },
  {
    id: "206",
    name: "206: ŞİRİNYER AKTARMA MERKEZİ - HAVALİMANI",
  },
  {
    id: "207",
    name: "207: BAYRAKLI KYK KIZ YURDU - KATİP ÇELEBI ÜNIVERSITESI",
  },
  {
    id: "208",
    name: "208: BORNOVA METRO - EGE ÜNİVERSITESI SAĞLIK BILIMLERI FAKÜLTESI",
  },
  {
    id: "212",
    name: "212: BOSTANLI İSKELE - BORNOVA METRO",
  },
  {
    id: "213",
    name: "213: BOSTANLI İSKELE - TINAZTEPE",
  },
  {
    id: "214",
    name: "214: EVKA3 METRO - KEMER",
  },
  {
    id: "221",
    name: "221: ŞEMİKLER - BOSTANLI İSKELE",
  },
  {
    id: "222",
    name: "222: ŞEMİKLER - KARŞIYAKA İSKELE",
  },
  {
    id: "224",
    name: "224: CENNETÇEŞME - KONAK",
  },
  {
    id: "229",
    name: "229: YAKAKENT MAHALLESİ - BOSTANLI İSKELE",
  },
  {
    id: "233",
    name: "233: ESBAŞ AKTARMA MERKEZİ - KONAK",
  },
  {
    id: "236",
    name: "236: ŞİRİNYER AKTARMA MERKEZİ - GÜMRÜK",
  },
  {
    id: "240",
    name: "240: ZÜBEYDE HANIM MAH. - HALKAPINAR METRO2",
  },
  {
    id: "247",
    name: "247: EVKA 6 - ÇİĞLİ AKTARMA MERKEZİ",
  },
  {
    id: "249",
    name: "249: EVKA 4 - KEMER",
  },
  {
    id: "253",
    name: "253: H.PINAR METRO 2 - KONAK",
  },
  {
    id: "258",
    name: "258: ONUR MAH. - KARŞIYAKA",
  },
  {
    id: "267",
    name: "267: PINARBAŞI - BORNOVA METRO",
  },
  {
    id: "268",
    name: "268: DOĞANLAR - BORNOVA METRO",
  },
  {
    id: "277",
    name: "277: OTOGAR - TINAZTEPE",
  },
  {
    id: "285",
    name: "285: EVKA 1 - KONAK",
  },
  {
    id: "290",
    name: "290: BOSTANLI İSKELE - TINAZTEPE",
  },
  {
    id: "295",
    name: "295: HARMANDALI - EGEKENT AKTARMA MERKEZİ",
  },
  {
    id: "302",
    name: "302: OTOGAR - KONAK",
  },
  {
    id: "303",
    name: "303: BUCA HEYKEL - KONAK",
  },
  {
    id: "304",
    name: "304: TINAZTEPE-KONAK",
  },
  {
    id: "305",
    name: "305: 2. İNÖNÜ MAH. - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "311",
    name: "311: İNCİRALTI - F.ALTAY",
  },
  {
    id: "313",
    name: "313: YENİ MEZARLIK - BORNOVA METRO",
  },
  {
    id: "314",
    name: "314: EVKA 3 - BORNOVA METRO",
  },
  {
    id: "315",
    name: "315: KARAÇAM - EVKA3 METRO",
  },
  {
    id: "316",
    name: "316: BEŞYOL - EVKA3 METRO",
  },
  {
    id: "317",
    name: "317: KAVAKLIDERE - EVKA3 METRO",
  },
  {
    id: "321",
    name: "321: ÇAMLI - F. ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "322",
    name: "322: MUSTAFA KEMAL MAHALLESİ - BOSTANLI İSKELE",
  },
  {
    id: "326",
    name: "326: MUSTAFA KEMAL MAH. - KARŞIYAKA",
  },
  {
    id: "327",
    name: "327: İNÖNÜ MAHALLESİ-BOSTANLI İSKELE",
  },
  {
    id: "328",
    name: "328: BORNOVA METRO - SALHANE AKTARMA MERKEZİ",
  },
  {
    id: "329",
    name: "329: GÜZELTEPE - ÇİĞLİ AKTARMA MERKEZİ",
  },
  {
    id: "330",
    name: "330: BOSTANLI İSKELE - EVKA3 METRO",
  },
  {
    id: "335",
    name: "335: DOĞANÇAY - HALKAPINAR METRO 2",
  },
  {
    id: "338",
    name: "338: BORNOVA METRO - SALHANE AKTARMA MERKEZİ",
  },
  {
    id: "342",
    name: "342: EGEKENT - ÇİĞLİ AKTARMA MERKEZİ",
  },
  {
    id: "344",
    name: "344: EVKA 2 - ÇİĞLİ AKTARMA MERKEZİ",
  },
  {
    id: "346",
    name: "346: EVKA 5 - EGEKENT AKTARMA MERKEZİ",
  },
  {
    id: "353",
    name: "353: GAZİEMİR - TINAZTEPE",
  },
  {
    id: "358",
    name: "358: PINARBAŞI - BORNOVA METRO",
  },
  {
    id: "359",
    name: "359: R.ŞEVKET İNCE MAH. - SALHANE AKTARMA MERKEZİ",
  },
  {
    id: "361",
    name: "361: BAHRİYE ÜÇOK - KARŞIYAKA İSKELE",
  },
  {
    id: "364",
    name: "364: GERİKAZANIMCILAR SİTESİ - HALKAPINAR METRO",
  },
  {
    id: "365",
    name: "365: KAYADİBİ - EVKA3 METRO",
  },
  {
    id: "367",
    name: "367: ÜMİT MAH. - KEMER AKTARMA MERKEZİ",
  },
  {
    id: "368",
    name: "368: ÜMİT MAH. - BORNOVA METRO",
  },
  {
    id: "374",
    name: "374: İZKENT - KONAK",
  },
  {
    id: "390",
    name: "390: TINAZTEPE - BORNOVA METRO",
  },
  {
    id: "412",
    name: "412: TINAZTEPE - YERLEŞKE",
  },
  {
    id: "413",
    name: "413: AHMET YESEVİ YURDU CUMHURİYET B. - DEÜ TINAZTEPE YERLEŞKESI",
  },
  {
    id: "417",
    name: "417: BUCA KOOP - KOŞU AKTARMA MERKEZİ",
  },
  {
    id: "418",
    name: "418: ŞİRİNYER AKTARMA MERKEZİ - H.PINAR METRO",
  },
  {
    id: "423",
    name: "423: ŞİRİNEVLER - BOSTANLI İSKELE",
  },
  {
    id: "426",
    name: "426: MUSTAFA KEMAL MAH - HALKAPINAR METRO2",
  },
  {
    id: "428",
    name: "428: EGEKENT 2 - BOSTANLI İSKELE",
  },
  {
    id: "429",
    name: "429: GÜZELTEPE - BOSTANLI İSKELE",
  },
  {
    id: "430",
    name: "430: YAKAKENT MAHALLESİ - BOSTANLI İSKELE",
  },
  {
    id: "434",
    name: "434: KÖRFEZ MAHALLESI - HALKAPINAR METRO 2",
  },
  {
    id: "435",
    name: "435: KÖRFEZ MAHALLESI - BOSTANLI İSKELE",
  },
  {
    id: "441",
    name: "441: ÇINARTEPE - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "442",
    name: "442: ATATÜRK MAHALLESİ - BOSTANLI İSKELE",
  },
  {
    id: "443",
    name: "443: EGEKENT - BOSTANLI İSKELE",
  },
  {
    id: "445",
    name: "445: EVKA 2 - BOSTANLI İSKELE",
  },
  {
    id: "446",
    name: "446: EVKA 5 - BOSTANLI İSKELE",
  },
  {
    id: "447",
    name: "447: EVKA 6 - BOSTANLI İSKELE",
  },
  {
    id: "449",
    name: "449: İZYUVA - EVKA3 METRO",
  },
  {
    id: "465",
    name: "465: TINAZTEPE - KONAK",
  },
  {
    id: "466",
    name: "466: ŞİRİNYER AKTARMA MERKEZİ - KONAK",
  },
  {
    id: "470",
    name: "470: TINAZTEPE - LOZAN MEYDANI",
  },
  {
    id: "471",
    name: "471: TINAZTEPE - KONAK",
  },
  {
    id: "475",
    name: "475: TINAZTEPE ÜNİVERSİTESİ - HALKAPINAR METRO",
  },
  {
    id: "476",
    name: "476: TINAZTEPE - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "477",
    name: "477: NAFİZ GÜRMAN - HALKAPINAR METRO2",
  },
  {
    id: "480",
    name: "480: İNCİRALTI - ÜÇKUYULAR İSKELE",
  },
  {
    id: "484",
    name: "484: YEŞİLBAĞLAR - KONAK",
  },
  {
    id: "485",
    name: "485: GAZİEMİR İLÇE TERMİNALİ - KONAK",
  },
  {
    id: "486",
    name: "486: OYAK SİTESİ - İNCİRALTI",
  },
  {
    id: "487",
    name: "487: DEMİRKÖPRÜ - KARŞIYAKA",
  },
  {
    id: "490",
    name: "490: TINAZTEPE - ÜÇYOL",
  },
  {
    id: "491",
    name: "491: EVKA 7 - SARNIÇ AKTARMA MERKEZİ",
  },
  {
    id: "498",
    name: "498: BORNOVA METRO - HALKAPINAR METRO",
  },
  {
    id: "501",
    name: "501: ÇİÇEK MAH. - HALKAPINAR METRO",
  },
  {
    id: "502",
    name: "502: CENGİZHAN - HALKAPINAR METRO",
  },
  {
    id: "503",
    name: "503: BARIŞ KAHVESİ - HALKAPINAR METRO",
  },
  {
    id: "504",
    name: "504: FUAT EDİP BAKSI - HALKAPINAR METRO",
  },
  {
    id: "505",
    name: "505: ÇAMKULE - BORNOVA METRO",
  },
  {
    id: "508",
    name: "508: MENDERES - KONAK",
  },
  {
    id: "510",
    name: "510: GAZİEMİR - BALÇOVA",
  },
  {
    id: "513",
    name: "513: GAZİ MEYDANI - HALKAPINAR METRO",
  },
  {
    id: "515",
    name: "515: TINAZTEPE - EVKA3 METRO",
  },
  {
    id: "516",
    name: "516: YENİTEPE EVLERİ - GAZİEMİR SEMT GARAJI",
  },
  {
    id: "517",
    name: "517: UZUNDERE TOPLU KONUTLARI - F.ALTAY ",
  },
  {
    id: "520",
    name: "520: SALİH OMURTAK - ÜÇYOL METRO",
  },
  {
    id: "522",
    name: "522: UZUNDERE TOPLU KONUTLARI - ÜÇYOL METRO",
  },
  {
    id: "523",
    name: "523: UZUNDERE - ÜÇYOL METRO",
  },
  {
    id: "524",
    name: "524: CENNETÇEŞME - ÜÇYOL METRO",
  },
  {
    id: "529",
    name: "529: YAKAKENT MAHALLESİ - ÇİĞLİ AKTARMA MERKEZİ",
  },
  {
    id: "532",
    name: "532: BAYRAKLI ŞEHİR HASTANESİ - BOSTANLI İSKELE",
  },
  {
    id: "533",
    name: "533: BAYRAKLI ŞEHİR HASTANESİ - BORNOVA METRO",
  },
  {
    id: "534",
    name: "534: BAYRAKLI ŞEHİR HASTANESI -  HALKAPINAR METRO",
  },
  {
    id: "535",
    name: "535: BAYRAKLI ŞEHİR HASTANESİ - EGEKENT AKTARMA MERKEZİ",
  },
  {
    id: "539",
    name: "539: YENİTEPE EVLERİ - SALHANE AKTARMA MERKEZİ",
  },
  {
    id: "543",
    name: "543: BOSTANLI İSKELE - H.PINAR METRO",
  },
  {
    id: "547",
    name: "547: ÇİĞLİ AKTARMA MERKEZİ - BOSTANLI İSKELE",
  },
  {
    id: "550",
    name: "550: GÜNALTAY - KONAK",
  },
  {
    id: "551",
    name: "551: NARLIDERE - F.ALTAY",
  },
  {
    id: "555",
    name: "555: OTOGAR - HALKAPINAR METRO",
  },
  {
    id: "556",
    name: "556: ÇAMLIK - ÜÇYOL METRO",
  },
  {
    id: "557",
    name: "557: BAYRAKLI TOPLU KONUTLAR - BAYRAKLI İZBAN ",
  },
  {
    id: "558",
    name: "558: BAYRAKLI TOPLU KONUTLARI - BORNOVA METRO EKSPRES",
  },
  {
    id: "559",
    name: "559: BAYRAKLI TOPLU KONUTLARI - EVKA3 METRO",
  },
  {
    id: "560",
    name: "560: PINARBAŞI - HALKAPINAR METRO",
  },
  {
    id: "564",
    name: "564: AYAKKABICILAR SİTESİ - HALKAPINAR METRO",
  },
  {
    id: "565",
    name: "565: EVKA 4 - BORNOVA METRO",
  },
  {
    id: "566",
    name: "566: EVKA 4 - BORNOVA METRO",
  },
  {
    id: "568",
    name: "568: EVKA 4 - BORNOVA METRO",
  },
  {
    id: "570",
    name: "570: LAKA MAHALLESİ - BORNOVA METRO",
  },
  {
    id: "575",
    name: "575: MALİYECİLER MAHALLESİ - ÜÇYOL METRO",
  },
  {
    id: "577",
    name: "577: NAFİZ GÜRMAN-HALKAPINAR METRO 2",
  },
  {
    id: "579",
    name: "579: YEŞİLYURT - ÜÇYOL METRO",
  },
  {
    id: "584",
    name: "584: İNÖNÜ MAH. - BORNOVA METRO",
  },
  {
    id: "585",
    name: "585: EVKA 4 - BORNOVA METRO",
  },
  {
    id: "587",
    name: "587: LİMONTEPE - KONAK",
  },
  {
    id: "588",
    name: "588: YENİ ÇAMLIK - KONAK",
  },
  {
    id: "595",
    name: "595: 9 EYLÜL MAHALLESI - BOSTANLI İSKELE",
  },
  {
    id: "596",
    name: "596: KATIP ÇELEBI ÜNIVERSITESI - EGEKENT AKTARMA MERKEZİ",
  },
  {
    id: "597",
    name: "597: M. ERENER - BAYRAKLI SEVGİ YOLU ",
  },
  {
    id: "598",
    name: "598: BAYRAKLI TOPLU KONUTLARI - BAYRAKLI İZBAN",
  },
  {
    id: "599",
    name: "599: M.ERENER - HALKAPINAR METRO",
  },
  {
    id: "602",
    name: "602: MENEMEN AKTARMA - İZMİR OTOGAR ",
  },
  {
    id: "608",
    name: "608: EGEKENT 2 - İZMİR OTOGAR ",
  },
  {
    id: "609",
    name: "609: KÖFÜNDERE-ÖDEMİŞ",
  },
  {
    id: "610",
    name: "610: FUAR İZMİR - GAZİEMİR SEMT GARAJI",
  },
  {
    id: "611",
    name: "611: ÇAYLI-ÖDEMİŞ",
  },
  {
    id: "616",
    name: "616: KAYMAKÇI-ÖDEMİŞ",
  },
  {
    id: "618",
    name: "618: ERTUĞRULKÖY-ÖDEMİŞ",
  },
  {
    id: "619",
    name: "619: SEYREK - ULUKENT AKTARMA MERKEZİ 2 ",
  },
  {
    id: "621",
    name: "621: KURUCUOVA-ÖDEMİŞ",
  },
  {
    id: "640",
    name: "640: SIĞACIK - SEFERİHİSAR",
  },
  {
    id: "648",
    name: "648: GAZİ MAHALLESİ - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "650",
    name: "650: FUAR İZMİR - BALÇOVA",
  },
  {
    id: "651",
    name: "651: OTOGAR - YILDIZEVLER",
  },
  {
    id: "652",
    name: "652: OTOGAR - ÖĞRETMENEVİ",
  },
  {
    id: "653",
    name: "653: OTOGAR - TEPEKÖY",
  },
  {
    id: "656",
    name: "656: DEVLET HASTANESİ - DİKİLİSULTAN",
  },
  {
    id: "658",
    name: "658: TOKİ - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "660",
    name: "660: YENİ FOÇA - İZMİR OTOGAR",
  },
  {
    id: "661",
    name: "661: YENİ FOÇA - ALİAĞA",
  },
  {
    id: "662",
    name: "662: CENGİZHAN - KEMER",
  },
  {
    id: "664",
    name: "664: YENİ FOÇA - ESKI FOÇA",
  },
  {
    id: "665",
    name: "665: YENİ FOÇA - SİTELER",
  },
  {
    id: "666",
    name: "666: YENİ FOÇA - KOZBEYLI",
  },
  {
    id: "668",
    name: "668: NAZARKÖY - KEMALPAŞA",
  },
  {
    id: "671",
    name: "671: ŞİRİNYER AKTARMA MERKEZİ - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "675",
    name: "675: SEFERİHİSAR - F.ALTAY AKT. MER. EKSPRES",
  },
  {
    id: "676",
    name: "676: TINAZTEPE - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "678",
    name: "678: ALANKIYI-BAYINDIR",
  },
  {
    id: "679",
    name: "679: SARIYURT-BAYINDIR",
  },
  {
    id: "680",
    name: "680: BOZYAKA - LOZAN MEYDANI",
  },
  {
    id: "681",
    name: "681: F.ALTAY - LOZAN MEYDANI",
  },
  {
    id: "684",
    name: "684: URLA - F.ALTAY AKT. MER. EKSPRES",
  },
  {
    id: "690",
    name: "690: TINAZTEPE - F.ALTAY ",
  },
  {
    id: "691",
    name: "691: GAZİEMİR - LOZAN MEYDAN",
  },
  {
    id: "692",
    name: "692: KARAKUYU - PANCAR AKTARMA",
  },
  {
    id: "695",
    name: "695: ULUKENT KOOP - EGEKENT AKTARMA MERKEZİ",
  },
  {
    id: "698",
    name: "698: ASARLIK TOPLU KONUTLARI - ULUKENT AKTARMA MERKEZİ 1",
  },
  {
    id: "699",
    name: "699: M.ERENER - KEMER",
  },
  {
    id: "701",
    name: "701: TORBALI - TEKELİ",
  },
  {
    id: "705",
    name: "705: AYRANCILAR - SARNIÇ AKTARMA MERKEZİ",
  },
  {
    id: "707",
    name: "707: PANCAR AKTARMA MERKEZİ - MENDERES",
  },
  {
    id: "709",
    name: "709: DEMİRCİ - PANCAR AKTARMA MERKEZİ",
  },
  {
    id: "710",
    name: "710: YAZIBAŞI - KUŞÇUBURUN AKTARMA MERKEZİ",
  },
  {
    id: "712",
    name: "712: PANCAR AKTARMA - TORBALI",
  },
  {
    id: "713",
    name: "713: DEÜ MESLEK YÜKSEK OKULU - TORBALI",
  },
  {
    id: "714",
    name: "714: DEÜ MESLEK YÜKSEK OKULU - TORBALI AKTARMA MERKEZİ",
  },
  {
    id: "715",
    name: "715: DEÜ MESLEK YÜKSEK OKULU - TORBALI AKTARMA MERKEZİ",
  },
  {
    id: "719",
    name: "719: ÇAPAK - TORBALI",
  },
  {
    id: "721",
    name: "721: KARAKUYU - TORBALI",
  },
  {
    id: "722",
    name: "722: YAZIBAŞI - TORBALI",
  },
  {
    id: "724",
    name: "724: ŞEHİTLER - TORBALI AKTARMA MERKEZİ",
  },
  {
    id: "727",
    name: "727: BAYINDIR - TORBALI AKTARMA MERKEZİ",
  },
  {
    id: "728",
    name: "728: KISIK SANAYİ - SARNIÇ AKTARMA MERKEZİ",
  },
  {
    id: "729",
    name: "729: ATAKÖY - CUMAOVASI AKTARMA MERKEZİ",
  },
  {
    id: "732",
    name: "732: SEFERİHİSAR - URLA",
  },
  {
    id: "733",
    name: "733: YAĞCILAR - URLA",
  },
  {
    id: "734",
    name: "734: ÖZBEK - URLA",
  },
  {
    id: "737",
    name: "737: KADIOVACIK - URLA",
  },
  {
    id: "738",
    name: "738: ÇEŞMEALTI - URLA",
  },
  {
    id: "741",
    name: "741: YAMANLAR KÖYÜ - KARŞIYAKA",
  },
  {
    id: "742",
    name: "742: SANCAKLI KÖYÜ - KARŞIYAKA",
  },
  {
    id: "743",
    name: "743: TİRE - BELEVİ İZBAN",
  },
  {
    id: "744",
    name: "744: FOÇA - HATUNDERE AKTARMA MERKEZİ",
  },
  {
    id: "745",
    name: "745: YENİ FOÇA - BİÇEROVA AKTARMA MERKEZİ",
  },
  {
    id: "746",
    name: "746: ÇAKMAKLI - BİÇEROVA AKTARMA MERKEZİ",
  },
  {
    id: "747",
    name: "747: EMİRALEM - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "748",
    name: "748: ULUKENT AKTARMA MERKEZİ 1- MENEMEN AKTARMA MERKEZİ ",
  },
  {
    id: "749",
    name: "749: ULUKENT AKTARMA MERKEZİ 1 - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "750",
    name: "750: YENİ FOÇA - ULUKENT AKTARMA MERKEZİ 2",
  },
  {
    id: "751",
    name: "751: SASALI - ÇİĞLİ AKTARMA MERKEZİ",
  },
  {
    id: "752",
    name: "752: BURUNCUK - HATUNDERE AKTARMA MERKEZİ",
  },
  {
    id: "753",
    name: "753: GÖKTEPE - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "754",
    name: "754: BOZALAN - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "755",
    name: "755: SÜLEYMANLI - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "756",
    name: "756: KOZBEYLİ - MENEMEN AKTARMA ",
  },
  {
    id: "757",
    name: "757: MALTEPE - ULUKENT AKTARMA MERKEZİ 2",
  },
  {
    id: "758",
    name: "758: ÇUKURKÖY - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "759",
    name: "759: KARAORMAN - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "760",
    name: "760: ÇEŞME-URLA",
  },
  {
    id: "761",
    name: "761: KARABURUN-URLA",
  },
  {
    id: "762",
    name: "762: GÜZELBAHÇE - URLA",
  },
  {
    id: "763",
    name: "763: DÜVERLİK - TORBALI",
  },
  {
    id: "766",
    name: "766: ANSIZCA - KEMALPAŞA",
  },
  {
    id: "767",
    name: "767: HALİLBEYLİ - KEMALPAŞA",
  },
  {
    id: "768",
    name: "768: VİŞNELİ - KEMALPAŞA",
  },
  {
    id: "769",
    name: "769: ÇAMBEL - KEMALPAŞA",
  },
  {
    id: "770",
    name: "770: SELÇUK - TORBALI AKTARMA MERKEZİ",
  },
  {
    id: "772",
    name: "772: BEŞPINAR - KEMALPAŞA",
  },
  {
    id: "774",
    name: "774: TİRE TOPLU KONUTLAR - KAHRAT",
  },
  {
    id: "775",
    name: "775: ÖZDERE - CUMAOVASI AKTARMA MERKEZİ",
  },
  {
    id: "776",
    name: "776: DOĞANBEY - CUMAOVASI AKTARMA MERKEZİ",
  },
  {
    id: "777",
    name: "777: DOĞAL YAŞAM PARKI - KARŞIYAKA",
  },
  {
    id: "778",
    name: "778: ÖZDERE - ÜRKMEZ",
  },
  {
    id: "780",
    name: "780: BÜLBÜLDERE - TORBALI AKTARMA MERKEZİ",
  },
  {
    id: "781",
    name: "781: TULUMKÖY - TORBALI AKTARMA MERKEZİ",
  },
  {
    id: "782",
    name: "782: TAŞKESİK - TORBALI AKTARMA MERKEZİ",
  },
  {
    id: "783",
    name: "783: BELEVİ - TORBALI",
  },
  {
    id: "784",
    name: "784: DOĞANCILAR - TORBALI",
  },
  {
    id: "785",
    name: "785: DAĞTEKKE - TORBALI",
  },
  {
    id: "786",
    name: "786: KARAOT - TORBALI",
  },
  {
    id: "787",
    name: "787: OSMANLAR - BAYINDIR",
  },
  {
    id: "788",
    name: "788: HAVUZBAŞI - BAYINDIR",
  },
  {
    id: "789",
    name: "789: EFEMÇUKURU - CUMAOVASI AKTARMA MERKEZİ",
  },
  {
    id: "790",
    name: "790: HİSARLIK - BAYINDIR",
  },
  {
    id: "791",
    name: "791: ÇAMLIBEL - BAYINDIR",
  },
  {
    id: "792",
    name: "792: GÖLOVA - CUMAOVASI AKTARMA MERKEZİ",
  },
  {
    id: "793",
    name: "793: BALCILAR - BAYINDIR",
  },
  {
    id: "794",
    name: "794: KÜNER - CUMAOVASI AKTARMA MERKEZİ",
  },
  {
    id: "795",
    name: "795: ÖDEMİŞ-TORBALI",
  },
  {
    id: "796",
    name: "796: BEYDAĞ-ÖDEMİŞ",
  },
  {
    id: "798",
    name: "798: TİRE-TORBALI AKTARMA MERKEZİ",
  },
  {
    id: "799",
    name: "799: ÇATALCA - CUMAOVASI AKTARMA",
  },
  {
    id: "800",
    name: "800: MENEMEN AKTARMA - BORNOVA METRO",
  },
  {
    id: "801",
    name: "801: KİRAZ - BEYDAĞ",
  },
  {
    id: "803",
    name: "803: KİRAZ - ÖDEMİŞ",
  },
  {
    id: "804",
    name: "804: DEREKÖY - CUMAOVASI AKTARMA MERKEZI",
  },
  {
    id: "805",
    name: "805: ÇAMLIKULE - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "806",
    name: "806: KİRAZ - OTOGAR",
  },
  {
    id: "808",
    name: "808: CUMAOVASI AKTARMA MERKEZİ - ESBAŞ AKTARMA MERKEZİ",
  },
  {
    id: "810",
    name: "810: ATATÜRK MAHALLESİ - EGEKENT AKTARMA MERKEZİ",
  },
  {
    id: "811",
    name: "811: ENGELLİLER MERKEZİ - MONTRÖ",
  },
  {
    id: "812",
    name: "812: BAKIRÇAY ÜNİVERSİTESİ - ULUKENT AKTARMA MERKEZİ 2 ",
  },
  {
    id: "814",
    name: "814: MENDERES - CUMAOVASI AKTARMA MERKEZİ",
  },
  {
    id: "816",
    name: "816: ÇİĞLİ BÖLGE EĞİTİM HASTANESİ - EGEKENT AKTARMA MERKEZİ",
  },
  {
    id: "817",
    name: "817: EGEKENT AKTARMA MERKEZİ - ÇİĞLİ AKTARMA MERKEZİ",
  },
  {
    id: "818",
    name: "818: ESBAŞ AKTARMA MERKEZİ - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "820",
    name: "820: HARMANDALI - BOSTANLI İSKELE",
  },
  {
    id: "821",
    name: "821: MAVİŞEHİR AKTARMA MERKEZİ - BOSTANLI İSKELE",
  },
  {
    id: "823",
    name: "823: ÜÇYOL - GAZİEMİR SEMT GARAJI",
  },
  {
    id: "826",
    name: "826: GAZİ MAHALLESI - ULUKENT AKTARMA MERKEZİ 1",
  },
  {
    id: "827",
    name: "827: ULUKENT AKTARMA MERKEZİ - BOSTANLI İSKELE",
  },
  {
    id: "828",
    name: "828: SARNIÇ - YENİ ÇAMLIK",
  },
  {
    id: "829",
    name: "829: ÜRKMEZ-CUMAOVASI AKTARMA",
  },
  {
    id: "830",
    name: "830: EGEKENT AKTARMA MERKEZİ - BORNOVA METRO",
  },
  {
    id: "831",
    name: "831: DEMİRCİDERE - BERGAMA",
  },
  {
    id: "832",
    name: "832: YUKARICUMA - BERGAMA",
  },
  {
    id: "833",
    name: "833: GÜNEŞLİ - BERGAMA",
  },
  {
    id: "834",
    name: "834: YENİ MAHALLE - ALİAĞA AKTARMA MERKEZİ",
  },
  {
    id: "835",
    name: "835: BERGAMA - ALİAĞA AKTARMA MERKEZİ",
  },
  {
    id: "836",
    name: "836: KINIK-BERGAMA",
  },
  {
    id: "837",
    name: "837: DİKİLİ-ALİAĞA AKTARMA MERKEZİ",
  },
  {
    id: "838",
    name: "838: ŞİRİNYER AKTARMA MERKEZİ - GÜMRÜK",
  },
  {
    id: "839",
    name: "839: DİKİLİ DEVLET HASTANESİ - DİKİLİ İLÇE GARAJI",
  },
  {
    id: "842",
    name: "842: ZEYTİNDAĞ - BERGAMA",
  },
  {
    id: "847",
    name: "847: POSTACILAR MAHALLESİ - KARŞIYAKA İSKELE",
  },
  {
    id: "848",
    name: "848: KOYUNDERE - ULUKENT AKTARMA MERKEZİ 1",
  },
  {
    id: "849",
    name: "849: YENİ ŞAKRAN MAHALLESİ - ALİAĞA AKTARMA",
  },
  {
    id: "850",
    name: "850: TUZÇULLU -SEYREK - ULUKENT AKTARMA MERKEZİ 2",
  },
  {
    id: "853",
    name: "853: EGEKENT AKTARMA MERKEZİ - KARŞIYAKA İSKELE",
  },
  {
    id: "866",
    name: "866: BUCA TOPLU KONUTLARI - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "868",
    name: "868: MENEMEN PLASTİK İHTİSAS ORGANİZE SANAYİ - ATATÜRK MAHALLESİ - MENEMEN AKTARMA MERKEZİ",
  },
  {
    id: "871",
    name: "871: İŞÇİEVLERİ - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "873",
    name: "873: YENİTEPE EVLERİ - FAHRETTİN ALTAY AKTARMA",
  },
  {
    id: "874",
    name: "874: İZKENT - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "875",
    name: "875: EVKA 1 - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "876",
    name: "876: ŞİRİNKAPI - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "877",
    name: "877: UZUNDERE TOPLU KONUTLARI - GAZİEMİR SEMT GARAJI",
  },
  {
    id: "878",
    name: "878: TINAZTEPE - ŞİRİNYER AKTARMA MERKEZİ",
  },
  {
    id: "879",
    name: "879: F.ALTAY - GAZİEMİR SEMT GARAJI",
  },
  {
    id: "882",
    name: "882: İYTE - URLA",
  },
  {
    id: "883",
    name: "883: İYTE - F.ALTAY AKT. MER. EKSPRES",
  },
  {
    id: "887",
    name: "887: SARNIÇ AKTARMA MERKEZİ - KONAK",
  },
  {
    id: "889",
    name: "889: SARNIÇ - SARNIÇ AKTARMA MERKEZİ",
  },
  {
    id: "891",
    name: "891: EVKA 7 - GAZİEMİR SEMT GARAJI",
  },
  {
    id: "906",
    name: "906: ÇEŞME - URLA",
  },
  {
    id: "909",
    name: "909: ZEYTİNALANI - F. ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "910",
    name: "910: GAZİEMİR - KONAK",
  },
  {
    id: "912",
    name: "912: EGEKENT AKTARMA MERKEZİ - ALSANCAK GAR",
  },
  {
    id: "920",
    name: "920: ÇİĞLİ - KONAK",
  },
  {
    id: "930",
    name: "930: BORNOVA - KONAK",
  },
  {
    id: "940",
    name: "940: BUCA - KONAK",
  },
  {
    id: "945",
    name: "945: ESENTEPE - ÜÇKUYULAR İSKELE",
  },
  {
    id: "946",
    name: "946: GENERAL KAZIM ÖZALP MAH.- ÜÇKUYULAR İSKELE",
  },
  {
    id: "950",
    name: "950: NARLIDERE - KONAK",
  },
  {
    id: "951",
    name: "951: LOZAN MEYDANI - KONAK",
  },
  {
    id: "961",
    name: "961: İÇMELER - URLA",
  },
  {
    id: "962",
    name: "962: URLA - YELKİ",
  },
  {
    id: "963",
    name: "963: EVKA 3 METRO - ALSANCAK GAR",
  },
  {
    id: "966",
    name: "966: ULUCAK - EVKA3 METRO",
  },
  {
    id: "967",
    name: "967: ARMUTLU - KEMALPAŞA",
  },
  {
    id: "969",
    name: "969: BALÇOVA - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "971",
    name: "971: NARBEL - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "975",
    name: "975: SEFERİHİSAR - F.ALTAY AKTARMA",
  },
  {
    id: "977",
    name: "977: İZMİR DEMOKRASİ ÜNİVERSİTESİ - ÜÇKUYULAR İSKELE",
  },
  {
    id: "978",
    name: "978: PARLAK-URLA",
  },
  {
    id: "979",
    name: "979: ÖMÜR BELDESİ - SEFERİHİSAR",
  },
  {
    id: "981",
    name: "981: BALIKLIOVA - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "982",
    name: "982: İYTE - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "983",
    name: "983: BADEMLER - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "984",
    name: "984: URLA - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "985",
    name: "985: SEFERİHİSAR - F.ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "986",
    name: "986: ÜRKMEZ - SEFERİHİSAR",
  },
  {
    id: "987",
    name: "987: ÜRKMEZ - F. ALTAY AKTARMA MERKEZİ",
  },
  {
    id: "988",
    name: "988: KEMALPAŞA - EVKA3 METRO",
  },
  {
    id: "989",
    name: "989: ORHANLI - SEFERİHİSAR",
  },
  {
    id: "990",
    name: "990: BEYLER - SEFERİHİSAR",
  },
  {
    id: "991",
    name: "991: ÇAMTEPE - SEFERİHİSAR",
  },
];

export const getFormattedData = (data) => {
  if (data) {
    const result = [];
    let currentDay = [];
    const today = new Date();
    today.setDate(today.getDate() - 1); // start from yesterday
    let dayIndex = 0;

    data.forEach((item, idx) => {
      if (item.SIRA === "1" && idx !== 0) {
        const dateObj = new Date(today);
        dateObj.setDate(today.getDate() + dayIndex);

        const jsDayIndex = dateObj.getDay(); // 0 (Sunday) to 6 (Saturday)
        const turkishDayName = days[(jsDayIndex + 6) % 7].name; // Convert JS Sunday=0 to Turkish Monday=0

        result.push({
          date: dateObj.toLocaleDateString("tr-TR"),
          day: turkishDayName,
          busHours: currentDay,
        });
        currentDay = [];
        dayIndex++;
      }
      currentDay.push(item);
    });

    // Push last group if any left
    if (currentDay.length > 0) {
      const dateObj = new Date(today);
      dateObj.setDate(today.getDate() + dayIndex);

      const jsDayIndex = dateObj.getDay();
      const turkishDayName = days[(jsDayIndex + 6) % 7].name;

      result.push({
        date: dateObj.toLocaleDateString("tr-TR"),
        day: turkishDayName,
        busHours: currentDay,
      });
    }

    // Only return first 8 days
    return result.slice(0, 8);
  }
  return;
};

export const fetchItems = async (hatNo, setData) => {
  try {
    // Temporary static solution. There is a cors issue when I try to fetch the data here and it works when I fetch in the server side.
    const response = await fetch(`/izmir-otobus-saatleri/api?hatNo=${hatNo}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const items = await response.json();
    setData(items || []);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
