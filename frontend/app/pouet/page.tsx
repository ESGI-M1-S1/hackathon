"use client";
import React from "react";
import { Button } from "flowbite-react";
import cookie from "@boiseitguru/cookie-cutter";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const logout = async () => {
    console.log("logout");
    cookie.set("token", "", { expires: new Date(0) });
    router.replace("/login");
  };
  return (
    <div>
      <Button color={"red"} onClick={logout}>
        Logout
      </Button>
      pouet
    </div>
  );
};

export default Page;
