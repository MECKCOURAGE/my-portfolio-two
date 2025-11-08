import { Instagram } from "lucide-react";
import type { ElementType } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiFrontendmentor } from "react-icons/si";
import { motion } from "framer-motion";

const Media = () => {
  return (
    <div className="flex flex-row space-x-5">
      <SocialMediaIcon Icon={FaGithub} href="https://github.com/MECKCOURAGE" />
      <SocialMediaIcon
        Icon={FaLinkedin}
        href="https://www.linkedin.com/in/courage-meck-4b12442b9/"
      />
      <SocialMediaIcon
        Icon={Instagram}
        href="https://www.instagram.com/meckjnr/
"
      />
      <SocialMediaIcon
        Icon={SiFrontendmentor}
        href="https://www.frontendmentor.io/profile/MECKCOURAGE"
      />
      <SocialMediaIcon
        Icon={SiGmail}
        href="mailto:themeckcourage07@gmail.com"
      />
    </div>
  );
};

export default Media;

const SocialMediaIcon = ({
  Icon,
  href,
}: {
  Icon: ElementType;
  href: string;
}) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="  transition-colors duration-300 mt-6 md:mt-0"
  >
    <Icon className="w-6 h-6 text-customSlate" />
  </motion.a>
);
