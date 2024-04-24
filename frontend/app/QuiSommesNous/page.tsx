import React from 'react';
import {Button, Card} from "flowbite-react";
import axios from "axios";


const Banner = () => {
    return (
        <section className="bg-cover bg-no-repeat bg-[url('/QuiSommesNousBandeau.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-12">
                <h1 className="mb-4 text-4xl leading-none text-white md:text-5xl lg:text-6xl">
                    Qui Sommes Nous
                </h1>
            </div>
        </section>
    );
};

const Origine = () => {
    return (
        <section className="py-12">
            <div className="flex flex-col items-center gap-4 max-w-screen-xl px-4 mx-auto">
                <h2 className="mb-4 text-4xl leading-none text-center">
                    Origine de Wine&Co
                </h2>
                <p className="max-w-1xl text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    scelerisque, tortor eget ornare aliquet, justo ligula ultrices
                    turpis, vel cursus nunc eros nec ex. Donec in neque eget nisl
                    tincidunt tincidunt.
                </p>
            </div>
        </section>
    );
};

const Olivier = () => {
    return (
        <section className="">
            <div className="flex flex-col items-center gap-4 max-w-screen-xl px-4 mx-auto">
                <h2 className="mb-4 text-4xl leading-none text-center">
                    Olivier Bonneton
                </h2>
                <img src="olivier.jpg" style={{width : '500px'}} />
                <br/>
                <p className="max-w-1xl text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    scelerisque, tortor eget ornare aliquet, justo ligula ultrices
                    turpis, vel cursus nunc eros nec ex. Donec in neque eget nisl
                    tincidunt tincidunt. Justo ligula ultrices
                    turpis, vel cursus nunc eros nec ex. Donec in neque eget nisl
                    tincidunt tincidunt.
                </p>
            </div>
        </section>
    );
};

const ParcoursPro = () => {
    return (
        <section className="pt-12">
            <div className="flex flex-col items-center gap-4 max-w-screen-xl px-4 mx-auto">
                <h2 className="mb-4 text-2xl leading-none text-center">
                    Parcours Professionnel
                </h2>
                <p className="max-w-1xl text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    scelerisque, tortor eget ornare aliquet, justo ligula ultrices
                    turpis, vel cursus nunc eros nec ex. Donec in neque eget nisl
                    tincidunt tincidunt. Justo ligula ultrices
                    turpis, vel cursus nunc eros nec ex. Donec in neque eget nisl
                    tincidunt tincidunt.
                </p>
            </div>
        </section>
    );
};

const Etudes = () => {
    return (
        <section className="py-12">
            <div className="flex flex-col items-center gap-4 max-w-screen-xl px-4 mx-auto">
                <h2 className="mb-4 text-2xl leading-none text-center">
                    Etudes et Certifications
                </h2>
                <p className="max-w-1xl text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    scelerisque, tortor eget ornare aliquet, justo ligula ultrices
                    turpis, vel cursus nunc eros nec ex. Donec in neque eget nisl
                    tincidunt tincidunt. Justo ligula ultrices
                    turpis, vel cursus nunc eros nec ex. Donec in neque eget nisl
                    tincidunt tincidunt.
                </p>
            </div>
        </section>
    );
};

const Page = () => {
    return (
        <main>
            <Banner />
            <Origine />
            <Olivier />
            <ParcoursPro />
            <Etudes />
        </main>
    );
};

export default Page;
