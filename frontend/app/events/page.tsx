import React from "react";
import axios from "axios";

const strapiAPIUrl = process.env["STRAPI_API_URL"];

const Page = async () => {
  const events = (await axios.get(`${strapiAPIUrl}/events`)).data;
  console.log("=====>", events);

  return (
    <>
      <ul>{JSON.stringify(events)}</ul>
    </>
  );
};

export default Page;
