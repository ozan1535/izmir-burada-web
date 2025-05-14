import React from "react";
import {
  commonHeadItemsWithLocation,
  commonKeysWithLocation,
  createMetadata,
  fetchData,
  flatMapData,
  IzmirTowns,
} from "@/utils/helpers";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import DropdownAndTableClientComponent from "@/components/DropdownAndTableClientComponent/DropdownAndTableClientComponent";
import { getDenizlerMapping } from "./helpers";

export async function generateMetadata() {
  return createMetadata(
    "Denizler - İzmir Burada",
    "İzmir'in denizleri, sahilleri ve denizle ilgili aktiviteleri hakkında bilgi. İzmir Burada, deniz turizmi, plajlar, su sporları ve sahil aktiviteleri hakkında bilgilendirme sağlar.",
    "İzmir denizler, İzmir plajlar, İzmir deniz turizmi, İzmir su sporları, İzmir sahil aktiviteleri, İzmir deniz keşfi, İzmir deniz aktiviteleri, İzmir tatil yerleri, İzmir deniz manzarası",
    "/assets/boxImages/denizler.png",
    "/denizler"
  );
}

async function page() {
  const urls = [
    "https://openapi.izmir.bel.tr/api/ibb/cbs/plajlar",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/mavibayrakplajlar",
  ];

  const data = await fetchData(urls);

  const configuredToilets = flatMapData(data, "onemliyer", getDenizlerMapping);

  return (
    <PageTemplate title="Deniz Konumları">
      <DropdownAndTableClientComponent
        data={configuredToilets}
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
