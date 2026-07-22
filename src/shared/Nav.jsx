import Link from 'next/link';
import React from 'react';
import { BiCart } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

const Nav = () => {
    return (

        <>
            <div className='bg-black'>
                <div

                    className='container flex items-center mx-auto  w-full font-jakarta text-white py-2 text-center'>
                    <p className='flex-1'> Sign up and get 20% off to your first order. <Link href={"/"} className='font-semibold border-b-2 pb-1 '>Sign Up Now</Link></p>

                    <IoCloseSharp className='text-white text-xl' />

                </div>

            </div>


            <div className=''>
                <div className="max-lg:collapse container  mx-auto  lg:mb-48 border-b border-b-gray-300 w-full ">
                    <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                    <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                    <div className="collapse-title navbar gap-5">
                        <div className="navbar-start w-auto shrink">
                            <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <button className="font-anton tracking-wider  text-2xl">SHOP.CO</button>
                        </div>
                        <div className="navbar-center shrink hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">

                                <li>
                                    <details>
                                        <summary>Shop</summary>
                                        <ul className="p-2 bg-base-100 w-40 z-1">
                                            <li><button>T shirts</button></li>
                                            <li><button>Shorts</button></li>
                                            <li><button>Shirts</button></li>
                                            <li><button>Hoodie</button></li>
                                            <li><button>Jeans</button></li>
                                        </ul>
                                    </details>
                                </li>
                                <li><button>On Sale</button></li>
                                <li><button>New  Arrivals </button></li>
                                <li><button>Brands</button></li>
                            </ul>
                        </div>
                        <div className="navbar-end  flex-1 ">

                            <div className='bg-base-300 flex-1 flex gap-2  px-4 py-2 rounded-full items-center text-2xl'>
                                <CiSearch />
                                <input type="text" placeholder="Search for Products..." className=" text-base" />
                            </div>

                            <BiCart className='text-xl ml-2' />
                            <CgProfile className='text-xl ml-2' />



                        </div>
                    </div>

                    <div className="collapse-content lg:hidden z-1">
                        <ul className="menu">
                            <li><button>Item 1</button></li>
                            <li>
                                <button>Parent</button>
                                <ul>
                                    <li><button>Submenu 1</button></li>
                                    <li><button>Submenu 2</button></li>
                                </ul>
                            </li>
                            <li><button>Item 3</button></li>
                        </ul>
                    </div>
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