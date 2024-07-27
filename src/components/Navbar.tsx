"use client";

import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import logo from "../../public/assets/wta.png";
import { Faders } from "phosphor-react/dist";
import { checkPath } from "@/Constants/Constants";
import { useStateContext } from "@/contexts/StateContext";
import PostModal from "./PostModal";
import { List } from "lucide-react";
import LogoIcon from "../../public/assets/logo";


const Navbar: React.FC = () => {
  const { pathName, dummyUser, postModal } = useStateContext();

  return (
    <>
      <header className="w-full flex flex-col gap-2 ">
        <nav className="flex w-full justify-between items-center pr-2 bg-mainBg ">
          <section className="flex gap-2 items-center ">
          <LogoIcon width={50} height={50} fillColor="#574C95" />
            <span className="text-[32px] max-lg:text-[25px] text-sidebar ">Profolo</span>
          </section>

          {/* search section */}
          <section className="bg-white hidden lg:flex items-center justify-start w-[30rem] px-1 py-5 h-9 rounded-sm gap-2 ">
            <label htmlFor="search" className="text-xl ml-1 text-[#515151] ">
              <CiSearch />{" "}
            </label>

            <input
              name="search"
              className="flex-1 bg-transparent outline-0 "
              placeholder="search"
            />
          </section>

          {/* WTA studios section */}
          <section className="items-center hidden lg:flex gap-2">
            <span className="mr-2.5 text-lg ">
              <FaBell />
            </span>

            <div className="relative justify-center rounded-2xl border w-[200px] p-3 flex">
              <Image
                alt="WTA"
                height={50}
                width={55}
                src={logo}
                className="bg-white absolute top-[0px] h-[50px] -left-2 rounded-xl object-contain p-1.5 "
              />

              <span className="font-semibold ml-5 tracking-[0.28px] ">
                WTA Studios
              </span>
              <span className="absolute -right-3 top-[15%] ">
              <LogoIcon width={40} height={40} fillColor="#574C95" />
              </span>
            </div>
          </section>
          <div className="lg:hidden flex ">
            <List size={25} />
          </div>
        </nav>

        <div className="flex justify-between my-3">
          <span className="text-xl">
            {" "}
            {pathName.includes("/profile") ? (
              <>
                <h2 className="font-medium text-2xl max-lg:text-lg ">
                  Welcome to Profolo, {dummyUser?.name || ""}{" "}
                </h2>
              </>
            ) : (
              checkPath(pathName)
            )}
          </span>
          <span className="pr-1">
            <Faders size={20} />
          </span>
        </div>
      </header>

      {postModal && <PostModal />}
    </>
  );
};

export default Navbar;


