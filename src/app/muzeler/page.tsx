import DropdownAndTableClientComponent from "@/components/DropdownAndTableClientComponent/DropdownAndTableClientComponent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import {
  commonHeadItemsWithDetailAndLocation,
  commonKeysWithCustomComponentAndLinkBuilder,
  createMetadata,
  fetchData,
  IzmirTowns,
} from "@/utils/helpers";
import React from "react";
import OpenModal from "@/components/Modal/OpenModal/OpenModal";
export async function generateMetadata() {
  return createMetadata(
    "Müzeler - İzmir Burada",
    "İzmir'deki müzeleri keşfedin. İzmir Burada uygulaması ile şehrin zengin kültürel mirasını ve sanatsal eserlerini keşfetmek için müzeler hakkında detaylı bilgi edinin.",
    "İzmir müzeleri, İzmir sanat galerileri, İzmir kültürel miras, İzmir Burada müzeler, İzmir tarihî müzeler, İzmir sanat müzeleri, müzeler İzmir, İzmir gezilecek yerler",
    "/assets/boxImages/muzeler.png",
    "/muzeler"
  );
}

async function page() {
  const data = await fetchData([
    "https://openapi.izmir.bel.tr/api/ibb/cbs/muzeler",
  ]);
  return (
    <PageTemplate title="Müze Konumları">
      <DropdownAndTableClientComponent
        data={data[0].onemliyer}
        itemsForDropdownWithSearch={IzmirTowns}
        itemToFilter={"ILCE"}
        placeholder={"İlçe ara"}
        headItems={commonHeadItemsWithDetailAndLocation}
        keys={commonKeysWithCustomComponentAndLinkBuilder}
        customComponent={OpenModal}
      />
    </PageTemplate>
  );
}

export default page;
