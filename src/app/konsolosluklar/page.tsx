import React from "react";
import DropdownAndTableClientComponent from "@/components/DropdownAndTableClientComponent/DropdownAndTableClientComponent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import {
  commonHeadItemsWithLocation,
  commonKeysWithLocation,
  createMetadata,
  fetchData,
  IzmirTowns,
} from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Konsolosluklar - İzmir Burada",
    "İzmir'deki konsoloslukları kolayca bulun. İzmir Burada ile şehirdeki tüm konsoloslukların konumları, iletişim bilgileri ve hizmetleri hakkında detaylı bilgi edinin.",
    "İzmir konsoloslukları, İzmir dış temsilcilikler, İzmir konsolosluk hizmetleri, İzmir Burada konsolosluklar, konsolosluk adresleri İzmir, konsolosluk iletişim İzmir, İzmir yabancı misyonlar",
    "/assets/boxImages/konsolosluklar.png",
    "/konsolosluklar"
  );
}

async function page() {
  const data = await fetchData([
    "https://openapi.izmir.bel.tr/api/ibb/cbs/muzeler",
  ]);
  return (
    <PageTemplate title="Konsolosluk Konumları">
      <DropdownAndTableClientComponent
        data={data[0].onemliyer}
        itemsForDropdownWithSearch={IzmirTowns}
        itemToFilter={"ILCE"}
        placeholder={"İlçe ara"}
        headItems={commonHeadItemsWithLocation}
        keys={commonKeysWithLocation}
      />
    </PageTemplate>
  );
}

export default page;
