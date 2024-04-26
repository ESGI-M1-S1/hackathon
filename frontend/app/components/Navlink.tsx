"use client";
import React, { PropsWithChildren } from "react";
import { NavbarLink } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  const pathname = usePathname();
  return (
    <NavbarLink
      className={`text-brown hover:text-whiteCustom relative ${pathname === href ? "text-brownText before:absolute before:inset-x-0 before:-bottom-0.5 before:h-0.5 before:bg-brownText" : ""}`}
      as={Link}
      href={href}
    >
      {children}
    </NavbarLink>
  );
};

export default Navlink;
