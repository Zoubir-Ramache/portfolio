import { SiNestjs, SiTailwindcss } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoNodejs,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { VscTerminalLinux } from "react-icons/vsc";
import { motion as m } from "framer-motion";
import { IconType } from "react-icons";

export type SkillItem = {
  name: string;
  Icon: IconType;
};

export const SKILLS_LIST: SkillItem[] = [
  { name: "JavaScript", Icon: BiLogoJavascript },
  { name: "React", Icon: BiLogoReact },
  { name: "Next.js", Icon: TbBrandNextjs },
  { name: "TypeScript", Icon: BiLogoTypescript },
  { name: "CSS", Icon: BiLogoCss3 },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: BiLogoNodejs },
  { name: "NestJS", Icon: SiNestjs },
  { name: "Java", Icon: BiLogoJava },
  { name: "Git", Icon: BsGit },
  { name: "Linux", Icon: VscTerminalLinux },
];

export default function Skills() {
  return (
    <div>
      <h2 className="card-title text-primary-content underline">
        my skills :
      </h2>
      <div className="flex w-full flex-wrap justify-around gap-2 px-8 py-2 text-lg font-bold capitalize">
        {SKILLS_LIST.map(({ name, Icon }) => (
          <SingleSkill name={name} Icon={Icon} key={name} />
        ))}
      </div>
    </div>
  );
}

const SingleSkill = ({ name, Icon }: SkillItem) => (
  <m.li
    whileInView={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    initial={{ scale: 0.1 }}
    className="btn btn-ghost text-lg capitalize shadow-md shadow-secondary"
  >
    {name} <Icon className="skills-icon" />
  </m.li>
);
