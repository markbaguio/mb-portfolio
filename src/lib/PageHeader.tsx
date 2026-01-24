import { useState } from "react";

function PageHeader() {
  const [activeSection, setActiveSection] = useState<
    "about-me" | "experience" | "projects" | null
  >(null);

  return (
    <div className="bg-background-graphene-black/1 backdrop-blur-3xl flex flex-row h-16 fixed gap-10 w-full z-20 shadow-xs border-b border-accent-graphite-blue/50 ">
      <div className="bg-background-graphene-black/1 flex-1"></div>
      <ul className="flex flex-row flex-1 items-center justify-start gap-20 ">
        <a
          href="#about-me"
          onClick={() => {
            setActiveSection("about-me");
          }}
          className="relative"
        >
          <li
            className={`${activeSection === "about-me" ? "before:content-[''] before:absolute before:-bottom-0.5 before:w-full before:h-1 before:bg-accent-graphite-blue" : ""} hover:cursor-pointer hover:text-accent-graphite-blue ease-in-out duration-250`}
          >
            About Me
          </li>
        </a>
        <a
          href="#experience"
          onClick={() => {
            setActiveSection("experience");
          }}
          className="relative"
        >
          <li
            className={`${activeSection === "experience" ? "before:content-[''] before:absolute before:-bottom-0.5 before:w-full before:h-1 before:bg-accent-graphite-blue" : ""} hover:cursor-pointer hover:text-accent-graphite-blue ease-in-out duration-250`}
          >
            Experience
          </li>
        </a>
        <a
          href="#projects"
          onClick={() => {
            setActiveSection("projects");
          }}
          className="relative"
        >
          <li
            className={`${activeSection === "projects" ? "before:content-[''] before:absolute before:-bottom-0.5 before:w-full before:h-1 before:bg-accent-graphite-blue" : ""} hover:cursor-pointer hover:text-accent-graphite-blue ease-in-out duration-250`}
          >
            Projects
          </li>
        </a>
      </ul>
      {/* <div className="bg-background-graphene-black/1 flex-1">
        <button className={active}>About Me</button>
        <button>Experience</button>
        <button>Project</button>
      </div> */}
    </div>
  );
}

export default PageHeader;
