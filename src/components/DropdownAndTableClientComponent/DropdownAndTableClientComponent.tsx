"use client";
import React, { useState } from "react";
import DropdownWithSearch from "../DropdownWithSearch/DropdownWithSearch";
import { izmirDistincts } from "@/utils/helpers";
import Table from "../Table/Table";

export default function DropdownAndTableClientComponent({
  data,
  itemsForDropdownWithSearch,
  itemToFilter,
  placeholder,
  headItems,
  keys,
  customComponent = null,
}) {
  const [selected, setSelected] = useState(null);

  const filteredData = selected
    ? data.filter(
        (item) =>
          item[itemToFilter]?.localeCompare(selected.name, "tr", {
            sensitivity: "base",
          }) === 0
      )
    : data;

  return (
    <>
      <DropdownWithSearch
        items={itemsForDropdownWithSearch}
        selected={selected}
        setSelected={setSelected}
        placeholder={placeholder}
      />

      <Table
        headItems={headItems}
        data={filteredData}
        keys={keys}
        customComponent={customComponent}
      />
    </>
  );
}
