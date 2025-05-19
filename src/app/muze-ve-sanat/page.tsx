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
import { IOnemliYer } from "@/utils/types";

export async function generateMetadata() {
  return createMetadata(
    "Müze ve Sanat - İzmir Burada",
    "İzmir'deki müzeleri ve sanat galerilerini keşfedin. İzmir Burada ile şehrin kültürel zenginliğini ve sanatsal mirasını daha yakından keşfedin.",
    "İzmir müzeleri, İzmir sanat galerileri, İzmir sanat, İzmir kültürel miras, İzmir Burada müze ve sanat, İzmir sanat eserleri, İzmir sanatı, müze gezisi İzmir",
    "/assets/boxImages/muze-ve-sanat.png",
    "/muze-ve-sanat"
  );
}

async function page() {
  const data = await fetchData<IOnemliYer>([
    "https://openapi.izmir.bel.tr/api/ibb/cbs/muzeler",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/kulturmerkezleri",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/galerivesalonlar",
  ]);

  const configuredData = flatMapData(
    data,
    "onemliyer",
    getCommonMappingWithLocationAndDetail
  );

  return (
    <PageTemplate title="Müze ve Sanat">
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
