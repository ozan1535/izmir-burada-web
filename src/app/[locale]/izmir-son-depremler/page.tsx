import React from "react";
import Table from "@/components/Table/Table";
import { sonDepremlerKeys, sonDepremlerTableHeaderItems } from "./helpers";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { createMetadata, fetchData } from "@/utils/helpers";
import { ISonDeprem } from "./sonDepremler.types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("SonDepremler.title"),
    t("SonDepremler.description"),
    t("SonDepremler.tags"),
    "/assets/boxImages/son-depremler.png",
    "/izmir-son-depremler"
  );
}

async function page() {
  const t = await getTranslations("SonDepremler");

  const data = await fetchData<ISonDeprem[]>([
    "https://www.mertsenturk.net/deprem/api/location/izmir/limit/30",
  ]);
  return (
    <PageTemplate title={t("title")}>
      <br />
      <Table
        headItems={sonDepremlerTableHeaderItems}
        data={data[0]}
        keys={sonDepremlerKeys}
      />
    </PageTemplate>
  );
}

export default page;
