import Link from "next/link";
import React from "react";
import { BiCart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import TopNav from "./TopNav";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Nav = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const isLoggedIn = session?.user?.email;

  console.log(isLoggedIn);



  return (
    <>
      <TopNav />

      <div className="sticky top-0 bg-white z-[99]">
        <div className="max-lg:collapse container  mx-auto   border-b border-b-gray-300 w-full ">
          <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
          <label
            htmlFor="navbar-1-toggle"
            className="fixed inset-0 hidden max-lg:peer-checked:block"
          ></label>
          <div className="collapse-title navbar gap-5">
            <div className="navbar-start w-auto shrink">
              <label
                htmlFor="navbar-1-toggle"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <Link href={"/"}>
                {" "}
                <button className="font-anton tracking-wider  text-2xl">
                  SHOP.CO
                </button>
              </Link>
            </div>
            <div className="navbar-center shrink hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <Link href={"/products"}>
                  <li>
                    <details>
                      <summary>Shop</summary>
                      <ul className="p-2 bg-base-100 w-40 z-1">
                        <li>
                          <button>T shirts</button>
                        </li>
                        <li>
                          <button>Shorts</button>
                        </li>
                        <li>
                          <button>Shirts</button>
                        </li>
                        <li>
                          <button>Hoodie</button>
                        </li>
                        <li>
                          <button>Jeans</button>
                        </li>
                      </ul>
                    </details>
                  </li>
                </Link>
                <li>
                  <button>On Sale</button>
                </li>
                <li>
                  <button>New Arrivals </button>
                </li>
                <li>
                  <button>Brands</button>
                </li>
              </ul>
            </div>
            <div className="navbar-end  flex-1 ">
              <div className="bg-gray-300 hidden lg:flex flex-1  gap-2  px-4 py-2 rounded-full items-center text-2xl">
                <CiSearch />
                <input
                  type="text"
                  placeholder="Search for Products..."
                  className="focus:outline-0 text-base"
                />
              </div>
              {/* <CiSearch className="text-xl lg:hidden" /> */}
              {isLoggedIn ? (
                <>
                  {" "}
                  <Link href={"/cart"}>
                    {" "}
                    <BiCart className="text-xl ml-2" />
                  </Link>
                  <CgProfile className="text-xl ml-2" />
                  {/* <button onClick={handleLogout}>Logout</button> */}
                </>
              ) : (
                <Link className="ml-5" href={"/login"}>Login</Link>
              )}
            </div>
          </div>

          <div className="collapse-content !p-0 lg:hidden z-1">
            <ul className="menu absolute bg-white ">
              <li>
                <details>
                  <summary>Shop</summary>
                  <ul className="p-2 bg-base-100 w-40 z-1">
                    <li>
                      <button>T shirts</button>
                    </li>
                    <li>
                      <button>Shorts</button>
                    </li>
                    <li>
                      <button>Shirts</button>
                    </li>
                    <li>
                      <button>Hoodie</button>
                    </li>
                    <li>
                      <button>Jeans</button>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <button>On Sale</button>
              </li>
              <li>
                <button>New Arrivals </button>
              </li>
              <li>
                <button>Brands</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-300  lg:hidden  flex  gap-2  px-4 py-2 rounded mx-1 items-center text-2xl">
          <CiSearch />
          <input
            type="text"
            placeholder="Search for Products..."
            className="focus:outline-0 text-base"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;

// shift + alt + f : code formatting
// ctrl + alt + ↓  : duplicate line to bottom
// ctrl + alt + ↑  : duplicate line to top
// alt + click     : multiple cursor on diffren position
// alt + ↓         : move line to bottom
// alt + ↑         : move line to top
// ctrl + alt + ↑  : multiple cursor to top
// ctrl + alt + ↓  : multiple cursor to bottom
// ctrl + space    : for code suggestion / import suggesiton
