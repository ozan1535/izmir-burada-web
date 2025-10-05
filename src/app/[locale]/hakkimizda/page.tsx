import { getTranslations } from "next-intl/server";
import { createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Hakkımızda - İzmir Burada",
    "İzmir Burada hakkında bilgi, misyonumuz ve vizyonumuz",
    "hakkımızda, İzmir Burada, misyon, vizyon, ekip",
    "/assets/izmir-burada-icon.png",
    "/hakkimizda"
  );
}

export default async function page() {
  const t = await getTranslations("AboutUs");

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("title")}</h1>

      <div className="prose max-w-none">
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            {t("subtitle")}
          </h2>
          <p className="text-lg text-gray-700 mb-4">{t("p1")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              {t("mission")}
            </h3>
            <p className="text-gray-700">{t("p2")}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">
              {t("title2")}
            </h3>
            <p className="text-gray-700">{t("p3")}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">{t("title3")}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">🚌</div>
              <h4 className="font-semibold mb-2">{t("title4")}</h4>
              <p className="text-sm text-gray-600">{t("p4")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏥</div>
              <h4 className="font-semibold mb-2">{t("title5")}</h4>
              <p className="text-sm text-gray-600">{t("p5")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎭</div>
              <h4 className="font-semibold mb-2">{t("title6")}</h4>
              <p className="text-sm text-gray-600">{t("p6")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌊</div>
              <h4 className="font-semibold mb-2">{t("title7")}</h4>
              <p className="text-sm text-gray-600">{t("p7")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
