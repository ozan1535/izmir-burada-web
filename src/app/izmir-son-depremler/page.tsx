import React from "react";
import Table from "@/components/Table/Table";
import { sonDepremlerKeys, sonDepremlerTableHeaderItems } from "./helpers";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { createMetadata, fetchData } from "@/utils/helpers";
import { ISonDeprem } from "./sonDepremler.types";

export async function generateMetadata() {
  return createMetadata(
    "İzmir Son Depremler - İzmir Burada",
    "İzmir'deki son depremler hakkında anlık bilgilere ulaşın. İzmir Burada ile şehrin deprem geçmişi, son depremler ve afet durumunu takip edin.",
    "İzmir son depremler, İzmir deprem durumu, İzmir deprem bilgisi, İzmir Burada son depremler, İzmir deprem verileri, İzmir afet durumu, İzmir deprem raporu, İzmir sismik faaliyet",
    "/assets/boxImages/son-depremler.png",
    "/izmir-son-depremler"
  );
}

async function page() {
  const data = await fetchData<ISonDeprem[]>([
    "https://www.mertsenturk.net/deprem/api/location/izmir/limit/30",
  ]);
  return (
    <PageTemplate title={"İzmir Son Depremler"}>
      <br />
      <Table
        headItems={sonDepremlerTableHeaderItems}
        data={data[0]}
        keys={sonDepremlerKeys}
      />
    </PageTemplate>
  );
}

export default page;
