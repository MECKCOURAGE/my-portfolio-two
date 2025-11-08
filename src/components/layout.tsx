// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import Landing from "./landing";
import Experience from "../pages/experience";
import About from "../pages/about";
import Projects from "../pages/projects";
// import background from "../assets/background-image.png";

const Layout = () => {
  // const [bgLoaded, setBgLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = background;
  //   img.onload = () => setBgLoaded(true);
  // }, []);

  return (
    <div
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundAttachment: "fixed",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
      className="flex flex-col xl:px-20 px-8 md:px-8 min-h-screen"
    >
      <div
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Landing />

        <div className="mb-28 scroll-smooth space-y-20">
          <section id="about" className="md:ml-[45%] pt-[80px]">
            <About />
          </section>
          <section id="experience" className="md:ml-[45%] pt-[63px]">
            <Experience />
          </section>
          <section id="projects" className="md:ml-[45%] pt-[63px]">
            <Projects />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Layout;
