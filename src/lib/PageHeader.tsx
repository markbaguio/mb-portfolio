function PageHeader() {
  return (
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
  );
}

export default PageHeader;
