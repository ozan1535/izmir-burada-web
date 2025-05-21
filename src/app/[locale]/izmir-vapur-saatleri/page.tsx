import VapurSaatleriComponent from "@/components/VapurSaatleriComponent/VapurSaatleriComponent";
import { createMetadata } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("HomePage.title"),
    t("HomePage.description"),
    t("HomePage.tags"),
    "/assets/boxImages/vapursaatleri.png",
    "/izmir-vapur-saatleri"
  );
}

const VapurSaatleriPage = async () => {
  const t = await getTranslations("VapurSaatleri");

  return (
    <VapurSaatleriComponent
      title={t("title")}
      alertEmpty={t("alertEmpty")}
      alertSameInputs={t("alertSameInputs")}
      departurePlaceholder={t("departure")}
      arrivalPlaceholder={t("arrival")}
      dayPlaceholder={t("day")}
      searchText={t("search")}
    />
  );
};

export default VapurSaatleriPage;
