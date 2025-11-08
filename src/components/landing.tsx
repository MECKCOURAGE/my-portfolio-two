import ScrollSpy from "react-scrollspy-navigation";
import Media from "./media";
const Landing = () => {
  return (
    <div>
      <aside className="md:w-1/2 md:fixed h-full md:pt-24 pt-12">
        <div>
          <h1 className="font-rajdhani tracking-tight text-[48px] leading-[50px] font-bold text-slate">
            MECK COURAGE
          </h1>
          <h2 className="font-inter tracking-tight mt-3 font-medium text-slate text-[21px] leading-[28px]">
            Front End Engineer
          </h2>
          <h3 className="text-customSlate mt-4 sm:w-[340px] font-normal text-[17px] leading-normal">
            I build fast, responsive, and visually engaging web interfaces.
          </h3>
        </div>
        <ScrollSpy activeClass="active-link">
          <ul className="space-y-6 mt-[64px] mb-[64px] w-[190px] hidden md:block">
            <li>
              <a
                href="#about"
                section-id="about"
                className="group flex flex-row items-center"
              >
                <span className="h-[1px] w-8 mr-4 bg-customSlate transition-all duration-150 ease-in-out group-hover:w-16 group-hover:bg-slate group-[.active-link]:w-16 group-[.active-link]:bg-slate"></span>
                <h1 className="tracking-widest uppercase text-xs font-inter font-bold text-customSlate group-hover:text-slate group-hover:font-semibold group-[.active-link]:text-slate group-[.active-link]:font-semibold">
                  About
                </h1>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                section-id="experience"
                className="group flex flex-row items-center"
              >
                <span className="h-[1px] w-8 mr-4 bg-customSlate transition-all duration-150 ease-in-out group-hover:w-16 group-hover:bg-slate group-[.active-link]:w-16 group-[.active-link]:bg-slate"></span>
                <h1 className="tracking-widest uppercase text-xs font-inter font-bold text-customSlate group-hover:text-slate group-hover:font-semibold group-[.active-link]:text-slate group-[.active-link]:font-semibold">
                  Experience
                </h1>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                section-id="projects"
                className="group flex flex-row items-center"
              >
                <span className="h-[1px] w-8 mr-4 bg-customSlate transition-all duration-150 ease-in-out group-hover:w-16 group-hover:bg-slate group-[.active-link]:w-16 group-[.active-link]:bg-slate"></span>
                <h1 className="tracking-widest uppercase text-xs font-inter font-bold text-customSlate group-hover:text-slate group-hover:font-semibold group-[.active-link]:text-slate group-[.active-link]:font-semibold">
                  Projects
                </h1>
              </a>
            </li>
          </ul>
        </ScrollSpy>
        <Media />
      </aside>
    </div>
  );
};
export default Landing;
