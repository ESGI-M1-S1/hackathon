"use client";
import { Button, Card } from "flowbite-react";
import Image from "next/image";

export default function detailsResources() {
  return (
    <div>
      <h1>Participer à l'Atelier</h1>
      <Image
        src={
          "https://vignerons-associes.com/wp-content/uploads/2021/07/iStock-1156862506-scaled.jpg"
        }
        alt={"bouteilles de vin"}
        fill
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Button />
    </div>
  );
}
