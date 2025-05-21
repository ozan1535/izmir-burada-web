import React from "react";
import SwiperTable from "@/components/ListBusHours/SwiperTable/SwiperTable";
import { createMetadata } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("OtobusSaatleri.title"),
    t("OtobusSaatleri.description"),
    t("OtobusSaatleri.tags"),
    "/assets/boxImages/otobussaatleri.png",
    "/izmir-otobus-saatleri"
  );
}

async function page() {
  const t = await getTranslations("OtobusSaatleri");

  return (
    <div className="min-h-[70vh]">
      <SwiperTable
        title={t("title")}
        information={t("information")}
        placeholder={t("placeholder")}
      />
    </div>
  );
}

export default page;
