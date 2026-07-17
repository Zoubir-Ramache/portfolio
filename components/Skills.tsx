import { SiNestjs, SiTailwindcss, SiFlutter, SiDart } from "react-icons/si";
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

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

export const SKILLS_BY_CATEGORY: SkillCategory[] = [
  {
    title: "Mobile Stack",
    skills: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Dart", Icon: SiDart },
    ],
  },
  {
    title: "Web & Frontend",
    skills: [
      { name: "JavaScript", Icon: BiLogoJavascript },
      { name: "TypeScript", Icon: BiLogoTypescript },
      { name: "React", Icon: BiLogoReact },
      { name: "Next.js", Icon: TbBrandNextjs },
      { name: "CSS", Icon: BiLogoCss3 },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Server",
    skills: [
      { name: "Node.js", Icon: BiLogoNodejs },
      { name: "NestJS", Icon: SiNestjs },
      { name: "Java", Icon: BiLogoJava },
    ],
  },
  {
    title: "Tools & Systems",
    skills: [
      { name: "Git", Icon: BsGit },
      { name: "Linux", Icon: VscTerminalLinux },
    ],
  },
];

export const SKILLS_LIST: SkillItem[] = SKILLS_BY_CATEGORY.flatMap(
  (category) => category.skills
);

export default function Skills() {
  return (
    <div className="space-y-8">
      {SKILLS_BY_CATEGORY.map((category) => (
        <div key={category.title}>
          <h3 className="text-xl font-bold text-slate-400 mb-4 capitalize">
            {category.title}
          </h3>
          <div className="flex w-full flex-wrap gap-2 px-4 py-2 text-lg font-bold capitalize">
            {category.skills.map(({ name, Icon }) => (
              <SingleSkill name={name} Icon={Icon} key={name} />
            ))}
          </div>
        </div>
      ))}
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
