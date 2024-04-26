import React from "react";
import Image from "next/image";
import RegistrationForm from "@/app/components/RegistrationForm";
import Link from "next/link";

const getData = async (id: string) => {
  const res = await fetch(
    `http://localhost:1337/api/events/${id}?populate[ressources][populate][0]=media&populate[event_img]=*`,
  );

  if (!res.ok) {
    return {};
  }

  const { data } = await res.json();
  const ressources =
    data?.attributes?.ressources?.data &&
    data.attributes.ressources.data.map((ressource: any) => {
      return {
        ...ressource.attributes,
      };
    });

  return {
    ...data.attributes,
    event_img: data?.attributes?.event_img?.data?.attributes?.url,
    ressources,
  };
};

async function Page({ params }: { params: { id: string } }) {
  const {
    name: title,
    event_img: imgSrc,
    description,
    location,
    event_date: date,
    attendant_limit,
    ressources,
  } = await getData(params.id);

  /*  const [formData, setFormData] = useState({
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
      };*/
  return (
    <main className={"bg-blackCustom text-whiteCustom"}>
      <section
        className={
          "py-12 flex flex-col md:flex-row max-w-screen-lg mx-auto items-center"
        }
      >
        <article className={"p-5 flex flex-col basis-1/2 gap-5"}>
          <h2 className="mb-4 text-3xl leading-none text-brownText">
            {title ?? "Découverte des vins de Bourgogne"}
          </h2>
          <div className={"relative w-full h-[300px]"}>
            <Image
              src={
                imgSrc
                  ? `http://localhost:1337${imgSrc}`
                  : "https://placekitten.com/300/300"
              }
              alt={"description de l'atelier"}
              fill
              className={"object-contain"}
            />
          </div>
          <p>
            {description ??
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique in diam sed imperdiet. Sed ut tempor risus. Mauris arcu quam, rutrum a cursus id, iaculis non nisl. Proin blandit nibh sit amet neque faucibus, eget euismod urna porttitor. Cras molestie quam ut mattis dignissim. Fusce faucibus urna a augue pharetra cursus."}
          </p>
          <ul className={"text-brown"}>
            <li className={"flex gap-2"}>
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
                  fillRule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clipRule="evenodd"
                />
              </svg>
              {location ?? "Sciences-U"}
            </li>
            <li className={"flex gap-2"}>
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
                  fillRule="evenodd"
                  d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                  clipRule="evenodd"
                />
              </svg>
              {date
                ? new Date(date).toLocaleDateString("fr-FR")
                : new Date().toLocaleDateString("fr-FR")}
            </li>
            <li className={"flex gap-2"}>
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
                  fillRule="evenodd"
                  d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                  clipRule="evenodd"
                />
              </svg>
              {`${attendant_limit ?? 3} places disponibles`}
            </li>
            <li className={"flex gap-2"}>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 10h9.231M6 14h9.231M18 5.086A5.95 5.95 0 0 0 14.615 4c-3.738 0-6.769 3.582-6.769 8s3.031 8 6.769 8A5.94 5.94 0 0 0 18 18.916"
                />
              </svg>
              15.00€
            </li>
          </ul>
          {ressources?.map((ressource) => {
            const mediaUrl = ressource?.media?.data?.attributes?.url
              ? `http://localhost:1337${ressource.media.data.attributes.url}`
              : "/";
            return (
              <Link
                href={mediaUrl}
                key={ressource.id}
                target={"_blank"}
                className="w-full bg-brown text-whiteCustom py-3 px-10 hover:bg-brown duration-100 hover:text-whiteCustom flex justify-center capitalize"
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
                      fillRule="evenodd"
                      d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {ressource.name}
              </Link>
            );
          })}
        </article>
        <article className={"flex flex-col basis-1/2 gap-5 px-4"}>
          <h2
            className={
              "md:text-center text-4xl mb-7 relative before:content-[''] before:absolute before:w-32 before:h-1 before:bg-whiteCustom before:-bottom-4"
            }
          >
            Participez à l&apos;atelier
          </h2>
          <RegistrationForm />
        </article>
      </section>
    </main>
  );
}

export default Page;
