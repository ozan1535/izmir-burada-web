"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ICategoryBox } from "../CategoryBox.types";
import { useParams } from "next/navigation";

function CategoryBox({ item }: { item: ICategoryBox }) {
  const params = useParams();
  const { locale } = params;
  return (
    <div className="relative w-full h-52 my-5 bg-blue-200 rounded p-2 hover:shadow-2xl hover:duration-300">
      <Link href={`/${locale}${item.href[locale]}` || ""}>
        <div className="relative w-full h-full">
          <Image
            src={item.media}
            layout="fill"
            objectFit="contain"
            alt={item.name[locale]}
            className="rounded"
          />
        </div>
        <div className="w-full h-10 bg-blue-400 mx-auto flex justify-center items-center rounded">
          <p className="text-white font-semibold uppercase">
            {item.name[locale]}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryBox;
