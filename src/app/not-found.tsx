import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container min-h-screen px-6 py-12 mx-auto flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">
        {/* Metin Kısmı */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-blue-500">404 Hatası</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Sayfa bulunamadı
          </h1>
          <p className="mt-4 text-gray-500">
            Üzgünüz, aradığınız sayfa mevcut değil. Aşağıdaki bağlantılar
            yardımcı olabilir:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link
              href="/"
              className="w-full sm:w-auto cursor-pointer px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Anasayfaya dön
            </Link>
          </div>
        </div>

        {/* Görsel Kısmı */}
        <div className="relative w-full lg:w-1/2 lg:mt-0">
          <Image
            className="w-full h-80 md:h-96 lg:h-[32rem] rounded-lg object-cover"
            width={800}
            height={600}
            src="/assets/izmirMainPictures/efes.webp"
            alt="Sayfa bulunamadı görseli"
          />
        </div>
      </div>
    </section>
  );
}
