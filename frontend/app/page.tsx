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
  };
}

export default async function Home() {
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
    <main className={"bg-black text-white"}>
      <section
        className={`bg-center bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply sepia`}
        style={{
          backgroundImage: heroImg?.url
            ? `url(http://localhost:1337${heroImg.url})`
            : `url(https://winegreenturtle.com/web/product/extra/small/202103/77006701313a86c2e44132440823c088.jpg)`,
        }}
      >
        <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32">
          <h1 className="mb-4 text-4xl leading-none  md:text-5xl lg:text-6xl">
            {title ?? "Et si le vin"}
          </h1>
          <p className={" text-xl"}>
            {subtitle && "Entre tradition et passion : l'art de la dégustation"}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-screen-lg flex items-center min-h-[250px] pt-32 pb-12 -mt-52 gap-12">
        <div className={"relative flex-1 h-[520px]"}>
          <Image
            src={
              imgRight.url ??
              "https://www.seekpng.com/png/full/1011-10116121_try-glass-bottle.png"
            }
            alt={"bouteilles de vin"}
            fill
            className={"object-contain"}
          />
        </div>
        <div className={"flex-1 flex flex-col gap-8"}>
          <h2
            className={
              "text-4xl mb-4 relative  before:content-[''] before:absolute before:w-32 before:h-1 before:bg-white before:-bottom-4"
            }
          >
            {titleRight ?? "Nos Ateliers"}
          </h2>
          <p className="">
            {textRight ??
              "Nos ateliers vous plongent dans l'univers complexe et raffiné de  l’œnologie. À travers une expérience sensorielle unique, vous explorerez  les nuances et les arômes cachés derrière chaque cépage. Nos guides  passionnés vous accompagneront dans la découverte des techniques de  dégustation, vous permettant de percevoir le vin bien au-delà du goût :  une aventure qui éveille les sens, enrichit l’esprit et célèbre  l'harmonie des terroirs."}
          </p>
        </div>
      </section>
      <section className={"max-w-screen-lg mx-auto flex flex-col gap-8"}>
        <h2
          className={
            "text-4xl mb-4 relative  before:content-[''] before:absolute before:w-32 before:h-1 before:bg-white before:-bottom-4"
          }
        >
          Les derniers événements
        </h2>
        <ul className={"flex gap-6"}>
          {[0, 0, 0].map((_, index) => (
            <li key={index}>
              <Card
                imgSrc={
                  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                className="max-w-sm"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:">
                  Atelier dégustation
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
            </li>
          ))}
        </ul>
      </section>
      <section
        className={"mx-auto max-w-screen-lg flex gap-12 py-16 items-center"}
      >
        <div className={"flex-1 flex flex-col gap-8 pr-5"}>
          <h2
            className={
              "text-4xl mb-4 relative before:content-[''] before:absolute before:w-32 before:h-1 before:bg-white before:-bottom-4"
            }
          >
            {titleLeft ?? "Des découvertes"}
          </h2>
          <p>
            {textLeft ??
              "Je vous invite à une odyssée des sens où chaque goutte de vin raconte le  récit d'un terroir, d'un vigneron, d'une tradition. Ces ateliers de  dégustation sont conçus pour éduquer le palais et illuminer l'esprit,  révélant les secrets enfouis dans les vignobles les plus renommés et les pépites méconnues."}
          </p>
        </div>
        <div className={"relative flex-1 aspect-video transform sepia"}>
          <div className={"absolute top-0 right-0 left-1/4 bottom-1/4 "}>
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
              "absolute bottom-0 left-0 right-1/4 top-1/4 border-[12px] border-black"
            }
          >
            <Image
              src={
                imgRight.url ??
                "https://www.bourgogne-tourisme.com/uploads/2020/09/bourgogne-vignobles-parcelle-climats-1049x725.jpg"
              }
              alt={"bouteilles de vin"}
              fill
            />
          </div>
        </div>
      </section>
      <section className={"max-w-screen-lg mx-auto pb-16"}>
        <div className={"w-[500px] mx-auto flex flex-col gap-4"}>
          <h2
            className={
              "text-center text-4xl mb-7 relative before:content-[''] before:absolute before:w-32 before:h-1 before:bg-white before:-bottom-4"
            }
          >
            Restez informés
          </h2>
          <p className={"mx-auto underline"}>
            Abonnez-vous à notre newsletter pour ne rien manquer de
            l&apos;actualité vinicole et des prochains ateliers !
          </p>
          <form className={"flex flex-col gap-4"}>
            <input
              type="email"
              placeholder="Votre adresse email"
              className={"p-2 flex-1 w-full bg-black text-white"}
            />
            <Button>Je m&apos;abonne</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
