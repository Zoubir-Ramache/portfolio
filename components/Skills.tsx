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

type SkillProps = {
  name: string;
  Icon: IconType;
  index: number;
};

export default function Skills() {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-4 text-primary">Technical Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {SKILLS_LIST.map(({ name, Icon }, index) => (
          <SingleSkill name={name} Icon={Icon} key={name} index={index} />
        ))}
      </div>
    </div>
  );
}

const SKILLS_LIST = [
  { name: "JavaScript", Icon: BiLogoJavascript },
  { name: "React JS", Icon: BiLogoReact },
  { name: "Next JS", Icon: TbBrandNextjs },
  { name: "CSS", Icon: BiLogoCss3 },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "NodeJS", Icon: BiLogoNodejs },
  { name: "Java", Icon: BiLogoJava },
  { name: "Git", Icon: BsGit },
  { name: "Linux", Icon: VscTerminalLinux },
];

const SingleSkill = ({ name, Icon, index }: SkillProps) => (
  <m.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="flex items-center gap-2 p-3 bg-base-100 rounded-xl border border-base-content/5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
  >
    <Icon className="text-2xl text-secondary" />
    <span className="text-sm font-medium whitespace-nowrap">{name}</span>
  </m.div>
);
