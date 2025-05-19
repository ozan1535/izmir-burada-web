import { Dispatch, SetStateAction } from "react";

export interface ISearchInput {
  placeholder: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  onClick: () => void;
}
