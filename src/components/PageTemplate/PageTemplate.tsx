import React from "react";

function PageTemplate({ title = "", children, shouldRenderTitle = true }) {
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
