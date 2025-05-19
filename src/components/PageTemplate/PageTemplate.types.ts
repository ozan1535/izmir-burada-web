import { ReactNode } from "react";

export interface IPageTemplate {
  title: string;
  children?: ReactNode;
  shouldRenderTitle?: boolean;
}
