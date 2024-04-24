import { Button, Card } from "flowbite-react";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:1337/api/homepage?populate=*");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();

  return {
    ...data.attributes,
    heroImg: { ...data.attributes.heroImg.data.attributes },
  };
}

export default async function Home() {
  const {
    heroImg,
    title,
    buttonLink,
    subtitle,
    subtext,
    contentTitle,
    imgLeftSrc,
    textRight,
    imgRightSrc,
    textLeft,
    bannerTitle,
    bannerButtonLink,
    bannerSubtitle,
  } = await getData();
  console.log();

  return (
    <main>
      <section
        className={`bg-center bg-no-repeat bg-gray-700 bg-blend-multiply`}
        style={{
          backgroundImage: `url(http://localhost:1337${heroImg.url})`,
        }}
      >
        <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32">
          <h1 className="mb-4 text-4xl leading-none text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <Button color={"light"} href={buttonLink}>
            Découvrir les ateliers →
          </Button>
        </div>
      </section>
      <section className="py-12">
        <div className="flex flex-col items-center gap-4 max-w-screen-xl px-4 mx-auto">
          <h2 className="mb-4 text-4xl leading-none text-center">{subtitle}</h2>
          <p className="max-w-2xl text-center">{subtext}</p>
        </div>
      </section>
      <section className="py-4 my-8 flex justify-between max-w-screen-lg mx-auto gap-6">
        {[0, 0, 0].map((_, index) => (
          <Card
            key={index}
            imgSrc={
              "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="max-w-sm"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Atelier dégustation
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
        ))}
      </section>
      <section className={"flex flex-col gap-5 mx-auto max-w-screen-lg"}>
        <h3 className={"mb-4 text-3xl leading-none text-center"}>
          {contentTitle}
        </h3>
        <article className="flex items-center justify-around max-w-screen-xl px-4 mx-auto">
          <Image
            src={imgLeftSrc}
            alt={"Atelier dégustation"}
            width={300}
            height={200}
            className={"rounded-lg"}
          />
          <p className="font-normal text-gray-700 dark:text-gray-400 px-4 ">
            {textRight}
          </p>
        </article>
        <article className="flex items-center flex-row-reverse justify-around max-w-screen-xl px-4 mx-auto">
          <Image
            src={imgRightSrc}
            alt={"Atelier dégustation"}
            width={300}
            height={200}
            className={"rounded-lg"}
          />
          <p className="font-normal text-gray-700 dark:text-gray-400 px-4 ">
            {textLeft}
          </p>
        </article>
      </section>
      <section
        className={
          "flex flex-col justify-between gap-8 items-center bg-pink-950 text-white my-8 py-24"
        }
      >
        <div className={"max-w-screen-lg flex flex-col gap-3"}>
          <h3 className={"mb-4 text-3xl font-bold leading-none text-center"}>
            {bannerTitle}
          </h3>
          <p className={"text-xl"}>{bannerSubtitle}</p>
        </div>
        <Button href={bannerButtonLink}>Découvrir les ateliers →</Button>
      </section>
    </main>
  );
}
