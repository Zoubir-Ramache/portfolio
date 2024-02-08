import { SiTailwindcss } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoNodejs,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { VscTerminalLinux } from "react-icons/vsc";
import { motion as m } from "framer-motion";
import { IconType } from "react-icons";
type props = {
  name: string;
  Icon: IconType;
};

export default function Skills() {
  return (
    <div>
      <h2 className=" card-title text-primary-content underline">
        my skills :
      </h2>
      <div className=" w-full flex flex-wrap justify-around gap-2 px-8 py-2 capitalize font-bold">
        {SKILLS_LIST.map(({ name, Icon }) => (
          <SingleSkill name={name} Icon={Icon} key={name} />
        ))}
      </div>
    </div>
  );
}
const SKILLS_LIST = [
  {
    name: "javascript",
    Icon: () => <BiLogoJavascript className="skills-icon" />,
  },
  { name: "react js", Icon: () => <BiLogoReact className="skills-icon" /> },
  { name: "next js", Icon: () => <TbBrandNextjs className="skills-icon" /> },
  { name: "css", Icon: () => <BiLogoCss3 className="skills-icon" /> },
  {
    name: "tailwindcss",
    Icon: () => <SiTailwindcss className="skills-icon" />,
  },
  { name: "nodejs", Icon: () => <BiLogoNodejs className="skills-icon" /> },
  { name: "java", Icon: () => <BiLogoJava className="skills-icon" /> },
  { name: "git", Icon: () => <BsGit className="skills-icon" /> },
  { name: "linux", Icon: () => <VscTerminalLinux className="skills-icon" /> },
];
const SingleSkill = ({ name, Icon }: props) => (
  <m.li
    whileInView={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    initial={{ scale: 0.1 }}
    className=" btn text-lg btn-ghost capitalize shadow-md shadow-secondary "
  >
    {name} <Icon className="skills-icon" />
  </m.li>
);

