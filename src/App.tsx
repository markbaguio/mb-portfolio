import {
  AtSign,
  Download,
  Facebook,
  GithubIcon,
  Linkedin,
  MapPinHouse,
  Phone,
} from "lucide-react";
import PageHeader from "./lib/PageHeader";
import AboutMe from "./lib/AboutMe";
import Experience from "./lib/Experience";
import Projects from "./lib/Projects";

function App() {
  return (
    <main className="bg-background-graphene-black h-full text-text-soft-lavender-white/90">
      <PageHeader />

      {/** content */}
      <div className="grid grid-cols-2 py-16 px-50 gap-10">
        {/** profile / left column*/}
        <section className="flex col-span-1 justify-center">
          <div
            className="lg:fixed flex pt-30 my-20 px-10 w-1/3 bg-text-soft-lavender-white/3 border border-secondary-iron-charcoal shadow-sm shadow-secondary-iron-charcoal drop-shadow-2xl rounded-2xl flex-col justify-center items-start gap-2
           lg:font-bold tracking-normal"
          >
            <h1 className="text-4xl font-extrabold underline underline-1 decoration-primary-navy-indigo decoration-5">
              Mark Godwin Baguio
            </h1>
            <p className="text-[22.5px] ">Software Engineer</p>
            <p className="text-sm py-3 font-medium">
              I enjoy turning UI designs into intuitive and functional user
              interfaces using React, TypeScript, Tailwind, ShadCN, and Flutter,
              with additional experience in Delphi and Python.
            </p>
            <p className="text-sm">
              Let’s connect and collaborate on something great
            </p>
            <div className="flex flex-col gap-3 justify-start items-start w-full px-3 py-1 border-l-2 border-accent-graphite-blue">
              <span className="font-light flex justify-center items-center gap-1 text-sm">
                <AtSign size={12} /> godwinbaguio@gmail.com
              </span>
              <span className="font-light flex justify-center items-center gap-1 text-sm">
                <Phone size={12} /> (+63) 961 112 5983
              </span>
              <span className="font-light flex justify-center items-center gap-1 text-sm">
                <MapPinHouse size={12} /> Bulacan, Philippines
              </span>
              <button className="bg-primary-navy-indigo rounded-sm p-2 flex gap-1 text-sm hover:cursor-pointer  hover:bg-primary-navy-indigo/50  ease-in-out duration-500 hover:scale-110">
                <Download size={16} /> Resume
              </button>
            </div>
            <div className="w-full flex flex-row gap-5 py-10">
              <a
                className="hover:cursor-pointer hover:text-accent-graphite-blue hover:scale-110 ease-in-out duration-250"
                href="www.youtube.com"
                target="_blank"
              >
                <Linkedin size={30} />
              </a>
              <a
                className="hover:cursor-pointer hover:text-accent-graphite-blue hover:scale-110 ease-in-out duration-250"
                href="youtube.com"
              >
                <GithubIcon size={30} />
              </a>
              <a
                className="hover:cursor-pointer hover:text-accent-graphite-blue hover:scale-110 ease-in-out duration-250"
                href="youtube.com"
              >
                <Facebook size={30} />
              </a>
            </div>
          </div>
        </section>

        {/** right column */}
        <div className="col-span-1 p-10 flex flex-col gap-20 my-20 overflow-y-auto bg-text-soft-lavender-white/3 border border-secondary-iron-charcoal shadow-sm shadow-secondary-iron-charcoal drop-shadow-2xl rounded-2xl">
          <AboutMe />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  );
}

export default App;
