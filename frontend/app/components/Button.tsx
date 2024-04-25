import React from "react";

type ButtonProps = {
  text: string;
  link: string;
};

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <div>
      <a href={link}>
        <button
          type="button"
          className="bg-brown text-white py-3 px-10 m-2 hover:bg-orange-300 duration-100 hover:text-white"
        >
          {text}
        </button>
      </a>
    </div>
  );
};

export default Button;
