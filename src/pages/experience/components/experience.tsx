import formatDateRange from "./date-range-formatter";
import { MdArrowUpward } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import Skill from "../../../components/skill";
import { useState } from "react";
import Dialog from "../../../components/dialog";

type ExperienceLink = {
  name: string;
  url: string;
};

type Experience = {
  startDate: string; // e.g., "2024-07-01"
  endDate?: string; // e.g., "2024-12-01"
  isPresent?: boolean;
  company: string;
  role?: string;
  description: string;
  links?: ExperienceLink[];
  skills?: string[];
};
const ExperienceBlock = ({
  startDate,
  endDate,
  isPresent,
  company,
  role,
  description,
  links,
  skills,
}: Experience) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="group transition-all hover:opacity-100 pb-1 ">
      <button
        onClick={() => {setOpen(true)}}
        className=" flex flex-col xl:flex-row xl:w-[645px] p-6 rounded-md transition motion-reduce:transition-none group-hover:bg-[rgba(148,163,184,0.05)] group-hover:shadow-md  group-hover:drop-shadow-md group-hover:opacity-100 text-left"
      >
        
        <span className="w-[140px] text-customSlate uppercase text-xs tracking-wide mt-[1px] mb-[3px]">
          {formatDateRange(startDate, endDate, isPresent)}
        </span>
        <div className="">
          <div className="flex flex-row group-hover:text-teal space-x-[1px] text-[17px] leading-[20px] text-slate ">
            {role && (
              <>
                <h2>{role}</h2>
                <BsDot className="my-auto" />
              </>
            )}
            <h2 className="pr-[5px] ">{company}</h2>

            <MdArrowUpward className="rotate-45 text-slate mt-[3px] group-hover:text-teal group-hover:mt-[0px]  transition-all duration-200 ease-in-out group-hover:-translate-y-[3px] " />
          </div>
          
          <p className="mt-2 text-sm leading-normal  text-customSlate xl:w-[450px] sm:w-[350px] ">
            {description}
          </p>
          {skills && skills.length > 0 && (
            <div className="flex flex-row mt-4 space-x-[6px]">
              {skills.map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
            </div>
          )}
        </div>
      </button>
      <Dialog isOpen={open} onClose={() => setOpen(false)} title={company}>
        <p className="my-4 text-slate ">{description}</p>
        <div>
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-4 my-4">
              {links.map((link, i) => (
                <ExperienceLinkItem link={link} key={i} />
              ))}
            </div>
          )}
         <div className="flex flex-row">
          <p className="md:text-base text-xs">Skills Acquired:</p>  {skills && skills.length > 0 && (
            <div className="flex flex-row ml-2">
              {skills.map((skill, i) => (
                <Skill skill={skill} key={i} />
              ))}
            </div>
          )}
         </div>
        </div>

      </Dialog>
    </div>
  );
};

export default ExperienceBlock;

const ExperienceLinkItem = ({ link }: { link: ExperienceLink }) => {
  return (
    <div>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row text-slate tracking-normal"
      >
        <LuLink className="text-[10px] mt-[5px] mr-2 " />
        <p className="text-[14px] hover:text-teal">{link.name}</p>
      </a>
    </div>
  );
};
