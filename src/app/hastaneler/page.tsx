import React from "react";
import DropdownAndTableClientComponent from "@/components/DropdownAndTableClientComponent/DropdownAndTableClientComponent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import {
  commonHeadItemsWithLocation,
  commonKeysWithLocation,
  createMetadata,
  fetchData,
  IzmirTowns,
} from "@/utils/helpers";
import { ICommonType } from "@/utils/types";

export async function generateMetadata() {
  return createMetadata(
    "Hastaneler - İzmir Burada",
    "İzmir'deki hastaneler hakkında detaylı bilgiye ulaşın. İzmir Burada, şehirdeki hastaneler, sağlık hizmetleri ve acil durumlar hakkında bilgilendirme sağlar.",
    "İzmir hastaneler, İzmir sağlık hizmetleri, İzmir acil servis, İzmir hastane rehberi, İzmir Burada hastaneler, İzmir özel hastaneler, İzmir devlet hastaneleri, İzmir hastane adresleri",
    "/assets/boxImages/hastaneler.png",
    "/hastaneler"
  );
}

async function page() {
  const data = await fetchData<ICommonType>([
    "https://openapi.izmir.bel.tr/api/ibb/cbs/hastaneler",
  ]);

  return (
    <PageTemplate title="Hastane Konumları">
      <DropdownAndTableClientComponent
        data={data[0].onemliyer}
        itemsForDropdownWithSearch={IzmirTowns}
        itemToFilter={"ILCE"}
        placeholder={"İlçe ara"}
        headItems={commonHeadItemsWithLocation}
        keys={commonKeysWithLocation}
      />
    </PageTemplate>
  );
}

export default page;
