"use client";
import React, { useState } from "react";
import Languages from "./Languages/Languages";
import NavbarItems from "./NavbarItems/NavbarItems";
import Link from "next/link";

export function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  // Toggle navbar
  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-gray-900 border-b border-b-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assets/izmir-burada-icon.png"
            className="h-8 me-3 rounded-full"
            alt="FlowBite Logo"
          />
          <span className="font-mono self-center text-xl font-semibold whitespace-nowrap text-white">
            İZMİR BURADA
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <Languages />

          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded={isNavbarOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isNavbarOpen ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-language"
        >
          <NavbarItems />
        </div>
      </div>
    </nav>
  );
}

export default Header;
