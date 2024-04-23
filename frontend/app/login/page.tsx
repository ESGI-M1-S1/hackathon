"use client";
import React from "react";
import { Button } from "flowbite-react";
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
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["login"],
    enabled: false,
    queryFn: async () => {
      const { data } = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: "pouet",
          password: "pouetpouet",
        },
      );

      cookie.set("token", data.jwt);

      return data;
    },
  });

  const handleLogin = async () => {
    await refetch();
    if (searchParams.next) {
      router.replace(searchParams.next);
    }
  };

  return (
    <>
      <Button gradientDuoTone="purpleToBlue" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};

export default Page;