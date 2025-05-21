"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ListBusHours from "../ListBusHours";
import DropdownWithSearch from "@/components/DropdownWithSearch/DropdownWithSearch";
import {
  busLines,
  fetchItems,
  getFormattedData,
} from "@/app/[locale]/izmir-otobus-saatleri/helpers";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { INameAndId } from "@/utils/types";
import { IOtobusSaatleri } from "@/app/[locale]/izmir-otobus-saatleri/otobusSaatleri.types";

function SwiperTable({ title, information, placeholder }) {
  const [selected, setSelected] = useState<INameAndId | null>(null);
  const [data, setData] = useState<IOtobusSaatleri>({
    busHours: [],
    busInformation: [],
  });
  const { busHours, busInformation } = data;

  useEffect(() => {
    if (selected) {
      fetchItems(selected.id, setData);
    }
  }, [selected]);

  const formattedBusData = getFormattedData(busHours);
  return (
    <PageTemplate title={title}>
      <DropdownWithSearch
        items={busLines}
        selected={selected}
        setSelected={setSelected}
        placeholder={placeholder}
      />
      {busHours?.length ? (
        <>
          <h1 className="w-full text-center p-3 font-bold border-b-2 border-b-gray-300">
            {busInformation[0]["HAT_NO"]} - {busInformation[0]["HAT_ADI"]}
          </h1>
          {busInformation[0]["ACIKLAMA"] && (
            <h1 className="w-full text-center p-3 border-b-2 border-b-gray-300">
              {busInformation[0]["ACIKLAMA"]}
            </h1>
          )}
          <Swiper
            // slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            className="my-5"
            navigation
            modules={[Navigation]}
          >
            {formattedBusData?.map((item, index) => (
              <SwiperSlide key={index}>
                <ListBusHours
                  singleBusData={item}
                  busInformation={busInformation}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div className="p-4 text-base leading-relaxed text-gray-800">
          {selected ? (
            busInformation?.length > 0 ? (
              <>
                <strong className="font-semibold">
                  {busInformation[0]["HAT_NO"]} HATTI İÇİN{" "}
                </strong>
                HERHANGİ BİR VERİ BULUNAMADI. BU DURUMUN SİSTEM KAYNAKLI BİR
                SORUNDAN KAYNAKLANDIĞINI DÜŞÜNÜYORSANIZ, LÜTFEN DAHA SONRA
                TEKRAR DENEYİNİZ.
              </>
            ) : (
              <>
                HERHANGİ BİR VERİ BULUNAMADI. BU DURUMUN SİSTEM KAYNAKLI BİR
                SORUNDAN KAYNAKLANDIĞINI DÜŞÜNÜYORSANIZ, LÜTFEN DAHA SONRA
                TEKRAR DENEYİNİZ.
              </>
            )
          ) : (
            <span className="text-blue-600 font-medium">{information} </span>
          )}
        </div>
      )}
    </PageTemplate>
  );
}

export default SwiperTable;
