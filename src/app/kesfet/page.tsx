import React from "react";
import CategoryBoxes from "@/components/CategoryBoxes/CategoryBoxes";
import { categories_TR, createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Keşfet - İzmir Burada",
    "İzmir'in güzelliklerini keşfedin! İzmir Burada ile plajlardan tarihi ve kültürel mekanlara, doğa harikalarından etkinliklere kadar şehri adım adım keşfedin.",
    "İzmir keşfet, İzmir plajları, İzmir tarihi, İzmir kültür, İzmir doğa, İzmir etkinlikleri, İzmir gezilecek yerler, İzmir tatil, İzmir gezisi, İzmir Burada keşfet",
    "/assets/izmirMainPictures/efes.webp",
    "/kesfet"
  );
}

function page() {
  return (
    <div className="px-5 md:px-10">
      <p className="mt-24 mb-4 text-xl font-bold text-sky-800 uppercase text-center">
        İzmİr&apos;İ KeŞfet
      </p>
      <CategoryBoxes items={categories_TR} />
    </div>
  );
}

export default page;
