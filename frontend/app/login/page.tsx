"use client";
import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import cookie from "@boiseitguru/cookie-cutter";
import { useRouter } from "next/navigation";

const Page = ({
  searchParams,
}: {
  searchParams: Partial<{ next: string }>;
}) => {
  const router = useRouter();
  const handleLogin = async (login: string, password: string) => {
    if (searchParams.next) {
      router.replace(searchParams.next);
    }
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: login,
        password: password,
      })
      .then((res) => {
        cookie.set("token", res.data.jwt);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    handleLogin(
      formData.get("email") as string,
      formData.get("password") as string,
    );
    router.push("http://localhost:1337/admin");
  };

  return (
    <Card className="max-w-sm align-middle my-44 mx-auto">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            name="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" name="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default Page;
