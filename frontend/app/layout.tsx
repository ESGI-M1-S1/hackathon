import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "@/app/components/ReactQueryClientProvider";
import { ReactNode } from "react";
import {
  Button,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
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
          <Navbar fluid rounded>
            <div className={"flex items-center gap-8"}>
              <NavbarBrand as={Link} href="https://flowbite-react.com">
                <div className={"relative mr-3 h-full aspect-square sm:h-9"}>
                  <Image
                    src="https://flowbite.s3.amazonaws.com/brand/logo-light/mark/flowbite-logo.svg"
                    alt="Flowbite React Logo"
                    fill
                  />
                </div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Wine&Co
                </span>
              </NavbarBrand>
              <NavbarCollapse>
                <Navlink href="/">Accueil</Navlink>
                <Navlink href="/about">A propos</Navlink>
                <Navlink href="/contact">Contact</Navlink>
                <Navlink href="/resources">Ressources</Navlink>
              </NavbarCollapse>
            </div>
            <div className="flex">
              <Button className={"hidden md:block"}>Get started</Button>
              <NavbarToggle />
            </div>
          </Navbar>
          <>{children}</>
          <Footer container>
            <div className="w-full">
              <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                  <FooterBrand
                    href="https://flowbite.com"
                    src="https://flowbite.com/docs/images/logo.svg"
                    alt="Flowbite Logo"
                    name="Flowbite"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                    <FooterTitle title="about" />
                    <FooterLinkGroup col>
                      <FooterLink href="#">Flowbite</FooterLink>
                      <FooterLink href="#">Tailwind CSS</FooterLink>
                    </FooterLinkGroup>
                  </div>
                  <div>
                    <FooterTitle title="Follow us" />
                    <FooterLinkGroup col>
                      <FooterLink href="#">Github</FooterLink>
                      <FooterLink href="#">Discord</FooterLink>
                    </FooterLinkGroup>
                  </div>
                  <div>
                    <FooterTitle title="Legal" />
                    <FooterLinkGroup col>
                      <FooterLink href="#">Privacy Policy</FooterLink>
                      <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                    </FooterLinkGroup>
                  </div>
                </div>
              </div>
              <FooterDivider />
              <div className="w-full sm:flex sm:items-center sm:justify-between">
                <FooterCopyright href="#" by="Flowbite™" year={2022} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <FooterIcon href="#" icon={BsFacebook} />
                  <FooterIcon href="#" icon={BsInstagram} />
                  <FooterIcon href="#" icon={BsTwitter} />
                  <FooterIcon href="#" icon={BsGithub} />
                  <FooterIcon href="#" icon={BsDribbble} />
                </div>
              </div>
            </div>
          </Footer>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
