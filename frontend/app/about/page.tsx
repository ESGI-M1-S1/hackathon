"use client";
import Image from "next/image";
import Button from "../components/Button";
import InputField from "../components/Input";

async function getData() {
  const res = await fetch("http://localhost:1337/api/homepage?populate=*");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();

  return {
    ...data.attributes,
    heroImg: { url: data?.attributes?.heroImg?.data?.attributes?.url },
    imgRight: { url: data?.attributes?.imgRight?.data?.attributes?.url },
  };
}

export default async function about() {
  const {
    title,
    subtitle,
    titleRight,
    textRight,
    titleLeft,
    textLeft,
    imgRight,
    heroImg,
  } = await getData();

  return (
    <main
      className={"bg-blackCustom text-whiteCustom flex flex-col items-center"}
    >
      <section
        className={
          "px-2 max-w-screen-lg mx-auto flex flex-col gap-8 mt-8 mb-24"
        }
      >
        <h2
          className={
            "text-4xl mb-4 relative  before:content-[''] before:absolute before:w-32 before:h-1 before:bg-whiteCustom before:-bottom-4"
          }
        >
          Présentation
        </h2>
      </section>
      <article className={"flex justify-center gap-24 align-baseline mb-24"}>
        <div className={"relative w-64 h-64"}>
          <Image
            className="rounded-full p-1 border-2 border-brown"
            fill
            src="/olivier.png"
            // src="https://images.unsplash.com/photo-1623303647440-967d26b95b47?q=80&w=2910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 1"
          />
        </div>

        <section className={"px-2 max-w-screen-lg mx-auto flex flex-col"}>
          <h2
            className={
              "text-4xl mb-8 relative  before:content-[''] before:absolute before:w-32 before:h-1 before:bg-whiteCustom before:-bottom-4"
            }
          >
            Olivier Bonneton
          </h2>
          <p className={"text-brownText max-w-md"}>
            Passionné par tous types de Savoirs : Spatial, Mathématiques,
            Physique, Informatique, Intelligence Artificielle, Oenologie…
            <br />
            Après deux années de recherches scientifiques au tout début de ma
            carrière, je m'investis depuis plus de 25 ans dans l'enseignement
            des disciplines scientifiques auprès du public universitaire et de
            la formation pour adultes.
          </p>
        </section>
      </article>

      <article>
        <section
          className={"px-2 max-w-screen-lg mx-auto flex justify-center mb-24"}
        >
          <div>
            <h2
              className={
                "text-4xl mb-8 relative  before:content-[''] before:absolute before:w-32 before:h-1 before:bg-whiteCustom before:-bottom-4"
              }
            >
              Une Passion
            </h2>
            <p className={"text-brownText max-w-6xl"}>
              Pour moi, la passion du vin est bien plus qu'une simple
              appréciation des arômes et des saveurs. C'est un voyage à travers
              l'histoire et la culture, un respect pour l'art et la science de
              la vinification, et un engagement envers l'excellence. Chaque
              bouteille est un récit de terroirs explorés, de traditions
              préservées et d'innovations audacieuses.
            </p>
          </div>

          <div className={"relative aspect-video sepia w-full"}>
            <div
              className={"hidden md:block h-3/4 w-3/4 top-0 right-0 absolute"}
            >
              <Image
                src={
                  imgRight.url ??
                  "https://vignerons-associes.com/wp-content/uploads/2021/07/iStock-1156862506-scaled.jpg"
                }
                alt={"bouteilles de vin"}
                fill
              />
            </div>
            <div
              className={
                "absolute w-full h-full md:h-3/4 md:w-3/4 md:bottom-0 md:left-0 border-[12px] aspect-video border-black"
              }
            >
              <Image
                src={
                  imgRight.url ??
                  "https://www.bourgogne-tourisme.com/uploads/2020/09/bourgogne-vignobles-parcelle-climats-1049x725.jpg"
                }
                alt={"bouteilles de vin"}
                fill
                className={"object-cover"}
              />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
