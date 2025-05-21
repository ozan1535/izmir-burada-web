import React from "react";
import { createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Gizlilik Politikası - İzmir Burada",
    "İzmir Burada olarak kişisel verilerinizi önemsiyoruz. Gizlilik politikamız hakkında bilgi edinin ve verilerinizin nasıl korunduğunu öğrenin.",
    "İzmir Burada gizlilik politikası, kişisel verilerin korunması, veri güvenliği, KVKK, kullanıcı gizliliği, veri toplama politikası",
    "",
    "/gizlilik-politikasi"
  );
}

export default function page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 mt-16">
      <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>
      <p className="text-sm text-gray-500 mb-8">
        Son güncelleme: 13 Mayıs 2025
      </p>

      <p className="mb-4">
        <strong>izmir-burada.com</strong> olarak ziyaretçilerimizin gizliliğine
        önem veriyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde
        hangi bilgilerin toplandığını, bu bilgilerin nasıl kullanıldığını ve
        korunduğunu açıklar.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Toplanan Veriler</h2>
      <p className="mb-4">
        izmir-burada.com, kullanıcıların kişisel bilgilerini doğrudan toplamaz.
        Ancak, web sitemizi geliştirmek ve kullanıcı deneyimini iyileştirmek
        amacıyla <strong>Google Analytics</strong> hizmetinden yararlanıyoruz.
      </p>
      <p className="mb-4">
        Google Analytics, ziyaretçi etkileşimlerini analiz etmek için çerezleri
        (cookies) kullanır. Bu veriler arasında şunlar yer alabilir:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Ziyaret edilen sayfalar</li>
        <li>Ziyaret süresi</li>
        <li>Tarayıcı ve işletim sistemi bilgileri</li>
        <li>IP adresi (anonimleştirilmiş)</li>
      </ul>
      <p className="mb-4">
        Bu bilgiler, kimliğinizi belirlemek için değil, yalnızca istatistiksel
        analiz amacıyla kullanılmaktadır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Çerezler</h2>
      <p className="mb-4">
        Web sitemiz, yalnızca Google Analytics tarafından kullanılan çerezleri
        içerir. Bu çerezler, tarayıcınızda saklanan küçük veri dosyalarıdır ve
        web sitemizin performansını analiz etmemize yardımcı olur. Dilerseniz
        tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Veri Paylaşımı</h2>
      <p className="mb-4">
        Toplanan veriler, üçüncü taraflarla <strong>paylaşılmamaktadır</strong>.
        Sadece Google Analytics ile sınırlı olan bu veriler, Google’ın kendi
        gizlilik politikaları çerçevesinde işlenir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Veri Saklama</h2>
      <p className="mb-4">
        izmir-burada.com, herhangi bir şekilde kendi sunucularında, veri
        tabanında veya local storage üzerinde kullanıcı verilerini saklamaz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. İletişim</h2>
      <p className="mb-4">
        Gizlilik politikamız hakkında sorularınız varsa, bizimle iletişime
        geçmekten çekinmeyin:
      </p>
      <p className="mb-2">
        📧 <strong>E-posta:</strong>{" "}
        <a
          href="mailto:info@izmir-burada.com"
          className="text-blue-600 hover:underline"
        >
          info@izmir-burada.com
        </a>
      </p>
    </main>
  );
}
