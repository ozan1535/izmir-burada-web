import Head from "next/head";
import React from "react";
import { createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Kullanım Şartları - İzmir Burada",
    "İzmir Burada platformunu kullanmadan önce lütfen kullanım şartlarını dikkatlice okuyun. Hizmet koşulları, kullanıcı yükümlülükleri ve yasal uyarılar hakkında detaylı bilgi edinin.",
    "İzmir Burada kullanım şartları, kullanıcı sözleşmesi, hizmet koşulları, İzmir Burada yasal bilgiler, kullanım kuralları",
    "",
    "/kullanim-sartlari"
  );
}

function page() {
  return (
    <>
      <Head>
        <title>Kullanım Şartları | izmir-burada.com</title>
        <meta name="description" content="izmir-burada.com kullanım şartları" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10 mt-20">
        <h1 className="text-3xl font-bold mb-6">Kullanım Şartları</h1>
        <p className="text-sm text-gray-500 mb-8">
          Son güncelleme: 13 Mayıs 2025
        </p>

        <p className="mb-4">
          Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş
          sayılırsınız. Lütfen siteyi kullanmadan önce bu şartları dikkatlice
          okuyunuz.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Hizmet Tanımı</h2>
        <p className="mb-4">
          izmir-burada.com, kullanıcılarına İzmir ve çevresiyle ilgili bilgi,
          içerik ve rehberlik hizmeti sunan bir web sitesidir. Sitedeki
          içerikler bilgilendirme amaçlıdır ve zaman zaman değişebilir.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Kullanım Koşulları
        </h2>
        <p className="mb-4">
          Web sitesini yalnızca yasal amaçlar için kullanabilirsiniz.
          izmir-burada.com üzerinde yer alan içerikleri izinsiz kopyalamak,
          çoğaltmak veya ticari amaçlarla kullanmak yasaktır.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Fikri Mülkiyet</h2>
        <p className="mb-4">
          Web sitesinde yer alan tüm yazılar, görseller, logolar ve diğer
          içerikler izmir-burada.com’a aittir ya da yasal kullanım izni
          alınmıştır. Herhangi bir içerik, izinsiz olarak kullanılamaz veya
          dağıtılamaz.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Sorumluluğun Sınırlandırılması
        </h2>
        <p className="mb-4">
          izmir-burada.com, sitedeki bilgilerin doğruluğu ve güncelliği
          konusunda azami özen gösterse de, bilgilerin kullanımı sonucu
          doğabilecek zararlardan sorumlu tutulamaz.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Dış Bağlantılar</h2>
        <p className="mb-4">
          Web sitemiz, harici sitelere bağlantılar içerebilir. Bu sitelerin
          içeriklerinden izmir-burada.com sorumlu değildir.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Şartlarda Değişiklik
        </h2>
        <p className="mb-4">
          izmir-burada.com, kullanım şartlarını dilediği zaman güncelleme
          hakkını saklı tutar. Güncellenmiş şartlar bu sayfada yayımlandığı
          andan itibaren geçerli olur.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. İletişim</h2>
        <p className="mb-2">
          Bu şartlarla ilgili sorularınız için bizimle iletişime geçebilirsiniz:
        </p>
        <p>
          📧 <strong>E-posta:</strong>{" "}
          <a
            href="mailto:info@izmir-burada.com"
            className="text-blue-600 hover:underline"
          >
            info@izmir-burada.com
          </a>
        </p>
      </main>
    </>
  );
}

export default page;
