import { MoveUpRight } from "lucide-react";
import { projects, type ProjectCard } from "./constants";

function Projects() {
  return (
    <section id="Projects">
      <h2 className="fle flex-col text-3xl font-semibold w-full border-b-6 border-primary-navy-indigo mb-5">
        Projects
      </h2>
      <div className="flex flex-col gap-5">
        <ProjectCards projects={projects} />
      </div>
    </section>
  );
}

export default Projects;

type ProjectCardProps = {
  projects: ProjectCard[];
};

function ProjectCards({ projects }: ProjectCardProps) {
  return projects.map((project) => (
    <div
      key={project.id}
      className="flex flex-row gap-5 bg-primary-navy-indigo/10 p-5 rounded-xl
    "
    >
      <div className="flex flex-1 flex-col gap-3">
        <a href={project.href} target="_blank" className="relative group">
          <img
            src={project.projectImgURL}
            alt={project.header}
            className="hover:cursor-pointer rounded-lg"
          />
          <div className="group-hover:bg-secondary-iron-charcoal/50 w-full h-full absolute left-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg transition-all duration-300 ease-in-out">
            <MoveUpRight className="hidden group-hover:flex size-20 group-hover:ease-in-out group-hover:duration-300 absolute left-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out" />
          </div>
        </a>

        <div className="flex flex-row flex-wrap gap-x-1 gap-y-1.5 justify-evenly h-fit">
          {project.techUsed.map((tech, index) => (
            <span
              key={index}
              className="bg-accent-graphite-blue/30 font-extralight text-[11px] px-2 py-1.5
         rounded-full hover:cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row justify-between items-center ">
          <h2 className="text-3xl font-semibold">{project.header}</h2>
          <a href="">
            <span className="hover:text-accent-graphite-blue">
              <MoveUpRight className="hover:cursor-pointer hover:scale-120 ease-in-out duration-300" />
            </span>
          </a>
        </div>
        <p className="text-sm leading-5 tracking-tight">
          {project.description}
        </p>
      </div>
    </div>
  ));
}
