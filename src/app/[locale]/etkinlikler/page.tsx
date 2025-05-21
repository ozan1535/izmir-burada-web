import Image from "next/image";
import Link from "next/link";
import React from "react";
import { createMetadata, fetchData } from "@/utils/helpers";
import { IEtkinlik } from "./etkinlikler.types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("Etkinlikler.title"),
    t("Etkinlikler.description"),
    t("Etkinlikler.tags"),
    "/assets/boxImages/etkinlikler.png",
    "/etkinlikler"
  );
}

async function etkinlikler() {
  const t = await getTranslations("Etkinlikler");

  const events = await fetchData<IEtkinlik[]>([
    "https://openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler",
  ]);

  const sortedEvents = events[0].sort(
    (a, b) =>
      new Date(b.EtkinlikBaslamaTarihi).getTime() -
      new Date(a.EtkinlikBaslamaTarihi).getTime()
  );

  return (
    <div className="mt-20 px-4 sm:px-8 md:px-16 lg:px-52">
      <h1 className="text-center font-bold text-3xl text-gray-800">
        {t("title")}
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
                  {t("details")}
                </Link>
                {event.BiletSatisLinki ? (
                  <Link
                    href={event.BiletSatisLinki}
                    target="_blank"
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
                  >
                    {t("buyTicket")}
                  </Link>
                ) : event.UcretsizMi ? (
                  <span className="text-green-600 text-sm font-semibold">
                    {t("free")}
                  </span>
                ) : (
                  <span className="text-gray-500 text-sm">
                    {t("noTicketInfo")}
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
