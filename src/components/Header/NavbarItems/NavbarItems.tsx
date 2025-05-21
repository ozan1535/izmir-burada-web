"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { navbarItems } from "../helpers";

function NavbarItems() {
  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;
  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:border-gray-100 rounded-lg md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 border-gray-700">
      {navbarItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={`block py-2 px-3 text-lg ${
              pathname === item.href ? "text-sky-400" : "text-white"
            } hover:text-sky-400 duration-500 rounded-sm md:bg-transparent md:p-0`}
            aria-current="page"
          >
            {item.name[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavbarItems;
