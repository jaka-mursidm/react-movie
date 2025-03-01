import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="text-white py-5 font-api-primary gap-y-3 md:gap-0 grid  grid-cols-1 justify-items-center md:flex md:justify-between">
        <div>
          <h5 className="font-bold">
            Movie<span className="text-gradient mr-1">Search</span>
            <sub>By Jaka</sub>
          </h5>
        </div>
        <div className="hidden md:block"></div>
        <p className="text-xs">
          Made with ❤️ by{" "}
          <a href="https://github.com/jaka-mursidm/" className="underline">
            Jaka Mursid Muarif
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
