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
import { ICommonType } from "@/utils/types";

export async function generateMetadata() {
  return createMetadata(
    "Ücretsiz Wifi Noktaları - İzmir Burada",
    "İzmir’deki ücretsiz wifi noktalarına kolay erişim sağlayın. İzmir Burada uygulamasıyla şehirdeki tüm ücretsiz internet bağlantı noktalarını keşfedin.",
    "Ücretsiz wifi, İzmir wifi noktaları, İzmir ücretsiz internet, wifi erişimi, İzmir Burada wifi, İzmir ücretsiz wifi, şehirde wifi, wifi noktaları İzmir",
    "/assets/boxImages/wifi.png",
    "/ucretsiz-wifi-noktalari"
  );
}

async function page() {
  const data = await fetchData<ICommonType>([
    "https://openapi.izmir.bel.tr/api/ibb/cbs/wizmirnetnoktalari",
  ]);

  return (
    <PageTemplate title="Ücretsiz Wi-Fi Noktalari">
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
