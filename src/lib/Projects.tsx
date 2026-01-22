import { MoveUpRight } from "lucide-react";
import kafyImg from "../assets/projects/kafy.png";
import webtubeImg from "../assets/projects/webtube.png";

function Projects() {
  return (
    <section>
      <div>
        <h2 className="fle flex-col text-3xl font-semibold w-full border-b-6 border-primary-navy-indigo mb-5">
          Projects
        </h2>
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;

function ProjectCard() {
  return (
    <div
      className="flex flex-row gap-5 bg-primary-navy-indigo/10 p-5 rounded-xl
    "
    >
      <div className="flex flex-1 flex-col gap-3">
        <img
          src={kafyImg}
          alt="Kafy Project"
          className="hover:cursor-pointer rounded-lg"
        />
        <div className="flex flex-row flex-wrap gap-x-1 gap-y-1.5 justify-evenly h-fit">
          <span
            className="bg-accent-graphite-blue/30 font-extralight text-[11px] px-2 py-1.5
         rounded-full hover:cursor-pointer"
          >
            ReactJS
          </span>
          <span
            className="bg-accent-graphite-blue/30 font-extralight text-[11px] px-2 py-1.5
         rounded-full hover:cursor-pointer"
          >
            Typesscript
          </span>
          <span
            className="bg-accent-graphite-blue/30 font-extralight text-[11px] px-2 py-1.5
         rounded-full hover:cursor-pointer"
          >
            TailwindCSS
          </span>
          <span
            className="bg-accent-graphite-blue/30 font-extralight text-[11px] px-2 py-1.5
         rounded-full hover:cursor-pointer"
          >
            shadcn
          </span>
          <span
            className="bg-accent-graphite-blue/30 font-extralight text-[11px] px-2 py-1.5
         rounded-full hover:cursor-pointer"
          >
            Supabase
          </span>
          <span
            className="bg-accent-graphite-blue/30 font-extralight text-[11px] px-2 py-1.5
         rounded-full hover:cursor-pointer"
          >
            PostreSQL
          </span>
          <span
            className="bg-accent-graphite-blue/30 font-extralight text-[11px] px-2 py-1.5
         rounded-full hover:cursor-pointer"
          >
            Node JS
          </span>
          <span
            className="bg-accent-graphite-blue/30 font-extralight text-[11px] px-2 py-1.5
         rounded-full hover:cursor-pointer"
          >
            Express JS
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row justify-between items-center ">
          <h2 className="text-3xl font-semibold">Kafy</h2>
          <a href="">
            <span className="hover:text-accent-graphite-blue">
              <MoveUpRight className="hover:cursor-pointer hover:scale-120 ease-in-out duration-300" />
            </span>
          </a>
        </div>
        <p className="text-sm leading-5 tracking-tight">
          A modern, Starbucks-inspired coffee shop web application built to
          practice full-stack development. It features user authentication, menu
          browsing, and favorites for a personalized experience, with a
          responsive React frontend and a Node.js/Express backend using
          PostgreSQL and Supabase for authentication.
        </p>
      </div>
    </div>
  );
}
