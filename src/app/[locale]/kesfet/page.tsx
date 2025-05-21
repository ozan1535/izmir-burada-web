import React from "react";
import CategoryBoxes from "@/components/CategoryBoxes/CategoryBoxes";
import { categories, createMetadata } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("Discover.title"),
    t("Discover.description"),
    t("Discover.tags"),
    "/assets/izmirMainPictures/efes.webp",
    "/kesfet"
  );
}

async function page() {
  const t = await getTranslations("Discover");

  return (
    <div className="px-5 md:px-10">
      <p className="mt-24 mb-4 text-xl font-bold text-sky-800 uppercase text-center">
        {t("title")}
      </p>
      <CategoryBoxes items={categories} />
    </div>
  );
}

export default page;
