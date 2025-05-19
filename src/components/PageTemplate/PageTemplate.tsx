import React from "react";
import { IPageTemplate } from "./PageTemplate.types";

function PageTemplate({
  title = "",
  children,
  shouldRenderTitle = true,
}: IPageTemplate) {
  return (
    <div className="mt-20 px-4 sm:px-8 md:px-12 lg:px-32">
      {shouldRenderTitle && (
        <h1 className="text-center font-bold text-3xl text-gray-800">
          {title}
        </h1>
      )}
      {children}
    </div>
  );
}

export default PageTemplate;
