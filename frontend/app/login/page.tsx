import React from "react";
import { redirect } from "next/navigation";

const Page = () => {
  redirect("http://localhost:1337/admin");
};

export default Page;
