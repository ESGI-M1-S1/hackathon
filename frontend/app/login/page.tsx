"use client";
import React from "react";
import { Button } from "flowbite-react";
import axios from "axios";

const Page = () => {
  const handleLogin = () => {
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: "pouet",
        password: "pouetpouet",
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <>
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
};

export default Page;
