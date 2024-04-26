"use client";
import React, { useState } from "react";
import InputField from "@/app/components/Input";
import axios from "axios";

const RegistrationForm = () => {
  const [registrated, setRegistrated] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      name: formData.get("nom") + " " + formData.get("prenom"),
      password: formData.get("password"),
    };
    axios
      .post("http://localhost:1337/api/registrations", {
        data: {
          ...data,
        },
      })
      .then(() => {
        setRegistrated(true);
      });
  };
  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
      {registrated ? (
        <p className={"text-center"}>Merci pour l&apos;inscription</p>
      ) : (
        <>
          <InputField name={"email"} placeholder={"Email"} />
          <InputField name={"nom"} placeholder={"Nom"} />
          <InputField name={"prenom"} placeholder={"Prénom"} />
          <InputField name={"password"} placeholder={"Mot de passe"} />
          <button
            type="submit"
            className="w-full bg-brown text-white py-3 px-10 hover:bg-brown duration-100 hover:text-white"
          >
            S&apos;inscrire
          </button>
        </>
      )}
    </form>
  );
};

export default RegistrationForm;
