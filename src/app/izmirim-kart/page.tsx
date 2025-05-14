import React from "react";
import Head from "next/head";
import Image from "next/image";
import { createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "İzmirim Kart - İzmir Burada",
    "İzmirim Kart ile İzmir'de ulaşımı kolayca sağlayın. İzmir Burada, İzmirim Kart hakkında detaylı bilgi ve kullanım rehberini sizlere sunar.",
    "İzmirim Kart, İzmir ulaşım, İzmirim Kart kullanımı, İzmir ulaşım kartı, İzmir Burada İzmirim Kart, İzmir toplu taşıma, İzmirim Kart özellikleri, İzmirim Kart başvuru",
    "/assets/boxImages/izmirim-kart.png",
    "/izmirim-kart"
  );
}

function page() {
  return (
    <>
      <Head>
        <title>İzmirim Kart | izmir-burada.com</title>
        <meta
          name="description"
          content="İzmirim Kart hakkında detaylı bilgi edinin. Nereden alınır, nasıl kullanılır, online bakiye sorgulama ve daha fazlası."
        />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-10 mt-20">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
          İzmirim Kart
        </h1>
        <p className="text-center text-gray-600 mb-10">
          İzmir toplu taşıma sisteminde kullanılan İzmirim Kart hakkında
          ihtiyacınız olan her şey burada!
        </p>

        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/boxImages/izmirim-kart.png"
              alt="İzmirim Kart"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/boxImages/izmirim-kart-digital.png"
              alt="Dijital İzmirim Kart"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Info Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            İzmirim Kart Nedir?
          </h2>
          <p className="text-gray-700 mb-4">
            İzmirim Kart, İzmir'de belediyeye ait toplu taşıma araçlarında
            (otobüs, metro, vapur, tramvay) kullanılan elektronik ulaşım
            kartıdır. Ayrıca bazı sosyal tesislerde, otoparklarda ve bisiklet
            kiralama (BİSİM) hizmetlerinde de geçerlidir.
          </p>
        </section>

        {/* Usage Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Nasıl Kullanılır?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Toplu taşıma araçlarına binerken kartınızı okuyucuya yaklaştırın.
            </li>
            <li>Her biniş için ücret kartınızdan otomatik düşer.</li>
            <li>
              İzmirim Kart, tam, öğrenci ve öğretmen tipiyle farklı ücret
              tarifelerine sahiptir.
            </li>
          </ul>
        </section>

        {/* Useful Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Faydalı Bağlantılar
          </h2>
          <ul className="space-y-3">
            <li>
              🔗{" "}
              <a
                href="https://www.izmirimkart.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Resmi İzmirim Kart Web Sitesi
              </a>
            </li>
            <li>
              🔗{" "}
              <a
                href="https://www.izmirimkart.com.tr/giris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Bakiye Sorgulama
              </a>
            </li>
            <li>
              🔗{" "}
              <a
                href="https://www.izmirimkart.com.tr/satin-alma-ve-dolum-bayileri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Kart Nereden Alınır?
              </a>
            </li>
            <li>
              🔗{" "}
              <a
                href="https://www.izmirimkart.com.tr/giris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Online Bakiye Yükleme
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default page;
