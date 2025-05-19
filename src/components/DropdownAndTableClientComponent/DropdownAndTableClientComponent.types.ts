import { ICommonKey, INameAndId } from "@/utils/types";

export interface IDropdownAndTableClientComponent {
  data: Record<string, any>[];
  itemsForDropdownWithSearch: INameAndId[];
  itemToFilter: string;
  placeholder: string;
  headItems: INameAndId[];
  keys: ICommonKey[];
  customComponent?: null | React.ElementType;
}
