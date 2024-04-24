"use client";
import React, { PropsWithChildren } from "react";
import { NavbarLink } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  const pathname = usePathname();
  return (
    <NavbarLink as={Link} href={href} active={pathname === href}>
      {children}
    </NavbarLink>
  );
};

export default Navlink;
