import React from "react";
import { getPortNameById } from "@/app/[locale]/izmir-vapur-saatleri/helpers";
import { IHatData } from "../VapurSaatleriComponent/vapurSaatleriComponent.types";

function RenderFerryTable({ data }: { data: IHatData[][] }) {
  if (!data.length) return null;

  const route = data[0][0];
  const departureName = getPortNameById(route.iskeleler[0]);
  const arrivalName = getPortNameById(route.iskeleler[1]);
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="py-4 text-xl font-semibold">
        {departureName} - {arrivalName} Vapur Saatleri
      </p>

      <div className="h-96 overflow-y-scroll w-1/3 bg-white shadow-lg rounded-lg p-4 my-4 border-l-4 border-blue-500">
        <h2 className="text-xl text-center font-semibold text-blue-600">
          Sefer Saatleri
        </h2>

        {route.seferSatirlari?.length ? (
          <table className="min-w-full table-auto mt-4">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Kalkış Saati</th>
                <th className="py-2 px-4 text-left">Varış Saati</th>
              </tr>
            </thead>
            <tbody>
              {route.seferSatirlari.map((sefer, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
                >
                  <td className="py-2 px-4">
                    {sefer.seferSaatleri?.[0]?.KalkisSaati ?? "Veri yok"}
                  </td>
                  <td className="py-2 px-4">
                    {sefer.seferSaatleri?.[1]?.VarisSaati ?? "Veri yok"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center mt-4">Herhangi bir veri bulunamadı</div>
        )}
      </div>
    </div>
  );
}

export default RenderFerryTable;
