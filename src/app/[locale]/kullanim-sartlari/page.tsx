import Head from "next/head";
import React from "react";
import { createMetadata } from "@/utils/helpers";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  return createMetadata(
    "Kullanım Şartları - İzmir Burada",
    "İzmir Burada platformunu kullanmadan önce lütfen kullanım şartlarını dikkatlice okuyun. Hizmet koşulları, kullanıcı yükümlülükleri ve yasal uyarılar hakkında detaylı bilgi edinin.",
    "İzmir Burada kullanım şartları, kullanıcı sözleşmesi, hizmet koşulları, İzmir Burada yasal bilgiler, kullanım kuralları",
    "",
    "/kullanim-sartlari"
  );
}

async function page() {
  const t = await getTranslations("TermsOfUse");

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <p className="text-sm text-gray-500 mb-8">{t("lastUpdate")}</p>

      <p className="mb-4">{t("p1")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title2")}</h2>
      <p className="mb-4">{t("p2")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title3")}</h2>
      <p className="mb-4">{t("p3")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title4")}</h2>
      <p className="mb-4">{t("p4")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title5")}</h2>
      <p className="mb-4">{t("p5")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title6")}</h2>
      <p className="mb-4">{t("p6")}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{t("title7")}</h2>
      <p className="mb-4">{t("p7")}</p>
    </main>
  );
}

export default page;
