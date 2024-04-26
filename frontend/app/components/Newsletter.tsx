"use client";
import React from "react";
import axios from "axios";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    axios
      .post("http://localhost:1337/api/newsletters", {
        data: { email },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
      <input
        type="email"
        placeholder="Votre adresse email"
        className={"p-2 flex-1 w-full bg-black border-brown text-brownText"}
      />
      <button
        type="submit"
        className="w-full bg-brown text-white py-3 px-10 hover:bg-brown duration-100 hover:text-white"
      >
        Je m&apos;abonne
      </button>
    </form>
  );
};
