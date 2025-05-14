import React from "react";
import {
  commonHeadItemsWithLocation,
  commonKeysWithLocation,
  createMetadata,
  fetchData,
  flatMapData,
  IzmirTowns,
} from "@/utils/helpers";
import { getToiletsMapping } from "./helpers";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import DropdownAndTableClientComponent from "@/components/DropdownAndTableClientComponent/DropdownAndTableClientComponent";

export async function generateMetadata() {
  return createMetadata(
    "Tuvalet Konumları - İzmir Burada",
    "İzmir’deki tuvalet konumlarına kolay erişim sağlayın. İzmir Burada uygulamasıyla şehirdeki tüm tuvalet noktalarını keşfedin.",
    "İzmir tuvalet konumları, İzmir tuvaletleri, İzmir ücretsiz tuvalet, İzmir Burada tuvalet, şehirde tuvalet, tuvalet noktaları İzmir",
    "/assets/boxImages/tuvaletler.png",
    "/tuvalet-konumlari"
  );
}

async function page() {
  const urls = [
    "https://acikveri.bizizmir.com/api/3/action/datastore_search?resource_id=d87de3c1-9bc0-4a8c-842a-90cd2a30d03a",
    "https://acikveri.bizizmir.com/api/3/action/datastore_search?resource_id=8f6e905d-3f76-45e5-b52a-b89be7d4631b",
  ];

  const toilets = await fetchData(urls);

  const configuredToilets = flatMapData(
    toilets,
    "result.records",
    getToiletsMapping
  );

  return (
    <PageTemplate title="Tuvalet Konumları">
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
