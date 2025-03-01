import React from "react";

const About = () => {
  return (
    <main className="grow">
      <div className="max-w-5xl mx-auto text-left text-white pt-24">
        <h1 className=" text-4xl md:text-5xl/snug mb-4 text-left text-white font-api-primary font-bold">
          <span className="text-gradient">About</span> this Project
        </h1>
        <p className="leading-6 text-justify text-sm md:text-base mb-5">
          This project is a simple overview to display movies and features to
          filter movies. Built with React for the user interface and styled with
          TailwindCSS. This project is an extension of my similar application
          called <span className="underline font-semibold">My Movies</span>. You
          can check it out on my GitHub repository or directly access the link
          here :
        </p>
        <ul>
          <li className="mb-5">
            <a
              href="https://github.com/jaka-mursidm/simple-api-ajax/"
              className="flex items-center w-fit group text-sm md:text-base"
            >
              <i className="fa-brands fa-github fa-2x mr-3"></i>
              <span className="group-hover:underline">Simple API Ajax</span>
            </a>
          </li>
          <li className=" mb-5">
            <a
              href="https://jaka-mursidm.github.io/simple-api-ajax/"
              className="flex items-center w-fit group text-sm md:text-base"
            >
              <i className="fa-solid fa-globe fa-2x mr-3"></i>
              <span className="group-hover:underline">
                https://jaka-mursidm.github.io/simple-api-ajax/
              </span>
            </a>
          </li>
        </ul>
        <p className="leading-6 mt-4 text-sm md:text-base text-justify">
          I am very happy to keep exploring and building modern websites. This
          project has been a great learning experience. Hope this project is
          useful, don't forget to follow my github and check out my other
          projects 😊
        </p>
      </div>
    </main>
  );
};

export default About;
