import SwiperSlideCategories from "@/components/SwiperSlideCategories/SwiperSlideCategories";
import {
  createMetadata,
  locations_TR,
  transportation_TR,
  usefulInformations_TR,
} from "@/utils/helpers";
import React from "react";

export async function generateMetadata() {
  return createMetadata(
    "Faydalı Bilgiler - İzmir Burada",
    "İzmir hakkında faydalı bilgiler. İzmir Burada, şehri keşfederken ihtiyacınız olabilecek pratik bilgiler, tavsiyeler ve ipuçlarını sunar.",
    "İzmir faydalı bilgiler, İzmir ipuçları, İzmir tavsiyeler, İzmir pratik bilgiler, İzmir gezilecek yerler, İzmir yemek yerleri, İzmir alışveriş, İzmir ulaşım bilgileri, İzmir kültür, İzmir etkinlikler",
    "/assets/izmirMainPictures/kemeralti.webp",
    "/faydali-bilgiler"
  );
}

function Page() {
  return (
    <div className="px-5 md:px-10">
      <p className="mt-24 text-xl font-bold text-sky-800 uppercase">Trendler</p>
      <SwiperSlideCategories items={usefulInformations_TR} canAutoPlay={true} />
      <div className="mt-5 flex justify-between items-center">
        <p className="text-xl font-bold text-sky-800 uppercase">UlaŞIm</p>
        {/* <Link href={"/"} className="text-red-400">
          Hepsini Gör
        </Link> */}
      </div>
      <SwiperSlideCategories items={transportation_TR} />
      <div className="mt-5 flex justify-between items-center">
        <p className="text-xl font-bold text-sky-800 uppercase">Konumlar</p>
        {/* <Link href={"/"} className="text-red-400">
          Hepsini Gör
        </Link> */}
      </div>
      <SwiperSlideCategories items={locations_TR} />
    </div>
  );
}

export default Page;
