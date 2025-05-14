import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { createMetadata } from "@/utils/helpers";
import React from "react";

export async function generateMetadata() {
  return createMetadata(
    "İzmir Su Kesintileri - İzmir Burada",
    "İzmir'deki su kesintileri hakkında güncel bilgilere ulaşın. İzmir Burada ile su kesintileri, planlı kesintiler ve su hizmetleri hakkında detaylı bilgiye erişin.",
    "İzmir su kesintileri, İzmir su kesintisi durumu, İzmir su kesintisi bilgisi, İzmir Burada su kesintileri, İzmir su hizmetleri, İzmir su kesintisi planı, İzmir altyapı, İzmir su yönetimi",
    "/assets/boxImages/su-kesintileri.png",
    "/izmir-su-kesintileri"
  );
}

async function page() {
  const response = await fetch(
    "https://openapi.izmir.bel.tr/api/izsu/arizakaynaklisukesintileri"
  );

  const data = await response.json();

  return (
    <PageTemplate title={"İzmir Su Kesintileri"}>
      <br />
      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-xl p-6 bg-sky-50 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 space-y-2 md:space-y-0">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.IlceAdi} • {item.Mahalleler}
              </h3>
              <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium w-fit">
                {item.Tip}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-4">{item.Aciklama}</p>

            <div className="flex flex-col gap-2 text-sm text-gray-800">
              <div className="flex flex-wrap">
                <span className="font-semibold text-gray-900 mr-1">Durum:</span>
                <span
                  className={`${
                    item.ArizaDurumu === "Devam Ediyor"
                      ? "text-orange-600"
                      : "text-green-600"
                  } font-medium`}
                >
                  {item.ArizaDurumu}
                </span>
              </div>
              <div className="flex flex-wrap">
                <span className="font-semibold text-gray-900 mr-1">Süre:</span>
                <span>{item.KesintiSuresi}</span>
              </div>
              <div className="flex flex-wrap">
                <span className="font-semibold text-gray-900 mr-1">
                  Başlangıç:
                </span>
                <span>
                  {new Date(item.KesintiTarihi).toLocaleString("tr-TR")}
                </span>
              </div>
              <div className="flex flex-wrap">
                <span className="font-semibold text-gray-900 mr-1">Bitiş:</span>
                <span>
                  {new Date(item.ArizaGiderilmeTarihi).toLocaleString("tr-TR")}
                </span>
              </div>
              <div className="flex flex-wrap sm:col-span-2">
                <span className="font-semibold text-gray-900 mr-1">Birim:</span>
                <span>{item.Birim}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}

export default page;
