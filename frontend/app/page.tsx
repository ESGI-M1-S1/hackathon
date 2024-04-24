import { Button, Card } from "flowbite-react";
import Image from "next/image";

export default function Home() {


  return (
    <main>
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32">
          <h1 className="mb-4 text-4xl leading-none text-white md:text-5xl lg:text-6xl">
            Oliwine dégustation
          </h1>
          <Button color={"light"}>Découvrir les ateliers →</Button>
        </div>
      </section>
      <section className="py-12">
        <div className="flex flex-col items-center gap-4 max-w-screen-xl px-4 mx-auto">
          <h2 className="mb-4 text-4xl leading-none text-center">
            Présentation des ateliers
          </h2>
          <p className="max-w-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            scelerisque, tortor eget ornare aliquet, justo ligula ultrices
            turpis, vel cursus nunc eros nec ex. Donec in neque eget nisl
            tincidunt tincidunt.
          </p>
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
          Rétrospective des anciens ateliers
        </h3>
        <article className="flex items-center justify-around max-w-screen-xl px-4 mx-auto">
          <Image
            src={"https://images.unsplash.com/photo-1497215728101-856f4ea42174"}
            alt={"Atelier dégustation"}
            width={300}
            height={200}
            className={"rounded-lg"}
          />
          <p className="font-normal text-gray-700 dark:text-gray-400 px-4 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </article>
        <article className="flex items-center flex-row-reverse justify-around max-w-screen-xl px-4 mx-auto">
          <Image
            src={"https://images.unsplash.com/photo-1497215728101-856f4ea42174"}
            alt={"Atelier dégustation"}
            width={300}
            height={200}
            className={"rounded-lg"}
          />
          <p className="font-normal text-gray-700 dark:text-gray-400 px-4 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
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
            Venez découvrir nos ateliers
          </h3>
          <p className={"text-xl"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
        <Button>Découvrir les ateliers →</Button>
      </section>
    </main>
  );
}
