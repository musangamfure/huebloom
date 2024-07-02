import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <div className=" border-b-2 lg:absolute w-full h-[4.1rem] bg-white z-10 p-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="logo" width={100} height={50} />
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
