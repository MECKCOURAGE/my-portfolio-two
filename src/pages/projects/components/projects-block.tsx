import { MdArrowUpward } from "react-icons/md";
import Skill from "../../../components/skill";
import ImageBlock from "./image";
import Dialog from "../../../components/dialog";
import { useState } from "react";

type Project = {
  image: string;
  name: string;
  description: string;
  skills?: string[];
  mainLink: string;
  githubLink: string;
};
const ProjectBlock = ({
  image,
  name,
  description,
  skills,
  mainLink,
  githubLink,
}: Project) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="group transition-all hover:opacity-100 pb-1">
      <button
        onClick={() => {
          setOpen(true);
        }}
        className=" flex flex-col lg:flex-row xl:w-[645px] p-6 rounded-md transition motion-reduce:transition-none group-hover:bg-[rgba(148,163,184,0.05)] group-hover:shadow-md  group-hover:drop-shadow-md group-hover:opacity-100 text-left"
      >
        <ImageBlock image={image} />
        <div className="">
          <div className="flex flex-row group-hover:text-teal space-x-[1px] text-[17px] leading-[20px] text-slate ">
            <h2 className="pr-[5px]">{name}</h2>

            <MdArrowUpward className="rotate-45 text-slate mt-[3px] group-hover:text-teal group-hover:mt-[0px]  transition-all duration-200 ease-in-out group-hover:-translate-y-[3px] " />
          </div>
          <p className="mt-2 text-sm leading-normal text-customSlate xl:w-[450px] sm:w-[350px] ">
            {description}
          </p>
        </div>
      </button>
      <Dialog isOpen={open} onClose={() => setOpen(false)} title={name}>
        <img src={image} className="h-44 w-full object-cover" />
        <p className="my-4 text-slate ">{description}</p>

        {skills && skills.length > 0 && (
          <div className="flex flex-row mt-4 space-x-[6px]">
            {skills.map((skill, i) => (
              <Skill skill={skill} key={i} />
            ))}
          </div>
        )}

        <ul className="flex flex-row justify-center space-x-5 text-customSlate text-xs mt-8 ">
          <li>
            <a
              href={mainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 rounded-full border-customSlate hover:border-background bg-background hover:bg-customSlate hover:text-background transition-all  duration-200 ease-in-out"
            >
              VISIT SITE
            </a>
          </li>
          <li className="text-sm">OR</li>
          <li>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 rounded-full border-slate hover:border-background bg-background hover:bg-slate hover:text-background transition-all  duration-200 ease-in-out"
            >
              VISIT CODE
            </a>
          </li>
        </ul>
      </Dialog>
    </div>
  );
};

export default ProjectBlock;
