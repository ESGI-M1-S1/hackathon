"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputField from "@/app/components/Input";

const cardsData = [
  {
    id: 1,
    title: "Card 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendant_limit: 10,
    location: "Paris",
    duration: "1h",
    date: "2024-12-12",
    ressources: [
      {
        id: 1,
        name: "Ressource 1",
        password: "password",
      },
    ],
  },
  {
    id: 2,
    title: "Card 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendant_limit: 10,
    location: "Paris",
    duration: "1h",
    date: "2024-12-12",
    ressources: [
      {
        id: 1,
        name: "Ressource 1",
        password: "password",
      },
    ],
  },
  {
    id: 3,
    title: "Card 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendant_limit: 10,
    location: "Paris",
    duration: "1h",
    date: "2024-12-12",
  },
  {
    id: 4,
    title: "Card 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imgSrc:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    attendant_limit: 10,
    location: "Paris",
    duration: "1h",
    date: "2024-12-12",
  },
];

function Page({ params }: { params: { id: string } }) {
  const card = cardsData.find((card) => card.id === Number(params.id));
  const [formData, setFormData] = useState({
    event: params.id,
    email: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      data: formData,
    };
    fetch("http://localhost:1337/api/registrations/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <main className={"bg-black text-white"}>
      <section
        className={
          "py-12 flex flex-col md:flex-row max-w-screen-lg mx-auto items-center"
        }
      >
        <article className={"p-5 flex flex-col basis-1/2 gap-5"}>
          <h2 className="mb-4 text-3xl leading-none text-brownText">
            {card.title ?? "Découverte des vins de Bourgogne"}
          </h2>
          <div className={"relative w-full h-[300px]"}>
            <Image
              src={card.imgSrc}
              alt={"description de l'atelier"}
              fill
              className={"object-cover"}
            />
          </div>
          <p>
            {card.description ??
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique in diam sed imperdiet. Sed ut tempor risus. Mauris arcu quam, rutrum a cursus id, iaculis non nisl. Proin blandit nibh sit amet neque faucibus, eget euismod urna porttitor. Cras molestie quam ut mattis dignissim. Fusce faucibus urna a augue pharetra cursus."}
          </p>
          <ul className={"text-brown"}>
            <li className={"flex"}>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              {card.location ?? "Sciences-U"}
            </li>
            <li className={"flex"}>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              {card.date}
            </li>
            <li className={"flex"}>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                  clip-rule="evenodd"
                />
              </svg>
              {card?.attendant_limit
                ? `${card.attendant_limit} places disponibles`
                : ""}
            </li>
            <li className={"flex"}>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 10h9.231M6 14h9.231M18 5.086A5.95 5.95 0 0 0 14.615 4c-3.738 0-6.769 3.582-6.769 8s3.031 8 6.769 8A5.94 5.94 0 0 0 18 18.916"
                />
              </svg>
              15.00€
            </li>
          </ul>
          {card?.ressources?.map((ressource) => (
            <button
              type="button"
              className="w-full bg-brown text-white py-3 px-10 hover:bg-brown duration-100 hover:text-white flex justify-center"
              key={ressource.id}
            >
              {ressource.password && (
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
              {ressource.name}
            </button>
          ))}
        </article>
        <article className={"flex flex-col basis-1/2 gap-5 px-4"}>
          <h2
            className={
              "md:text-center text-4xl mb-7 relative before:content-[''] before:absolute before:w-32 before:h-1 before:bg-white before:-bottom-4"
            }
          >
            Participez à l&apos;atelier
          </h2>
          <form className={"flex flex-col gap-4"}>
            <InputField name={"email"} placeholder={"Email"} />
            <InputField name={"nom"} placeholder={"Nom"} />
            <InputField name={"prenom"} placeholder={"Prénom"} />
            <InputField name={"password"} placeholder={"Mot de passe"} />
            <button
              type="button"
              className="w-full bg-brown text-white py-3 px-10 hover:bg-brown duration-100 hover:text-white"
            >
              S&apos;inscrire
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}

export default Page;
