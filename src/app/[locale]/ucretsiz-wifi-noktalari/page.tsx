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
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("wifiNoktalari.title"),
    t("wifiNoktalari.description"),
    t("wifiNoktalari.tags"),
    "/assets/boxImages/wifi.png",
    "/ucretsiz-wifi-noktalari"
  );
}

async function page() {
  const t = await getTranslations("wifiNoktalari");

  const data = await fetchData<ICommonType>([
    "https://openapi.izmir.bel.tr/api/ibb/cbs/wizmirnetnoktalari",
  ]);

  return (
    <PageTemplate title={t("title")}>
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
