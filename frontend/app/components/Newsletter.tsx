"use client";
import React from "react";

function Newsletter() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
  };
  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
      <input
        type="email"
        placeholder="Votre adresse email"
        className={"p-2 flex-1 w-full bg-black border-brown text-brownText"}
      />
      <button
        type="button"
        className="w-full bg-brown text-white py-3 px-10 hover:bg-brown duration-100 hover:text-white"
      >
        Je m&apos;abonne
      </button>
    </form>
  );
}

export default Newsletter;
