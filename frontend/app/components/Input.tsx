"use client";
import React from "react";

const InputField = ({
  name,
  placeholder,
  ...rest
}: {
  name: string;
  placeholder?: string;
}) => (
  <input
    name={name}
    placeholder={placeholder}
    className="border-brown border bg-blackCustom text-whiteCustom h-10 mb-2 pl-4 pr-4 placeholder-gray-400 w-full"
    {...rest}
  />
);

export default InputField;
