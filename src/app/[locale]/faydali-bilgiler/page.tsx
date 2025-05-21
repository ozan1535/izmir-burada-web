import SwiperSlideCategories from "@/components/SwiperSlideCategories/SwiperSlideCategories";
import {
  createMetadata,
  locations,
  transportation,
  usefulInformations,
} from "@/utils/helpers";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("UsefulInformation.title"),
    t("UsefulInformation.description"),
    t("UsefulInformation.tags"),
    "/assets/izmirMainPictures/kemeralti.webp",
    "/faydali-bilgiler"
  );
}

async function Page() {
  const t = await getTranslations("UsefulInformation");

  return (
    <div className="px-5 md:px-10">
      <p className="mt-24 text-xl font-bold text-sky-800 uppercase">
        {t("trends")}
      </p>
      <SwiperSlideCategories items={usefulInformations} canAutoPlay={true} />
      <div className="mt-5 flex justify-between items-center">
        <p className="text-xl font-bold text-sky-800 uppercase">
          {t("transportation")}
        </p>
        {/* <Link href={"/"} className="text-red-400">
          Hepsini Gör
        </Link> */}
      </div>
      <SwiperSlideCategories items={transportation} />
      <div className="mt-5 flex justify-between items-center">
        <p className="text-xl font-bold text-sky-800 uppercase">
          {t("locations")}
        </p>
        {/* <Link href={"/"} className="text-red-400">
          Hepsini Gör
        </Link> */}
      </div>
      <SwiperSlideCategories items={locations} />
    </div>
  );
}

export default Page;
