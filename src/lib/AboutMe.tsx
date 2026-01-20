function AboutMe() {
  return (
    <section id="#about-me" className="flex flex-col gap-5">
      <h2 className="text-3xl font-light w-full border-b-6 border-primary-navy-indigo">
        About Me
      </h2>
      <p className="text-justify">
        I'm a detail-oriented developer with{" "}
        <span className="font-extrabold">more than 1 year</span> of experience
        in{" "}
        <span className="font-extrabold">
          modernizing a large enterprise system using Flutter{" "}
        </span>{" "}
        and working with a team that solves our client's business needs. I've{" "}
        <span className="font-extrabold">handled multiple projects</span> about
        the enterprise system written in{" "}
        <span className="font-extrabold">Delphi</span>, which are requested by
        our <span className="font-extrabold">clients</span> and{" "}
        <span className="font-extrabold">internal stakeholders.</span> While my
        first job wasn't exactly about web development, it gave me a solid
        foundation in software engineering.
      </p>
      <div className="flex flex-col gap-3 justify-center">
        <h3 className="text-2xl font-extralight underline decoration-accent-graphite-blue">
          Technologies I've used
        </h3>
        <div className="flex flex-row flex-wrap">
          <div>
            <span>Frontend</span>
            <ul>
              <li>React</li>
              <li>Flutter</li>
            </ul>
          </div>
          <div>
            <span>Backend</span>
          </div>
          <div>
            <span>Frontend</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
