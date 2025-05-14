import React from "react";
import DropdownAndTableClientComponent from "@/components/DropdownAndTableClientComponent/DropdownAndTableClientComponent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import {
  commonHeadItemsWithDetailAndLocation,
  commonKeysWithCustomComponentAndLinkBuilder,
  createMetadata,
  fetchData,
  flatMapData,
  getCommonMappingWithLocationAndDetail,
  IzmirTowns,
} from "@/utils/helpers";
import OpenModal from "@/components/Modal/OpenModal/OpenModal";

export async function generateMetadata() {
  return createMetadata(
    "Doğa ve Agro - İzmir Burada",
    "İzmir'deki doğa ve tarım ile ilgili bilgiler. İzmir Burada, doğal alanlar, tarım projeleri, organik tarım ve çevre dostu faaliyetler hakkında bilgilendirme sağlar.",
    "İzmir doğa, İzmir tarım, İzmir organik tarım, İzmir agro, İzmir çevre dostu projeler, İzmir doğal alanlar, İzmir agro sanayi, İzmir tarım projeleri, İzmir çevre, İzmir doğa keşfi",
    "/assets/boxImages/doga-ve-agro.png",
    "/doga-ve-agro"
  );
}

async function page() {
  const data = await fetchData([
    "https://openapi.izmir.bel.tr/api/ibb/cbs/tarihisuyapilari",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/kaplicalar",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/hamamlar",
  ]);

  const configuredData = flatMapData(
    data,
    "onemliyer",
    getCommonMappingWithLocationAndDetail
  );

  return (
    <PageTemplate title="Doga ve Agro">
      <DropdownAndTableClientComponent
        data={configuredData}
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
