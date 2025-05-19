import React from "react";

function BusScheduleColumn({ busTime }: { busTime: string }) {
  return (
    <div>
      <div className="text-center px-4 py-3">{busTime || "-"}</div>
    </div>
  );
}

export default BusScheduleColumn;
