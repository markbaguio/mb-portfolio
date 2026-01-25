import reactlogo from "../assets/logos/react-javascript-js-framework-facebook-svgrepo-com.svg";
import flutterlogo from "../assets/logos/flutter-svgrepo-com.svg";
import tailwindcsslogo from "../assets/logos/tailwindcss-icon-svgrepo-com.svg";
import bootstraplogo from "../assets/logos/bootstrap-svgrepo-com.svg";
import shadcnlogo from "../assets/logos/shadcn-logo.png";
import materialuilogo from "../assets/logos/material-ui-svgrepo-com.svg";
import expressjslogo from "../assets/logos/express-js-icon-png-transparent-png.png";
import nodejslogo from "../assets/logos/nodejs-svgrepo-com.svg";
import sqlalchemylogo from "../assets/logos/SQLAlchemy.svg.png";
import supabaselogo from "../assets/logos/supabase-logo.png";
import flasklogo from "../assets/logos/flask-svgrepo-com.svg";
import mysqllogo from "../assets/logos/mysql-logo-svgrepo-com.svg";
import postgresql from "../assets/logos/postgresql-svgrepo-com.svg";
import mongodblogo from "../assets/logos/mongodb-svgrepo-com.svg";
import { Element } from "react-scroll";

function AboutMe() {
  return (
    <Element name="about-me-section">
      <section
        id="about-me"
        className="flex flex-col gap-10 my-10 scroll-mt-25
    "
      >
        <div>
          <h2 className="text-3xl font-semibold w-full border-b-6 border-primary-navy-indigo mb-5">
            About Me
          </h2>
          <p className="">
            I'm a detail-oriented developer with{" "}
            <span className="font-extrabold">more than 1 year</span> of
            experience in{" "}
            <span className="font-extrabold">
              modernizing a large enterprise system using Flutter{" "}
            </span>{" "}
            and working with a team that solves our client's business needs.
            I've{" "}
            <span className="font-extrabold">handled multiple projects</span>{" "}
            about the enterprise system written in{" "}
            <span className="font-extrabold">Delphi</span>, which are requested
            by our <span className="font-extrabold">clients</span> and{" "}
            <span className="font-extrabold">internal stakeholders.</span> While
            my first job wasn't exactly about web development, it gave me a
            solid foundation in software engineering.
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <h3 className="text-2xl font-extralight underline decoration-accent-graphite-blue">
            Technologies I've used
          </h3>
          <TechUsedBentoGrid />
        </div>
      </section>
    </Element>
  );
}

export default AboutMe;

function TechUsedBentoGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-2">
      <div className="col-span-2 row-span-2 text-lg border border-text-soft-lavender-white/10 w-full bg-accent-graphite-blue rounded-lg flex flex-col justify-center items-center font-bold uppercase decoration-text-soft-lavender-white hover:scale-102 ease-in-out duration-300">
        What's in my toolbox?
      </div>
      <div className="col-span-1 row-span-5 border border-text-soft-lavender-white/10 flex flex-col items-start justify-center w-full bg-accent-graphite-blue/30 rounded-sm p-5 hover:scale-102 ease-in-out duration-300">
        <span className="text-lg font-semibold ">Frontend</span>
        <ul className="border-l-2 p-2 flex flex-col gap-2 border-accent-graphite-blue font-light">
          <li className="flex flex-row gap-1">
            <img src={reactlogo} alt="React Logo" className="size-5" />
            React
          </li>
          <li className="flex flex-row gap-1">
            <img src={flutterlogo} alt="Flutter Logo" className="size-5" />
            Flutter
          </li>
          <li className="flex flex-row gap-1">
            <img
              src={tailwindcsslogo}
              alt="TailwindCSS Logo"
              className="size-5"
            />
            TailwindCSS
          </li>
          <li className="flex flex-row gap-1">
            <img src={bootstraplogo} alt="Bootstrap Logo" className="size-5" />
            Bootstrap
          </li>
          <li className="flex flex-row gap-1">
            <img src={shadcnlogo} alt="Shadcn Logo" className="size-5" />
            Shadcn
          </li>
          <li className="flex flex-row gap-1">
            <img
              src={materialuilogo}
              alt="MaterialUI Logo"
              className="size-5"
            />
            MaterialUI
          </li>
        </ul>
      </div>
      <div className="col-span-1 row-span-3 border border-text-soft-lavender-white/10 w-full p-5 flex flex-col items-start justify-center bg-secondary-iron-charcoal rounded-sm hover:scale-102 ease-in-out duration-300">
        <span className="text-lg font-semibold">Backend</span>
        <ul className="border-l-2 p-2 flex flex-col gap-2 border-accent-graphite-blue font-light">
          <li className="flex flex-row gap-1">
            <img src={nodejslogo} alt="Node.js Logo" className="size-5" />
            Node.js
          </li>
          <li className="flex flex-row gap-1">
            <img src={expressjslogo} alt="Express.js Logo" className="size-5" />
            Express.js
          </li>
          <li className="flex flex-row gap-1">
            <img src={flasklogo} alt="Flask Logo" className="size-5" />
            Flask
          </li>
          <li className="flex flex-row gap-1">
            <img
              src={sqlalchemylogo}
              alt="SQLAlchemy Logo"
              className="size-5"
            />
            SQLAlchemy
          </li>
          <li className="flex flex-row gap-1">
            <img src={supabaselogo} alt="Supabase Logo" className="size-5" />
            Supabase
          </li>
        </ul>
      </div>
      <div className="col-span-1 row-span-3 w-full border border-text-soft-lavender-white/10 flex flex-col items-start justify-center bg-primary-navy-indigo/40 p-5 rounded-sm hover:scale-102 ease-in-out duration-300">
        <span className="text-lg font-semibold">Database</span>
        <ul className="border-l-2 p-2 flex flex-col gap-2 border-accent-graphite-blue font-light">
          <li className="flex flex-row gap-1">
            <img src={mysqllogo} alt="MySQL Logo" className="size-5" />
            MySQL
          </li>
          <li className="flex flex-row gap-1">
            <img src={postgresql} alt="PostgreSQL Logo" className="size-5" />
            PostgreSQL
          </li>
          <li className="flex flex-row gap-1">
            <img src={mongodblogo} alt="MongoDB Logo" className="size-5" />
            MongoDB
          </li>
        </ul>
      </div>
    </div>
  );
}
