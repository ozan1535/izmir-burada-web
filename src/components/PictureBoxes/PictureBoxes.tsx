import Image from "next/image";
import { IPictureBox } from "./PictureBoxes.types";

function PictureBoxes({ items }: { items: IPictureBox[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <li
          className="relative lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] group"
          key={item.text}
        >
          <a href={item.href} className="block w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={item.imageSource}
                alt={item.text}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 ${item.bgColor} group-hover:opacity-80 group-hover:duration-500 bg-opacity-50 z-10`}
              ></div>

              {/* <div className="absolute bottom-0 left-0 z-20 p-4 text-white hidden group-hover:block">
                <p className="text-sm">{item.secondaryText}</p>
                <p className="font-bold text-lg">
                  {item.text.toLocaleUpperCase("tr-TR")}
                </p>
              </div> */}
              <div className="absolute bottom-0 left-0 z-20 p-4 text-white block lg:hidden lg:group-hover:block">
                <p className="text-sm">{item.secondaryText}</p>
                <p className="font-bold text-lg">
                  {item.text.toLocaleUpperCase("tr-TR")}
                </p>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PictureBoxes;
