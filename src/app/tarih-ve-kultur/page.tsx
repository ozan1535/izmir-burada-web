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
import React from "react";

import OpenModal from "@/components/Modal/OpenModal/OpenModal";
import { IOnemliYer } from "@/utils/types";

export async function generateMetadata() {
  return createMetadata(
    "Tarih ve Kültür - İzmir Burada",
    "İzmir'in zengin tarihini ve kültürünü keşfedin. İzmir Burada ile şehri adım adım gezerek tarihi mekanlar, kültürel miraslar ve önemli eserler hakkında derinlemesine bilgi edinin.",
    "İzmir tarihi, İzmir kültürü, İzmir tarihi yerler, İzmir kültürel miras, İzmir Burada tarih, İzmir kültür, şehirde tarih, kültürel geziler İzmir",
    "/assets/boxImages/tarih-ve-kultur.png",
    "/tarih-ve-kultur"
  );
}

async function page() {
  const data = await fetchData<IOnemliYer>([
    "https://openapi.izmir.bel.tr/api/ibb/cbs/antikkentler",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/kuleanitveheykeller",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/tarihiyapilar",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/tarihicarsivehanlar",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/antikkentyapilari",
    "https://openapi.izmir.bel.tr/api/ibb/cbs/meydanlar",
  ]);

  const configuredData = flatMapData(
    data,
    "onemliyer",
    getCommonMappingWithLocationAndDetail
  );

  return (
    <PageTemplate title="Tarih ve Kültür">
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
