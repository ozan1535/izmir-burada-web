import React from "react";
import BusScheduleColumn from "./BusScheduleColumn";

function ListBusHours({ singleBusData, busInformation }) {
  return (
    <div className="bg-gray-50">
      <h1 className="text-center py-4 text-lg font-semibold text-gray-800">
        <p> {singleBusData.date} </p>
        <p>{singleBusData.day}</p>
      </h1>

      <div className="overflow-x-auto p-4">
        <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
          <tbody>
            <tr className="text-center font-bold">
              <td>
                <h1>{busInformation[0].HAT_BASLANGIC}</h1>
                <h1>KALKIŞ</h1>
              </td>
              <td>
                <h1>{busInformation[0].HAT_BITIS}</h1>
                <h1>KALKIŞ</h1>
              </td>
            </tr>
            {singleBusData.busHours.map((busHour, index) => (
              <tr key={index}>
                <td
                  className={`px-4 py-2 border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  <BusScheduleColumn busTime={busHour.GIDIS_SAATI} />
                </td>
                <td
                  className={`px-4 py-2 border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  <BusScheduleColumn busTime={busHour.DONUS_SAATI} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListBusHours;
