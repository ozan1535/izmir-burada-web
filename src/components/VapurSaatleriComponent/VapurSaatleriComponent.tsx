"use client";
import React, { useState } from "react";
import DropdownWithSearch from "@/components/DropdownWithSearch/DropdownWithSearch";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { days, fetchData, ports } from "@/utils/helpers";
import RenderFerryTable from "@/components/RenderFerryTable/RenderFerryTable";
import { IHatData } from "./vapurSaatleriComponent.types";
import { INameAndId } from "@/utils/types";

function VapurSaatleriComponent({
  title,
  alertEmpty,
  alertSameInputs,
  departurePlaceholder,
  arrivalPlaceholder,
  dayPlaceholder,
  searchText,
}) {
  const [departure, setDeparture] = useState<INameAndId | null>(null);
  const [arrival, setArrival] = useState<INameAndId | null>(null);
  const [day, setDay] = useState<INameAndId | null>(null);
  const [data, setData] = useState<IHatData[][]>([]);

  const fetchItems = async () => {
    if (!departure || !arrival || !day) {
      alert(alertEmpty);
      return;
    }

    if (departure.id === arrival.id) {
      alert(alertSameInputs);
      return;
    }

    const data = await fetchData<IHatData[]>([
      `https://openapi.izmir.bel.tr/api/izdeniz/vapursaatleri/${departure.id}/${arrival.id}/${day.id}/0`,
    ]);
    setData(data);
  };
  return (
    <PageTemplate title={title}>
      <div className="min-h-[60vh] space-y-4">
        <DropdownWithSearch
          items={ports}
          placeholder={departurePlaceholder}
          selected={departure}
          setSelected={setDeparture}
        />
        <DropdownWithSearch
          items={ports}
          placeholder={arrivalPlaceholder}
          selected={arrival}
          setSelected={setArrival}
        />
        <DropdownWithSearch
          items={days}
          placeholder={dayPlaceholder}
          selected={day}
          setSelected={setDay}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white w-full rounded-lg p-3 text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
          onClick={fetchItems}
        >
          {searchText}
        </button>

        {<RenderFerryTable data={data} />}
      </div>
    </PageTemplate>
  );
}

export default VapurSaatleriComponent;
