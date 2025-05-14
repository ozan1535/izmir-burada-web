import { AccordionItem } from "@/components/AccordionItem/AccordionItem";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

async function page() {
  const response = await fetch(
    "https://openapi.izmir.bel.tr/api/ibb/izum/otoparklar"
  );

  const data = await response.json();

  return (
    <PageTemplate title={"İzmir Otopark Doluluk Oranlari"}>
      <br />
      {data.map((item) => (
        <div className="bg-gray-800 rounded-lg mx-5 my-2" key={item.ufid}>
          <div className="px-5 py-2 flex flex-col gap-2">
            <p className="text-white font-extrabold text-lg">{item.name}</p>
            <p className="text-white font-bold text-md">
              Durum: {item.status === "Opened" ? "Açık" : "Kapalı"}
            </p>
            <p className="text-white font-bold text-md">
              Doluluk: {item.occupancy.total.occupied} /{" "}
              {item.occupancy.total.occupied + item.occupancy.total.free}
            </p>
            <p className="text-white font-bold text-md">
              {item.isPaid
                ? `Ücretli - ${item.payment.cash ? "Nakit " : " "} ${
                    item.payment.card ? "Kart " : " "
                  } ${item.payment.sms ? "SMS " : " "}`
                : "Ücretsiz"}
            </p>
            <p className="text-white font-bold text-md">
              {item.accessibility.disabled
                ? "Engellilere uygun"
                : "Engellilere uygun değil"}
            </p>
            <p className="mb-3 text-white font-bold text-md">
              {item.accessibility.lpgAllowed ? "LPG uygun" : "LPG uygun değil"}
            </p>

            <AccordionItem title="Saatler ve yol tarifi">
              <div className="flex flex-col gap-1">
                <p>Pazartesi: {item.openingHours.monday}</p>
                <p>Salı: {item.openingHours.tuesday}</p>
                <p>Çarşamba: {item.openingHours.wednesday}</p>
                <p>Perşembe: {item.openingHours.thursday}</p>
                <p>Cuma: {item.openingHours.friday}</p>
                <p>Cumartesi: {item.openingHours.saturday}</p>
                <p className="mb-3">Pazar: {item.openingHours.sunday}</p>
              </div>
            </AccordionItem>
          </div>
        </div>
      ))}
    </PageTemplate>
  );
}

export default page;
