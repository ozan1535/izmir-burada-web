import React from "react";
import {
  createMetadata,
  fetchData,
  getFormattedDate,
  izmirDistincts,
} from "@/utils/helpers";
import {
  nobetciEczanelerKeys,
  nobetciEczanelerTableHeaderItems,
} from "./helpers";
import DropdownAndTableClientComponent from "@/components/DropdownAndTableClientComponent/DropdownAndTableClientComponent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { INobetciEczane } from "./nobetciEczaneler.types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("NobetciEczaneler.title"),
    t("NobetciEczaneler.description"),
    t("NobetciEczaneler.tags"),
    "/assets/boxImages/nobetcieczane.png",
    "/izmir-nobetci-eczaneler"
  );
}

async function page() {
  const t = await getTranslations("NobetciEczaneler");

  const data = await fetchData<INobetciEczane[]>([
    "https://openapi.izmir.bel.tr/api/ibb/nobetcieczaneler",
  ]);

  return (
    <PageTemplate title={t("title")}>
      <DropdownAndTableClientComponent
        data={data[0]}
        itemsForDropdownWithSearch={izmirDistincts}
        itemToFilter={"Bolge"}
        placeholder={"İlçe ara"}
        headItems={nobetciEczanelerTableHeaderItems}
        keys={nobetciEczanelerKeys}
      />
    </PageTemplate>
  );
}

export default page;
