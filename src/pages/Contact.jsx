import React from "react";
const Contact = () => {
  return (
    <>
      <main className="grow">
        <div className=" text-white text-center md:text-left pt-24">
          <h1 className="text-5xl/snug mb-4 text-white drop-shadow-lg font-api-primary font-bold">
            Get in <span className="text-gradient"> touch</span>
          </h1>
          <div className="text-center md:text-justify">
            <p className="leading-6 text-md">
              {" "}
              If you have any questions, suggestions or other requests feel free
              to contact me!
            </p>
            <p className="leading-6 text-md">
              i am always happy to hear from you!
            </p>
          </div>
          <div className="mt-10 mb-5 flex justify-center md:justify-start gap-4">
            <a
              className="w-16 h-16 text-white text-2xl flex items-center justify-center bg-transparent hover:bg-white/15 transition duration-100 ease-in-out border-2 border-white rounded-full"
              href="https://github.com/jaka-mursidm/"
              title="Github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="w-16 h-16 text-white text-2xl flex items-center justify-center bg-transparent hover:bg-white/15 transition duration-100 ease-in-out  border-2 border-white rounded-full"
              href="https://www.linkedin.com/in/jaka-mursidm"
              title="Linkedin"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="w-16 h-16 text-white text-2xl flex items-center justify-center bg-transparent hover:bg-white/15 transition duration-100 ease-in-out  border-2 border-white rounded-full"
              href="mailto:jaka.mursidm@gmail.com"
              title="Email"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
          <p className="text-sm">
            &copy; 2025 Jaka Mursid Muarif - All Rights Reserved.
          </p>
        </div>
      </main>
    </>
  );
};

export default Contact;
