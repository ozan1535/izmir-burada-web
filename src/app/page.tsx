import Image from "next/image";
import Link from "next/link";
import PictureBoxes from "@/components/PictureBoxes/PictureBoxes";
import {
  homePageDiscoverIzmir,
  homePageTastes,
  homePageUnforgettablePlaces,
} from "@/components/PictureBoxes/helpers";
import SwiperItems from "@/components/SwiperItems/SwiperItems";
import {
  homePageImportantLinks,
  mainSlidesSources,
} from "@/components/SwiperItems/helpers";
import { createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Anasayfa - İzmir Burada",
    "İzmir Burada, İzmir’de yaşam ve seyahat için ulaşım, sağlık, etkinlikler ve hizmetler hakkında güncel bilgiler sunan kapsamlı bir rehber.",
    "İzmir Burada,İzmir depremler, İzmir namaz vakitleri, İzmir rehberi, İzmir ulaşım, İzmir sağlık, İzmir etkinlikler, İzmir hizmetler, İzmir yaşam, İzmir gezilecek yerler",
    "/assets/izmir-burada-icon.png",
    "/"
  );
}

export default function Home() {
  return (
    <div>
      <SwiperItems
        swiperClassName="w-full h-screen"
        swiperSlideClassName="relative w-full h-screen"
        items={mainSlidesSources}
      />

      <div className="w-full bg-white">
        <div className="flex flex-col md:flex-row justify-center items-center p-10 gap-6">
          <p className="w-full md:w-80 text-xl md:text-2xl font-semibold text-blue-400 text-center md:text-left">
            Hayat İzmir’de akıyor, senin için her şey{" "}
            <span className="text-blue-500 font-bold">BURADA!</span>
          </p>

          <div className="relative w-full max-w-xs md:max-w-xl aspect-[3/3] md:aspect-[3/1]">
            <Image
              src="/assets/izmir-burada-icon.png"
              alt="Izmir drawing"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            {homePageImportantLinks.map((item, idx) => (
              <div className="my-2" key={idx}>
                <Link
                  href={item.link}
                  className="inline-block w-64 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-[3/3] md:aspect-[3/1]">
            <Image
              src="/assets/izmir-drawing.png"
              alt="Izmir drawing"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full h-[35rem] overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
        style={{
          backgroundImage: "url('/assets/alacati.jpg')",
        }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center backdrop-brightness-75 text-white px-4">
          <div className="text-lg font-bold tracking-wide text-center drop-shadow-md mb-4">
            İZMİR BURADA
          </div>

          <p className="text-5xl md:text-8xl text-blue-300 font-extrabold drop-shadow-lg">
            BİRLİKTE
          </p>
          <p className="text-5xl md:text-8xl text-blue-300 font-extrabold drop-shadow-lg">
            KEŞFEDİYORUZ
          </p>

          <Link
            href="/kesfet"
            className="inline-block bg-gradient-to-r from-indigo-400 to-cyan-400 px-6 py-3 text-lg font-semibold text-white mt-9 shadow-md transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg hover:from-indigo-500 hover:to-cyan-500"
          >
            ŞEHRİ KEŞFET
          </Link>
        </div>
      </div>

      <div className="p-10 flex flex-col justify-center items-center gap-5 bg-gray-100">
        <p className="text-5xl font-black text-sky-600">UNUTULMAZ...</p>
        <p className="text-lg text-sky-600">
          TARİH VE MİMARİDE UNUTULMAZ BİR YOLCULUĞA ÇIKIN
        </p>

        <PictureBoxes items={homePageUnforgettablePlaces} />
      </div>
      <div className="p-10 flex flex-col justify-center items-center gap-5 bg-blue-100">
        <p className="text-3xl font-black text-sky-600">İZMİR'İ KEŞFEDİN</p>

        <PictureBoxes items={homePageDiscoverIzmir} />
      </div>

      <div className="p-10 flex flex-col justify-center items-center gap-5 bg-gray-100">
        <p className="text-3xl font-black text-sky-600">İZMİR'DE NE YENİR?</p>
        <PictureBoxes items={homePageTastes} />
      </div>
    </div>
  );
}
