import Image from "next/image";
import Link from "next/link";
import PictureBoxes from "@/components/PictureBoxes/PictureBoxes";
import {
  homePageDiscoverIzmir,
  homePageTastes,
  homePageUnforgettablePlaces,
} from "@/components/PictureBoxes/helpers";
import { homePageImportantLinks } from "@/components/SwiperItems/helpers";
import { createMetadata } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("HomePage.title"),
    t("HomePage.description"),
    t("HomePage.tags"),
    "/assets/izmir-burada-icon.png",
    "/"
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("HomePage");

  const { locale } = await params;

  return (
    <div>
      <div className="relative w-full h-[120vh] md:h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-12 bg-blue-100 pt-16">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-600 mb-4">
            {t("firstSection.everything")}
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            {t("firstSection.websiteInfo")}{" "}
            <span className="font-bold text-2xl text-sky-600">
              {t("firstSection.websiteName")}
            </span>
          </p>
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.ozan1535.izmirburada"
            }
            target="_blank"
            className="flex flex-col items-center md:items-start"
          >
            <p className="text-sky-600 font-bold">
              {" "}
              {t("firstSection.download")}
            </p>
            <img
              src="/assets/play_store.webp"
              className="h-10 mt-3"
              alt="Google Play Logo"
            />
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center z-10">
          <Image
            src="/assets/main-image.png"
            alt="İzmir Görseli"
            className="w-full max-h-96 object-contain md:max-h-full"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute hidden md:block bottom-0 left-1/2 transform -translate-x-1/2 z-20">
          <Image
            src="/assets/down-arrow.svg"
            alt="Scroll Down"
            className="w-12 h-auto animate-bounce"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-center items-center p-10 gap-6">
          <p className="w-full md:w-80 text-xl md:text-2xl font-semibold text-blue-400 text-center md:text-left">
            {t("secondSection.slogan")}{" "}
            <span className="font-black"> {t("secondSection.sloganHere")}</span>
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
                  href={`/${locale}/${item.link[locale]}`}
                  className="inline-block w-64 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
                >
                  {item.name[locale]}
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
            {t("firstSection.websiteName")}
          </div>

          <p className="text-5xl md:text-8xl text-blue-300 font-extrabold drop-shadow-lg">
            {t("thirdSection.together")}
          </p>
          <p className="text-5xl md:text-8xl text-blue-300 font-extrabold drop-shadow-lg">
            {t("thirdSection.discover")}
          </p>

          <Link
            href={`${locale}/kesfet`}
            className="inline-block bg-gradient-to-r from-indigo-400 to-cyan-400 px-6 py-3 text-lg font-semibold text-white mt-9 shadow-md transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg hover:from-indigo-500 hover:to-cyan-500"
          >
            {t("thirdSection.discoverCity")}
          </Link>
        </div>
      </div>

      <div className="p-10 flex flex-col justify-center items-center gap-5 bg-gray-100">
        <p className="text-5xl font-black text-sky-600">
          {t("thirdSection.unforgettable")}
        </p>
        <p className="text-lg text-sky-600">{t("thirdSection.description")}</p>

        <PictureBoxes items={homePageUnforgettablePlaces} locale={locale} />
      </div>
      <div className="p-10 flex flex-col justify-center items-center gap-5 bg-blue-100">
        <p className="text-3xl font-black text-sky-600">
          {t("fourthSection.discover")}
        </p>

        <PictureBoxes items={homePageDiscoverIzmir} locale={locale} />
      </div>

      <div className="p-10 flex flex-col justify-center items-center gap-5 bg-gray-100">
        <p className="text-3xl font-black text-sky-600">
          {t("fifthSection.taste")}
        </p>
        <PictureBoxes items={homePageTastes} locale={locale} />
      </div>
    </div>
  );
}
