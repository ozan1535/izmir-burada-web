import { ParamValue } from "next/dist/server/request/params";
import { Dispatch, SetStateAction } from "react";

export const languageItems = [
  {
    code: "TR",
    flagSource: "/assets/flags/turkey-flag.svg",
  },
  {
    code: "EN",
    flagSource: "/assets/flags/united-states-flag.svg",
  },
  {
    code: "DE",
    flagSource: "/assets/flags/germany-flag.svg",
  },
];

export const toggleLanguageDropdown = (
  isLanguageOpen: boolean,
  setLanguageOpen: Dispatch<SetStateAction<boolean>>
) => {
  setLanguageOpen(!isLanguageOpen);
};

export const getFlagAndText = (locale: ParamValue) => {
  switch (locale) {
    case "tr":
      return {
        flagSrc: "/assets/flags/turkey-flag.svg",
        text: "TR",
      };
    case "de":
      return {
        flagSrc: "/assets/flags/germany-flag.svg",
        text: "DE",
      };
    case "en":
      return {
        flagSrc: "/assets/flags/united-states-flag.svg",
        text: "EN",
      };
    default:
      return {
        flagSrc: "/assets/flags/turkey-flag.svg",
        text: "TR",
      };
  }
};
