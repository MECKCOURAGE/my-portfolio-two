import Landing from "./landing";
import Experience from "../pages/experience";
import About from "../pages/about";
import Projects from "../pages/projects";


const Layout = () => {
  return (
   <div className="md:flex">
  <div className=" md:w-[40%] md:fixed md:left-0 md:top-0 md:h-screen">
    <Landing />
  </div>

  <div className="w-full md:ml-[40%] md:pl-[71px] px-4">
    <section id="about" className="pt-20 scroll-mt-24 md:w-[610px] ">
      <About />
    </section>

    <section id="experience" className="pt-20 scroll-mt-24">
      <Experience />
    </section>

    <section id="projects" className="pt-20 scroll-mt-24">
      <Projects />
    </section>
  </div>
</div>
  );
};

export default Layout;
