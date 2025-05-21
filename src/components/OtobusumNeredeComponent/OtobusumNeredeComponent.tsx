"use client";
import React, { useState } from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import SearchInput from "@/components/SearchInput/SearchInput";
import Table from "@/components/Table/Table";
import {
  otobusumNeredeKeys,
  otobusumNeredeTableHeaderItems,
} from "@/app/[locale]/otobusum-nerede/helpers";

function OtobusumNeredeComponent({ title, placeholder }) {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (stationId: string) => {
    const response = await fetch(
      `https://openapi.izmir.bel.tr/api/iztek/duragayaklasanotobusler/${stationId}`
    );
    const items = await response.json();
    setData(items);
  };
  return (
    <PageTemplate title={title}>
      <div className="h-[60vh]">
        <SearchInput
          placeholder={placeholder}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onClick={() => fetchData(searchValue)}
        />
        {data.length ? (
          <Table
            headItems={otobusumNeredeTableHeaderItems}
            data={data}
            keys={otobusumNeredeKeys}
          />
        ) : null}
      </div>
    </PageTemplate>
  );
}

export default OtobusumNeredeComponent;
