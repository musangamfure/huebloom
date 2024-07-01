import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignUp path="/sign-up" />
    </div>
  );
};

export default page;
