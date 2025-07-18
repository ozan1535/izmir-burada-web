import Image from "next/image";
import {
  createMetadata,
  fetchData,
  getCurrentDate,
  getFormattedDate,
} from "@/utils/helpers";
import Table from "@/components/Table/Table";
import {
  getCurrentDateItems,
  getNextPrayer,
  getPrayerTimes,
  namazVakitleriKeys,
  namazVakitleriTableHeaderItems,
} from "./helpers";
import Countdown from "@/components/Countdown/Countdown";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { INamazVakitleri } from "./namazVakitleri.types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return createMetadata(
    t("NamazVakitleri.title"),
    t("NamazVakitleri.description"),
    t("NamazVakitleri.tags"),
    "/assets/boxImages/namaz-vakitleri.png",
    "/izmir-namaz-vakitleri"
  );
}
async function page() {
  const t = await getTranslations("NamazVakitleri");

  const ezanlar = await fetchData<INamazVakitleri[]>([
    "https://ezanvakti.emushaf.net/vakitler/9560",
  ]);
  const data = ezanlar[0];
  const currentDateItems = getCurrentDateItems(data);
  const prayerTimes = currentDateItems ? getPrayerTimes(currentDateItems) : [];
  const nextPrayer = getNextPrayer(prayerTimes);

  console.log(prayerTimes, nextPrayer, "nextprayer");

  return (
    <PageTemplate title={t("title")}>
      <div className="w-full bg-blue-500 text-white my-5 p-4 rounded-lg">
        <div className="flex flex-wrap justify-center items-center text-center text-sky-100 text-lg font-bold mt-4">
          <div>
            <p>{getFormattedDate("tr")}</p>
            <p>{currentDateItems?.HicriTarihUzun}</p>
          </div>
          <div>
            <Image
              src={currentDateItems?.AyinSekliURL || ""}
              width={100}
              height={100}
              alt="Ayın Sekli"
            />
          </div>
        </div>
        {nextPrayer && <Countdown targetTime={nextPrayer.time} />}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {prayerTimes.map(({ label, time }, index) => {
            const isNextPrayer = nextPrayer && nextPrayer.label === label;
            return (
              <div
                key={index}
                className={`${
                  isNextPrayer ? "bg-blue-700" : "bg-blue-400"
                } p-2 rounded-lg shadow-md text-center`}
              >
                <p className="font-semibold text-lg">{label}</p>
                <p className="text-2xl font-black">{time}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Table
        headItems={namazVakitleriTableHeaderItems}
        data={data.slice(
          data.findIndex((item) => item.MiladiTarihKisa === getCurrentDate())
        )}
        keys={namazVakitleriKeys}
      />
    </PageTemplate>
  );
}

export default page;
