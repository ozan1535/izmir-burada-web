import React from "react";
import DropdownAndTableClientComponent from "@/components/DropdownAndTableClientComponent/DropdownAndTableClientComponent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import {
  commonHeadItemsWithDetailAndLocation,
  commonKeysWithCustomComponentAndLinkBuilder,
  createMetadata,
  fetchData,
  flatMapData,
  getCommonMappingWithLocationAndDetail,
  IzmirTowns,
} from "@/utils/helpers";
import OpenModal from "@/components/Modal/OpenModal/OpenModal";

export async function generateMetadata() {
  return createMetadata(
    "Alışveriş - İzmir Burada",
    "İzmir'deki alışveriş noktaları, alışveriş merkezleri, pazarlar ve yerel dükkanlar hakkında bilgiler. İzmir Burada, alışveriş yaparken keşfedeceğiniz en iyi mekanları tanıtır.",
    "İzmir alışveriş, İzmir alışveriş merkezleri, İzmir pazarlar, İzmir alışveriş rehberi, İzmir Burada alışveriş, İzmir hediyelikler, İzmir yerel dükkanlar, İzmir moda, İzmir alışveriş noktaları",
    "/assets/boxImages/alisveris.png",
    "/alisveris"
  );
}

async function page() {
  const data = await fetchData([
    "https://openapi.izmir.bel.tr/api/ibb/cbs/pazaryerleri",
  ]);

  const configuredData = flatMapData(
    data,
    "onemliyer",
    getCommonMappingWithLocationAndDetail
  );

  return (
    <PageTemplate title="Alisveris">
      <DropdownAndTableClientComponent
        data={configuredData}
        itemsForDropdownWithSearch={IzmirTowns}
        itemToFilter={"ILCE"}
        placeholder={"İlçe ara"}
        headItems={commonHeadItemsWithDetailAndLocation}
        keys={commonKeysWithCustomComponentAndLinkBuilder}
        customComponent={OpenModal}
      />
    </PageTemplate>
  );
}

export default page;
