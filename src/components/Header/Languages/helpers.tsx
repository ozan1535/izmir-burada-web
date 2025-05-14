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
