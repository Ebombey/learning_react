import React from "react";

function Footer() {
  const date = new Date();

  return (
    <div className="justify-self-end w-full absolute bottom-2 text-center">
      <p className="text-white">Copyright&copy; {date.getFullYear()} </p>
    </div>
  );
}

export default Footer;
