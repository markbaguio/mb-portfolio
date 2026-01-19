import {
  AtSign,
  Facebook,
  GithubIcon,
  Linkedin,
  MapPinHouse,
  Phone,
} from "lucide-react";

function App() {
  return (
    <main className="bg-background-graphene-black h-screen text-text-soft-lavender-white/90">
      {/* <div className=""> */}
      <div className="bg-background-graphene-black/1 backdrop-blur-3xl flex flex-row h-16 fixed gap-10 w-full z-20 shadow-xs border-b border-accent-graphite-blue/50 ">
        <div className="bg-background-graphene-black/1 flex-1"></div>
        <ul className="flex flex-row flex-1 items-center justify-start gap-20 ">
          <li className="hover:cursor-pointer hover:text-accent-graphite-blue ease-in-out duration-250">
            About Me
          </li>
          <li className="hover:cursor-pointer hover:text-accent-graphite-blue ease-in-out duration-250">
            Experience
          </li>
          <li className="hover:cursor-pointer hover:text-accent-graphite-blue ease-in-out duration-250">
            Projects
          </li>
        </ul>
      </div>
      {/* </div> */}

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
            <p className="text-[22.5px]">Software Engineer</p>
            <p className="text-sm py-3 font-medium">
              I enjoy turning UI designs into intuitive and functional user
              interfaces using React, TypeScript, Tailwind, ShadCN, and Flutter,
              with additional experience in Delphi and Python.
            </p>

            <p className="text-sm">
              Let’s connect and collaborate on something great
            </p>
            <div className="flex flex-col justify-start items-start w-full px-3 py-1 border-l-2 border-accent-graphite-blue">
              <span className="font-light flex justify-center items-center gap-1 text-sm">
                <AtSign size={12} /> godwinbaguio@gmail.com
              </span>
              <span className="font-light flex justify-center items-center gap-1 text-sm">
                <Phone size={12} /> (+63) 961 112 5983
              </span>
              <span className="font-light flex justify-center items-center gap-1 text-sm">
                <MapPinHouse size={12} /> Bulacan, Philippines
              </span>
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
        <div className="col-span-1 p-10 my-20 overflow-y-auto bg-text-soft-lavender-white/3 border border-secondary-iron-charcoal shadow-sm shadow-secondary-iron-charcoal drop-shadow-2xl rounded-2xl">
          <section id="#about-me" className="flex flex-col gap-5">
            <h2 className="text-2xl w-full border-b-6 border-accent-graphite-blue">
              About Me
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              unde molestias nemo iure ad nulla dolor assumenda fugiat corrupti
              animi laudantium libero officiis natus repudiandae rem hic ducimus
              quisquam nihil debitis vel, a ratione rerum suscipit. Voluptatibus
              eveniet ipsum rerum libero odio nam, architecto optio facere
              ratione, vel illo laudantium similique necessitatibus soluta
              explicabo expedita, ullam vitae sit eaque dolore provident
              adipisci. Sed nostrum nihil fugit recusandae quasi sint molestiae
              perspiciatis est obcaecati consequatur deleniti corrupti quas
              dignissimos, aliquid laboriosam. Repellat quo autem excepturi
              laudantium vitae incidunt et impedit placeat? Earum sequi ea
              quibusdam dignissimos fugit doloribus dicta aliquam aperiam.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
