"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const TopNav = () => {
  const [isShown, setIsShown] = useState("false");

  const handleClose = () => {
    setIsShown(false);
    localStorage.setItem("topNav", false);
  };

  useEffect(() => {
    const topNav = localStorage.getItem("topNav");
    console.log(topNav);

    if (topNav == "false") {
      setIsShown(false);
    }
  }, []);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.reload()
        },
      },
    });
  };

  return (
    <div className="bg-black">
      {isShown && (
        <div className="container flex items-center mx-auto  w-full font-jakarta text-white py-2 text-center">
          <p className="flex-1">
            {" "}
            Sign up and get 20% off to your first order.{" "}
            <Link href={"/"} className="font-semibold border-b-2 pb-1 ">
              Sign Up Now
            </Link>
          </p>

          <button onClick={handleLogout}>Logout</button>

          <IoCloseSharp onClick={handleClose} className="text-white text-xl" />
        </div>
      )}
    </div>
  );
};

export default TopNav;
