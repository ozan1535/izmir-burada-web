import React from "react";
import SwiperTable from "@/components/ListBusHours/SwiperTable/SwiperTable";
import { createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Otobüs Saatleri - İzmir Burada",
    "İzmir'deki otobüs saatlerini kolayca öğrenin. İzmir Burada ile ESHOT hatlarına ait sefer saatlerine ve güzergah bilgilerine hızlıca ulaşabilirsiniz.",
    "İzmir otobüs saatleri, İzmir ESHOT saatleri, İzmir otobüs güzergahları, İzmir toplu taşıma, İzmir otobüs durakları, İzmir ulaşım, ESHOT saatleri, İzmir Burada otobüs bilgileri",
    "/assets/boxImages/otobussaatleri.png",
    "/izmir-otobus-saatleri"
  );
}

function page() {
  return (
    <div className="min-h-[70vh]">
      <SwiperTable />
    </div>
  );
}

export default page;
