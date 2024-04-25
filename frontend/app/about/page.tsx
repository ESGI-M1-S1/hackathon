"use client";
import Image from "next/image";

export default function about() {
  return (
    <div className="bg-black text-brown">
      <Image
        className="shadow rounded-full align-middle border-spacing-2.5 border-2 border-brown"
        width={150}
        height={150}
        src="https://images.unsplash.com/photo-1623303647440-967d26b95b47?q=80&w=2910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>
    </div>
  );
}
