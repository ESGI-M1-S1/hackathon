import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "@/app/components/ReactQueryClientProvider";
import { ReactNode } from "react";
import {
  Button,
  Footer,
  FooterBrand,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import Navlink from "@/app/components/Navlink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="fr">
        <body className={inter.className}>
          <Navbar fluid className="bg-black border-b-2 border-brownText">
            <div className={"flex items-center gap-8"}>
              <NavbarBrand as={Link} href="/">
                <div className={"relative mr-3 h-full aspect-square sm:h-9"}>
                  <Image
                    src="/wineLogo.png"
                    alt="Wine logo"
                    fill
                    className=""
                  />
                </div>
                <span className="self-center whitespace-nowrap text-xl text-brown font-semibold dark:text-white">
                  Et Si Le Vin ?
                </span>
              </NavbarBrand>
              <NavbarCollapse className="!text-brown">
                <Navlink href="/">Accueil</Navlink>
                <Navlink href="/about">A propos</Navlink>
                <Navlink href="/workshop">Ateliers</Navlink>
                <Navlink href="/contact">Contact</Navlink>
                <Navlink href="/resources">Ressources</Navlink>
              </NavbarCollapse>
            </div>
            <div className="flex">
              <Button className="bg-brown text-white">
                Participer à un atelier
              </Button>
              <NavbarToggle />
            </div>
          </Navbar>
          <>{children}</>
          <Footer
            container
            className="border-t-2 border-t-brown rounded-none bg-black pt-12"
          >
            <div className="w-3/6 flex flex-col items-center">
              <FooterBrand
                href="/"
                src="/wineLogo.png"
                alt="Wine logo"
                className="flex flex-col "
              />
              <span className="text-white whitespace-nowrap text-2xl font-semibold">
                Et Si Le Vin ?
              </span>
            </div>
            <div className="flex justify-start items-start w-3/6">
              <FooterLinkGroup col className="text-white mr-60">
                <FooterTitle title="Pages" className="text-white" />
                <FooterLink href="/">Accueil</FooterLink>
                <FooterLink href="/about">A propos</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/resources">Ressources</FooterLink>
              </FooterLinkGroup>
              <FooterLinkGroup col className="text-white">
                <FooterTitle title="Mention légale" className="text-white" />
                <FooterLink href="#">Conditions générales</FooterLink>
                <FooterLink href="#">Politique de confidentialité</FooterLink>
                <FooterLink href="#">Paramètres des cookies</FooterLink>
              </FooterLinkGroup>
            </div>
          </Footer>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
