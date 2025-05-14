import Table from "@/components/Table/Table";
import React from "react";
import { sonDepremlerKeys, sonDepremlerTableHeaderItems } from "./helpers";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { createMetadata } from "@/utils/helpers";

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
  const response = await fetch(
    "https://www.mertsenturk.net/deprem/api/location/izmir/limit/30"
  );

  const data = await response.json();
  return (
    <PageTemplate title={"İzmir Son Depremler"}>
      <br />
      <Table
        headItems={sonDepremlerTableHeaderItems}
        data={data}
        keys={sonDepremlerKeys}
      />
    </PageTemplate>
  );
}

export default page;
