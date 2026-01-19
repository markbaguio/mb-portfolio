import {
  AtSign,
  Facebook,
  Github,
  GithubIcon,
  Linkedin,
  Phone,
} from "lucide-react";

function App() {
  return (
    <main className="bg-background-graphene-black text-text-soft-lavender-white/90">
      {/* <div className=""> */}
      <div className="bg-secondary-iron-charcoal/10 flex flex-row h-16 fixed gap-10 w-full z-20 opacity-95 shadow-lg">
        <div className="bg-background-graphene-black/10 flex-1"></div>
        <ul className="flex flex-row flex-1 items-center justify-start gap-20">
          <li>About Me</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </div>
      {/* </div> */}

      {/** content */}
      <div className="grid grid-cols-2 py-16 px-20 gap-10">
        {/** profile / left column*/}
        <section className="flex col-span-1 justify-center">
          <div
            className="lg:fixed flex mx-20 pt-30 my-20 px-10 w-1/3 bg-text-soft-lavender-white/3 border border-secondary-iron-charcoal shadow-sm shadow-secondary-iron-charcoal drop-shadow-2xl rounded-2xl flex-col justify-center items-start gap-2
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
            <span className="font-light flex justify-center items-center gap-1 text-sm">
              <AtSign size={12} /> godwinbaguio@gmail.com
            </span>
            <span className="font-light flex justify-center items-center gap-1 text-sm">
              <Phone size={12} /> (+63) 961 112 5983
            </span>
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
        <div className="col-span-1 bg-secondary-iron-charcoal/10 my-20  overflow-y-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          consequuntur nam optio deleniti, aut, eveniet dignissimos commodi
          fugit error quasi molestias! Accusamus neque earum vero nesciunt saepe
          maxime in, repellendus inventore, distinctio quas accusantium
          veritatis, exercitationem fuga eveniet blanditiis ipsum laborum
          repellat odit ipsam reiciendis! Nobis at voluptas ipsa inventore nulla
          veritatis commodi quo aut non distinctio. Veritatis autem voluptas,
          natus illum magni voluptatum architecto facere iure ab tempora
          repellat esse libero. Debitis voluptas sit nihil odio sequi similique
          natus, culpa dolorum! Voluptatum voluptates nostrum, voluptatem
          possimus dolorum dolores eum amet inventore facilis non adipisci quae
          libero laboriosam, at, eos velit? Atque quis, ipsa laudantium officia
          aliquam soluta ratione ullam voluptatibus fuga perferendis voluptates
          temporibus. Asperiores placeat, beatae veniam voluptatibus, aliquid
          tenetur quas in minus consequuntur quae quasi pariatur illum expedita
          rerum mollitia, possimus libero nobis! Repudiandae deleniti,
          aspernatur molestias tempora fuga, qui minima est error perspiciatis
          odit in quidem inventore quia sit eligendi incidunt voluptatum
          officiis, suscipit itaque nostrum. Perspiciatis nostrum non iusto nisi
          expedita rem doloribus sequi eum, hic aliquam assumenda fugiat facere
          placeat repudiandae voluptate. Exercitationem culpa fugiat distinctio
          officia iusto dolorem rem eos error doloribus voluptatum cupiditate
          ullam sunt inventore vel libero a dignissimos ea, eum tenetur unde
          quaerat laboriosam, eius saepe. Velit nostrum corrupti repudiandae
          praesentium voluptatum commodi nisi, sed voluptate, quo magni rerum
          dicta temporibus possimus repellendus, perspiciatis a sunt nobis
          officiis quam debitis minus delectus. Reprehenderit fugiat, quis,
          dignissimos aut officiis temporibus eaque fugit dolore impedit itaque
          iste culpa veniam aliquam alias non ad deleniti explicabo molestiae
          esse! Molestiae expedita quod quaerat dolorem obcaecati error totam
          esse eos, saepe libero dolor. Eaque ut odio inventore ea, tempora odit
          quisquam, debitis eos illo neque placeat voluptatibus provident est
          impedit autem dolorem, nisi doloribus harum. Ipsam alias molestias
          delectus ad dolorem ab! Odio nostrum fugit consequuntur deleniti
          itaque quis exercitationem, reprehenderit nulla necessitatibus ex
          repellat iusto vitae at excepturi qui ab reiciendis! Odit corrupti
          possimus officia aspernatur iste quas modi architecto ullam quasi
          tempora at quod itaque mollitia eius incidunt impedit et id cum ipsam
          fuga veniam, pariatur maiores repellat. Neque nobis ipsam dolorem
          alias id consectetur nulla voluptatibus consequuntur! Labore,
          doloremque! Et ea maxime ratione voluptatem, adipisci, earum quisquam
          iste, natus minima fugiat laudantium laboriosam? Molestias sed, aut,
          quo cumque quisquam, debitis harum minus nobis magnam aliquam ab
          quaerat. Similique exercitationem hic necessitatibus veniam natus vero
          neque alias, doloremque, asperiores architecto corrupti tempora
          voluptatum sed aut magni. Iste minus consequuntur ex a dolorum
          obcaecati, quod animi? Quaerat pariatur deleniti nemo quas magnam
          tempore, numquam aspernatur, voluptatibus quidem laborum molestiae
          enim nesciunt debitis beatae a doloremque sit, cupiditate cum quis.
          Consequatur ducimus fugit molestiae totam laudantium ea rem sit illum,
          perspiciatis cupiditate, blanditiis, alias amet aperiam possimus
          voluptatum quos ipsum omnis accusantium deleniti. Optio quas, eum
          voluptatibus doloremque, similique cum in odit enim nisi eaque culpa
          repudiandae nihil ea quo corporis omnis exercitationem modi, unde
          temporibus expedita tempore maiores mollitia molestiae necessitatibus.
          Ratione veniam dolorem impedit aut earum nesciunt facere architecto
          consectetur et vero accusamus accusantium commodi unde neque magnam
          nostrum ipsa, reiciendis quasi! Sequi, dolorem quia voluptatem minus
          dolorum eligendi perspiciatis unde facilis odit aut molestiae
          asperiores. Dignissimos id, quaerat alias atque earum ab nesciunt
          error corporis aliquid officia esse itaque non eos nisi! Nulla minus,
          distinctio, voluptas quae ipsam praesentium cupiditate amet architecto
          quisquam veritatis adipisci tempora delectus consectetur placeat a
          possimus blanditiis sapiente, fuga perferendis doloribus illo quasi?
          Dolorem voluptatibus vero non quia voluptatem perspiciatis blanditiis
          pariatur cupiditate at. Molestiae at dolorem ullam ducimus obcaecati
          explicabo recusandae ab maiores quia magnam natus, consequuntur saepe
          quidem! Molestias, vel nobis sapiente ipsa sit atque corrupti
          assumenda temporibus quos doloremque quaerat nostrum cumque, eligendi
          hic placeat veritatis quasi esse rem quae minima cum magni! Veritatis
          sed officiis nemo harum illo libero nulla ad cum sapiente sint impedit
          minus, fugiat at voluptatem laudantium repellat voluptas quisquam
          natus, vel modi eum ea eligendi itaque. Quisquam, officiis! Esse quis
          accusamus veritatis autem, sequi possimus placeat laudantium est
          officiis quisquam quo consequatur distinctio minus sed, provident sint
          perferendis nostrum mollitia nihil culpa? Itaque, pariatur ducimus
          quisquam aut illo, saepe quo nesciunt et dignissimos voluptatibus
          dicta neque corporis, ipsam ut qui nemo veniam iste. Dolore porro
          maiores impedit dolor quibusdam itaque minima, laboriosam officiis
          cupiditate mollitia eligendi possimus odio architecto aliquam illo
          ipsa similique eius omnis adipisci corrupti necessitatibus.
          Accusantium tenetur nam deleniti odio a eum ut ullam. Debitis
          perferendis nulla quaerat similique. Repellat est itaque et officia
          veritatis cupiditate dolorem animi maiores iste natus at, neque
          magnam. Quaerat, rerum corrupti molestiae suscipit repellat culpa
          fugit beatae, temporibus rem doloribus odio blanditiis quae
          necessitatibus delectus, veritatis enim. Ipsa omnis laboriosam natus
          veritatis, tempore aliquam adipisci perferendis assumenda alias
          aspernatur voluptatum pariatur nesciunt doloremque est nisi soluta
          temporibus nostrum neque! Nulla nam, accusamus error adipisci, dolor,
          deserunt neque modi ea voluptatem officia id magnam vel corporis? Modi
          dolor iste reiciendis, sed quae voluptatem nulla ratione similique.
          Neque similique sed iusto, consequatur earum officiis dignissimos?
          Earum ipsam consectetur distinctio iure debitis accusamus voluptates
          praesentium, minima ad facere labore quibusdam dolorem sunt
          reprehenderit. Necessitatibus corporis maxime earum! Libero,
          reiciendis natus sint, odio eum consectetur corrupti fugiat quam
          dolore dolorum accusantium facere voluptatibus earum quasi! Saepe,
          quae quasi doloremque eveniet ut distinctio dicta, quia sequi
          veritatis nam asperiores repellendus dolores fuga atque voluptate
          dolorem dolor laborum obcaecati dignissimos aperiam iste nisi! Nobis
          quidem cumque possimus, aperiam soluta itaque magnam accusantium,
          fugit expedita dignissimos autem. Distinctio aperiam deleniti iusto,
          assumenda natus cumque cupiditate maxime sit error a odio rem dolore
          in iure quia enim sunt. In corrupti id molestiae alias tenetur sit
          beatae rem iure, sed molestias minima a, ullam totam ducimus? Fuga
          numquam vel, repellendus, harum eos voluptas fugiat libero velit quia
          consectetur sequi iure. Illo excepturi a temporibus quos! Odit libero
          est doloribus voluptate excepturi quaerat tempora, dignissimos ipsa
          illo perspiciatis harum dolorem fugit impedit quos commodi autem
          maiores ullam facilis. Consectetur dolorem odio corporis aliquam
          impedit consequuntur delectus, sit animi quasi, quae eligendi atque
          nesciunt reprehenderit provident! Hic libero sint in similique?
        </div>
      </div>
    </main>
  );
}

export default App;
