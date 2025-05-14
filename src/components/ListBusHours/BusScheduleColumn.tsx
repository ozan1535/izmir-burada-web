import React from "react";

function BusScheduleColumn({ busTime }) {
  return (
    <div>
      <div className="text-center px-4 py-3">{busTime || "-"}</div>
    </div>
  );
}

export default BusScheduleColumn;

/* 

      <div className="bg-gray-100 text-gray-800 font-semibold text-center px-4 py-2 rounded-t-lg">
        <h1 className="text-lg">Fewfewfew</h1>
        <h2 className="text-sm">Kalkış</h2>
      </div>

*/
