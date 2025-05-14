import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryBox({ item }) {
  console.log(item);
  return (
    <div className="relative w-full h-52 my-5 bg-blue-200 rounded p-2 hover:shadow-2xl hover:duration-300">
      <Link href={item.href}>
        <div className="relative w-full h-full">
          <Image
            src={item.media}
            layout="fill"
            objectFit="contain"
            alt={item.name}
            className="rounded"
          />
        </div>
        <div className="w-full h-10 bg-blue-400 mx-auto flex justify-center items-center rounded">
          <p className="text-white font-semibold uppercase">{item.name}</p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryBox;
