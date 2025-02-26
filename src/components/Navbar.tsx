"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = ["OUR SHOWS", "ATTENDES", "EXHIBITORS", "RESOURCES"];
  const navigation2 = [
    "NAVIGATE THIS MENU",
    "NOMINATE",
    "VOTE",
    "ABOUT",
    "CATEGORIES",
    "PAST WINNERS",
    "TESTIMONIALS",
  ];

  return (
    <div className="w-full fixed top-0 z-50 bg-white shadow-md dark:bg-white-300 bg-opacity-85">
      <nav className="container relative flex flex-wrap items-center justify-between p-6 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-gray-500">
            <Image
              src="/img/logo.svg"
              width="0"
              alt="N"
              height="0"
              className="w-full"
            />
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/"
              className="p-4 px-8 text-white bg-[#C80B6A] rounded-full md:ml-5"
            >
              REGISTER
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                  >
                    Get Started
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-end lg:justify-end lg:flex-1 lg:space-x-5">
          <ul className="items-center justify-end flex-1 pt-3 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-[#2A3A52] no-underline rounded-md  hover:text-gray-600  "
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="w-full relative z-50 bg-[#C80B6A] bg-opacity-90 shadow-md backdrop-blur-[30px]">
        <nav className="container relative flex flex-wrap items-center justify-between mb-0 py-2 mx-auto lg:justify-between">
          <>
            <div className="flex flex-wrap w-full justify-center">
              {navigation2.map((item, index) => (
                <li className="mr-3 list-none" key={index}>
                  <Link
                    key={index}
                    href="/"
                    className="w-full px-10 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </div>
          </>
        </nav>
      </div>
    </div>
  );
};
