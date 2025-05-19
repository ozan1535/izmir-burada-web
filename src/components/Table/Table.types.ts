import { ICommonKey, INameAndId } from "@/utils/types";

export interface ITable {
  headItems: INameAndId[];
  data: Record<string, any>[];
  keys: ICommonKey[];
  customComponent?: null | React.ElementType;
}
