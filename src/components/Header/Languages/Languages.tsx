"use client";
import Image from "next/image";
import React, { useState } from "react";
import { languageItems, toggleLanguageDropdown } from "./helpers";

function Languages() {
  const [isLanguageOpen, setLanguageOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => toggleLanguageDropdown(isLanguageOpen, setLanguageOpen)}
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <Image
          src="/assets/flags/turkey-flag.svg"
          width={25}
          height={15}
          alt="flag"
          className="mr-2"
        />
        TR
      </button>
      <div
        className={`absolute z-50 ${
          isLanguageOpen ? "" : "hidden"
        } mt-44 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700`}
        id="language-dropdown-menu"
      >
        <ul className="py-2 font-medium" role="none">
          {languageItems.map((item) => (
            <li key={item.code}>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  <Image
                    src={item.flagSource}
                    width={25}
                    height={15}
                    alt="flag"
                    className="mr-2"
                  />
                  {item.code}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Languages;
