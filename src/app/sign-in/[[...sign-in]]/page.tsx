import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignIn path="/sign-in" />
    </div>
  );
};

export default page;
