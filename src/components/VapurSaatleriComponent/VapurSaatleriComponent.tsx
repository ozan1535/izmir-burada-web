"use client";
import React, { useState } from "react";
import DropdownWithSearch from "@/components/DropdownWithSearch/DropdownWithSearch";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { days, fetchData, ports } from "@/utils/helpers";
import RenderFerryTable from "@/components/RenderFerryTable/RenderFerryTable";

function VapurSaatleriComponent() {
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [day, setDay] = useState(null);
  const [data, setData] = useState([]);

  const fetchItems = async () => {
    if (!departure || !arrival || !day) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    if (departure.id === arrival.id) {
      alert("Kalkış ve varış iskeleleri aynı olamaz.");
      return;
    }

    const data = await fetchData([
      `https://openapi.izmir.bel.tr/api/izdeniz/vapursaatleri/${departure.id}/${arrival.id}/${day.id}/0`,
    ]);
    setData(data);
  };
  return (
    <PageTemplate title="İzmir Vapur Saatleri">
      <div className="min-h-[60vh] space-y-4">
        <DropdownWithSearch
          items={ports}
          placeholder="Kalkış"
          selected={departure}
          setSelected={setDeparture}
        />
        <DropdownWithSearch
          items={ports}
          placeholder="Varış"
          selected={arrival}
          setSelected={setArrival}
        />
        <DropdownWithSearch
          items={days}
          placeholder="Gün"
          selected={day}
          setSelected={setDay}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white w-full rounded-lg p-3 text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
          onClick={fetchItems}
        >
          Ara
        </button>

        {<RenderFerryTable data={data} />}
      </div>
    </PageTemplate>
  );
}

export default VapurSaatleriComponent;
