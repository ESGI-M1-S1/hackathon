"use client";
import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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
    const { data } = await axios.post("http://localhost:1337/api/auth/local", {
      identifier: login,
      password: password,
    });
    cookie.set("token", data.jwt);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log(formData.get("password"));
    handleLogin(
      formData.get("email") as string,
      formData.get("password") as string
    );
  };

  return (
    <Card className="max-w-sm">
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
