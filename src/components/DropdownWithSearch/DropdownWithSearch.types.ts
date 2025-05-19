import { INameAndId } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";

export interface IDropdownWithSearch {
  items: INameAndId[];
  selected: INameAndId | null;
  setSelected: Dispatch<SetStateAction<INameAndId | null>>;
  placeholder: string;
}
