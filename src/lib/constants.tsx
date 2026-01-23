export type ProjectCard = {
  id: string;
  header: string;
  description: string;
  techUsed: string[];
  projectImgURL: string;
  href: string;
};

export const projects: ProjectCard[] = [
  {
    id: "1",
    header: "Kafy",
    description:
      "A modern, Starbucks-inspired coffee shop web application built to practice full-stack development. It features user authentication, menu browsing, and favorites for a personalized experience, with a responsive React frontend and a Node.js/Express backend using PostgreSQL and Supabase for authentication.",
    techUsed: [
      "React JS",
      "Typescript",
      "TailwindCSS",
      "shadcn",
      "Supabase",
      "Node JS",
      "Express JS",
    ],
    projectImgURL: "src/assets/projects/kafy.png",
    href: "https://github.com/markbaguio/kafy-ts-personal-proj",
  },
  {
    id: "2",
    header: "WebTube",
    description:
      "A recreation of YouTube’s homepage built with React and Tailwind CSS, featuring a responsive layout, sidebar navigation, search bar, and video cards.",

    techUsed: ["React JS", "TailwindCSS"],
    projectImgURL: "src/assets/projects/webtube.png",
    href: "https://github.com/markbaguio/youtube-homepage-clone",
  },
];
