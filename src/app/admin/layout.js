"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  RiDashboardHorizontalFill,
  RiShoppingBag3Fill,
  RiAddBoxFill,
  RiFileList3Fill,
  RiUserSettingsFill,
  RiTeamFill,
} from "react-icons/ri";

const AdminLayout =  ({ children }) => {
 
    const path = usePathname()
    console.log(path);

  const routes = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <RiDashboardHorizontalFill />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: <RiShoppingBag3Fill />,
    },
    {
      name: "Add Product",
      path: "/admin/products/add",
      icon: <RiAddBoxFill />,
    },
    {
      name: "Manage Orders",
      path: "/admin/orders",
      icon: <RiFileList3Fill />,
    },
    {
      name: "Manage Users",
      path: "/admin/users",
      icon: <RiUserSettingsFill />,
    },
    {
      name: "Manage Customers",
      path: "/admin/customers",
      icon: <RiTeamFill />,
    },
  ];

 

  return (
    <div>
      <div className="drawer drawer-open">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side text-white bg-black">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu !p-0  min-h-full w-60">
            {routes.map((item) => (
              <Link href={item.path}>
                <div className={` ${path == item.path ? "bg-white text-black" : "" }  text-base hover:bg-white/70 hover:text-black/70 p-2`}>
                  {item.icon} {item.name}
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
