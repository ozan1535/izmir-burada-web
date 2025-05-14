import OtobusumNeredeComponent from "@/components/OtobusumNeredeComponent/OtobusumNeredeComponent";
import { createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "Otobüsüm Nerede - İzmir Burada",
    "İzmir'deki otobüslerin konumlarını anında öğrenin. İzmir Burada ile otobüslerinizi takip ederek, zaman kaybı yaşamadan hedefinize kolayca ulaşın.",
    "İzmir otobüs konumları, İzmir otobüs, İzmir ulaşım, İzmir Burada otobüs, İzmir otobüs takibi, otobüs konumları İzmir, otobüs nerede, otobüs güzergahları İzmir",
    "/assets/boxImages/yaklasanotobus.png",
    "/otobusum-nerede"
  );
}

function page() {
  return <OtobusumNeredeComponent />;
}

export default page;
