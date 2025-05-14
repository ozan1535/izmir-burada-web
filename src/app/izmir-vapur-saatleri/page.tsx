import VapurSaatleriComponent from "@/components/VapurSaatleriComponent/VapurSaatleriComponent";
import { createMetadata } from "@/utils/helpers";

export async function generateMetadata() {
  return createMetadata(
    "İzmir Vapur Saatleri - İzmir Burada",
    "İzmir'in vapur saatlerini öğrenin. İzmir Burada ile vapur seferlerini takip ederek, şehir içi deniz ulaşımını kolayca planlayın.",
    "İzmir vapur saatleri, İzmir vapur seferleri, İzmir deniz ulaşımı, İzmir vapur, İzmir Burada vapur saatleri, vapur tarifesi İzmir, İzmir vapur güzergahları, deniz yolu İzmir",
    "/assets/boxImages/vapursaatleri.png",
    "/izmir-vapur-saatleri"
  );
}

const VapurSaatleriPage = () => {
  return <VapurSaatleriComponent />;
};

export default VapurSaatleriPage;
