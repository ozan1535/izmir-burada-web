import React from "react";
import { createMetadata } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  return createMetadata(
    "Gizlilik Politikası - İzmir Burada",
    "İzmir Burada olarak kişisel verilerinizi önemsiyoruz. Gizlilik politikamız hakkında bilgi edinin ve verilerinizin nasıl korunduğunu öğrenin.",
    "İzmir Burada gizlilik politikası, kişisel verilerin korunması, veri güvenliği, KVKK, kullanıcı gizliliği, veri toplama politikası",
    "",
    "/gizlilik-politikasi"
  );
}

export default async function page() {
  const t = await getTranslations("PrivacyPolicy");

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 mt-16">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <p className="text-sm text-gray-500 mb-8">{t("lastUpdate")}</p>

      <p className="mb-4">
        <strong>izmir-burada.com</strong> {t("p1")}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title2")}</h2>
      <p className="mb-4">{t("p2")}</p>
      <p className="mb-4">{t("p3")}</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>{t("list")}</li>
        <li>{t("list2")}</li>
        <li>{t("list3")}</li>
        <li>{t("list4")}</li>
      </ul>
      <p className="mb-4">{t("p4")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title3")}</h2>
      <p className="mb-4">{t("p5")}</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>Google Analytics:</strong> {t("list5")}
        </li>
        <li>
          <strong>Google AdSense:</strong> {t("list6")}
        </li>
      </ul>
      <p className="mb-4">{t("p6")}</p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Google AdSense</h3>
      <p className="mb-4">
        {t("p7")}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {t("link")}
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title4")}</h2>
      <p className="mb-4">{t("p8")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title5")}</h2>
      <p className="mb-4">{t("p9")}</p>
    </main>
  );
}
