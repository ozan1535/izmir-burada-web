import Image from "next/image";
import Link from "next/link";
import React from "react";
import { createMetadata, fetchData } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Etkinlikler - İzmir Burada",
    "İzmir'deki etkinlikler hakkında güncel bilgiler. İzmir Burada, konserler, festivaller, sergiler ve diğer kültürel etkinlikler hakkında bilgilendirme sağlar.",
    "İzmir etkinlikler, İzmir konserleri, İzmir festivaller, İzmir sergiler, İzmir kültürel etkinlikler, İzmir Burada etkinlikler, İzmir sosyal etkinlikler, İzmir gezilecek yerler, İzmir kültür",
    "/assets/boxImages/etkinlikler.png",
    "/etkinlikler"
  );
}

async function etkinlikler() {
  const events = await fetchData([
    "https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler",
  ]);

  const sortedEvents = events[0].sort(
    (a, b) =>
      new Date(b.EtkinlikBaslamaTarihi) - new Date(a.EtkinlikBaslamaTarihi)
  );

  return (
    <div className="mt-20 px-4 sm:px-8 md:px-16 lg:px-52">
      <h1 className="text-center font-bold text-3xl text-gray-800">
        İzmir Etkinlikler
      </h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEvents.map((event, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-auto relative">
              <Image
                src={event.KucukAfis}
                alt={event.Adi}
                width={400} // You can adjust these values if needed
                height={250}
                className="w-full h-full object-contain"
                layout="intrinsic" // Use intrinsic layout to maintain aspect ratio
              />
            </div>
            <div className="p-2 flex flex-col gap-2">
              <span className="text-sm text-gray-500 uppercase">
                {event.Tur}
              </span>
              <h2 className="text-lg font-semibold text-gray-800">
                {event.Adi}
              </h2>
              <p className="text-sm text-gray-600">{event.EtkinlikMerkezi}</p>
              <p className="text-sm font-semibold text-gray-400">
                {new Date(event.EtkinlikBaslamaTarihi).toLocaleString("tr-TR", {
                  dateStyle: "long",
                  timeStyle: "short",
                })}
              </p>

              <div className="mt-2 flex justify-between items-center">
                <Link
                  href={`https://kultursanat.izmir.bel.tr/Etkinlikler/${event.EtkinlikUrl}`}
                  className="text-blue-600 text-sm font-medium hover:underline"
                  target="_blank"
                >
                  Detaylar
                </Link>
                {event.BiletSatisLinki ? (
                  <Link
                    href={event.BiletSatisLinki}
                    target="_blank"
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Bilet Al
                  </Link>
                ) : event.UcretsizMi ? (
                  <span className="text-green-600 text-sm font-semibold">
                    Ücretsiz
                  </span>
                ) : (
                  <span className="text-gray-500 text-sm">
                    Bilet bilgisi yok
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default etkinlikler;
