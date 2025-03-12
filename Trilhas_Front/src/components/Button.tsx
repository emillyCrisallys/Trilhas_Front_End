import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const handleClick = () => {
    window.location.href =
      "https://open.spotify.com/intl-pt/track/5eM6Rrk8rwLpUhrh7Kk5R1?si=b1ff0bd480d64f94";
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
