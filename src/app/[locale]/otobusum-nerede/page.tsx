import OtobusumNeredeComponent from "@/components/OtobusumNeredeComponent/OtobusumNeredeComponent";
import { createMetadata } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("OtobusumNerede.title"),
    t("OtobusumNerede.description"),
    t("OtobusumNerede.tags"),
    "/assets/boxImages/yaklasanotobus.png",
    "/otobusum-nerede"
  );
}

async function page() {
  const t = await getTranslations("OtobusumNerede");

  return (
    <OtobusumNeredeComponent
      title={t("title")}
      placeholder={t("placeholder")}
    />
  );
}

export default page;
