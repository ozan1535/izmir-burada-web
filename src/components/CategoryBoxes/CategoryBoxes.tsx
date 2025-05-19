import React from "react";
import CategoryBox from "./CategoryBox/CategoryBox";
import { ICategoryBox } from "./CategoryBox.types";

function CategoryBoxes({ items }: { items: ICategoryBox[] }) {
  return (
    <div className="grid grid-cols-1 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <CategoryBox item={item} key={item.id} />
      ))}
    </div>
  );
}

export default CategoryBoxes;
