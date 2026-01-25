import { Element } from "react-scroll";

function Experience() {
  return (
    <Element name="experience-section">
      <section id="experience" className="flex flex-col gap-10">
        <div>
          <h2 className="text-3xl font-semibold w-full border-b-6 border-primary-navy-indigo mb-5">
            Experience
          </h2>
          <div className="flex flex-col gap-5 border-l-2 border-accent-graphite-blue px-3">
            <div>
              <h4 className="text-lg font-semibold pb-1">
                Associate Software Engineer
              </h4>
              <p className="text-sm">Amici Mercantile Inc.</p>
              <p className="text-sm">Quezon City, Metro Manila</p>
              <p className="text-sm font-extralight pb-5">2023 - 2024</p>
              <ul className="list-disc pl-10 text-sm leading-7">
                <li>
                  Contributed to the redevelopment of a legacy POS/enterprise
                  system written in Delphi, transitioning it to a modern,
                  cross-platform architecture using Flutter. Worked on both
                  front end and back end.
                </li>
                <li>
                  Implemented new features requested by external clients and
                  internal stakeholders, improving system functionality and
                  meeting diverse user needs.
                </li>
                <li>
                  Provided technical support, addressing and resolving bugs
                  reported through a ticketing system, ensuring seamless client
                  operations and satisfaction.
                </li>
                <li>
                  Developed the front end of various Flutter applications,
                  including:
                  <ul className="list-disc pl-10">
                    <li>A Bundy clock app originally built in java.</li>
                    <li>
                      An in-house application that allows agents to input pool
                      dimensions and automatically generates product
                      recommendations (e.g., pumps, filters) based on calculated
                      specifications, streamlining the sales and quoting
                      process.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold pb-1">
                Clound Engineer Intern
              </h4>
              <p className="text-sm">
                Institute of Computer Engineers of the Philippines
              </p>
              <p className="text-sm">Singapore</p>
              <p className="text-sm font-extralight pb-5">2021</p>
              <ul className="list-disc pl-10 text-sm leading-7">
                <li>
                  Created and deployed a WordPress website using a LAMP stack
                  (Linux, Apache, MySQL, PHP) on an AWS EC2 instance.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold w-full border-b-6 border-primary-navy-indigo mb-5">
            Education
          </h2>
          <div className=" border-l-2 border-accent-graphite-blue px-3">
            <h4 className="text-lg font-semibold pb-1">
              Bulacan State University
            </h4>
            <p className="text-sm">
              Bachelor of Science in Computer Engineering
            </p>
            <p className="text-sm">Malolos, Bulacan</p>
            <p className="text-sm font-extralight pb-5">2018 - 2022</p>
            <ul className="list-disc pl-10 text-sm leading-7">
              <li>
                Website Development 2021 – Developed the front-end of a website
                of a small business (DAMBO Milk tea.)
              </li>
              <li>
                Artificial Intelligence 2021 – Completed and Passed Huawei’s
                HCIA AI V3.0 Course (Cerifitcate of Completion.)
              </li>
              <li>
                Mobile Application Development 2021 – Developed an online
                vegetable store called Vegemarket using Flutter and Firebase.
              </li>
              <li>
                Cloud Computing 2022 – Certified Huawei HCIA V4.0 Cloud
                Computing Associate (Certificate No. 010100802808835171667989)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Experience;
