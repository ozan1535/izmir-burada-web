import React from "react";
import {
  createMetadata,
  getFormattedDate,
  izmirDistincts,
} from "@/utils/helpers";
import {
  nobetciEczanelerKeys,
  nobetciEczanelerTableHeaderItems,
} from "./helpers";
import DropdownAndTableClientComponent from "@/components/DropdownAndTableClientComponent/DropdownAndTableClientComponent";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

export async function generateMetadata() {
  return createMetadata(
    "Nöbetçi Eczaneler - İzmir Burada",
    "İzmir'deki güncel nöbetçi eczane listesine ulaşın. İzmir Burada ile geceleri ve tatil günlerinde açık olan eczaneleri kolayca bulun.",
    "İzmir nöbetçi eczaneler, İzmir eczane listesi, İzmir gece açık eczane, İzmir tatil eczaneleri, İzmir acil eczaneler, nöbetçi eczane İzmir, İzmir sağlık hizmetleri, İzmir Burada eczaneler",
    "/assets/boxImages/nobetcieczane.png",
    "/izmir-nobetci-eczaneler"
  );
}

async function page() {
  const response = await fetch(
    "https://openapi.izmir.bel.tr/api/ibb/nobetcieczaneler"
  );

  const data = await response.json();

  return (
    <PageTemplate title={"İzmir Nöbetçi Eczaneler"}>
      <p className="text-center py-4 text-xl font-semibold text-sky-800">
        {getFormattedDate("tr")}
      </p>
      <DropdownAndTableClientComponent
        data={data}
        itemsForDropdownWithSearch={izmirDistincts}
        itemToFilter={"Bolge"}
        placeholder={"İlçe ara"}
        headItems={nobetciEczanelerTableHeaderItems}
        keys={nobetciEczanelerKeys}
      />
    </PageTemplate>
  );
}

export default page;
