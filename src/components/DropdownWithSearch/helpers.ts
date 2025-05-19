import { INameAndId } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";

export const getFilteredNames = (items: INameAndId[], query: string) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const handleSelect = (
  setSelected: Dispatch<SetStateAction<INameAndId | null>>,
  setQuery: Dispatch<SetStateAction<string>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  item: INameAndId
) => {
  setSelected(item);
  setQuery(item.name);
  setIsOpen(false);
};

export const handleRemove = (
  setSelected: Dispatch<SetStateAction<INameAndId | null>>,
  setQuery: Dispatch<SetStateAction<string>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) => {
  setSelected(null);
  setQuery("");
  setIsOpen(false);
};
