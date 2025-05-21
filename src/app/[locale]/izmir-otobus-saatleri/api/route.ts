export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const hatNo = searchParams.get("hatNo");

  const response = await fetch(
    `https://acikveri.bizizmir.com/api/3/action/datastore_search_sql?sql=SELECT%20*%20FROM%20%22c6fa6046-f755-47d7-b69e-db6bb06a8b5a%22%20WHERE%20%22HAT_NO%22%20%3D%20${hatNo}%20ORDER%20BY%20%22_id%22%20ASC`
  );
  const responseBusInformation = await fetch(
    `https://acikveri.bizizmir.com/api/3/action/datastore_search_sql?sql=SELECT%20*%20FROM%20%22bd6c84f8-49ba-4cf4-81f8-81a0fbb5caa3%22%20WHERE%20%22HAT_NO%22%20%3D%20${hatNo}`
  );

  const data = await response.json();
  const dataBusInformation = await responseBusInformation.json();
  return new Response(
    JSON.stringify({
      busHours: data.result.records,
      busInformation: dataBusInformation.result.records,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
