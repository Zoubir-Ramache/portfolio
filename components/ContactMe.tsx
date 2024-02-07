import { BsFacebook , BsInstagram  , BsGithub} from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { motion as m, useScroll } from "framer-motion";
import { IconType } from "react-icons";
type props = {
  name: string;
  Icon: IconType;
  link: string;
};
export default function ContactMe() {
  const { scrollYProgress } = useScroll();

  return (
    <m.div
      style={{ scaleX: scrollYProgress }}
      className="  mb-20 font-sans card shadow-sm shadow-primary-content m-1 mt-4 p-2 capitalize"
    >
      <h1
        id="Contact"
        className="card-title text-primary-content underline underline-offset-4 "
      >
        Contact me :
      </h1>
      <div className="flex gap-4 flex-wrap  justify-around mt-4">
        {CONTACTS.map(({ name, Icon, link }) => (
          <Contact name={name} link={link} Icon={Icon} key={link} />
        ))}
      </div>
    </m.div>
  );
}
const Contact = ({ name, Icon, link }: props) => (
  <m.a
    whileInView={{ scale: 1 }}
    initial={{ scale: 0.6 }}
    transition={{ delay: 0.1 }}
    href={link}
    target="_blank"
    className="card p-1 btn-ghost shadow-sm shadow-primary-content items-center flex flex-row "
    key={link}
  >
    <h1 className="card-title shadow-sm shadow-primary-content   text-primary-content btn-ghost p-2 rounded-lg">
      {name} <Icon />
    </h1>
  </m.a>
);

const CONTACTS: props[] = [
  {
    name: "github",
    Icon: () => <BsGithub />,

    link: "https://github.com/remmachezoubir",
  },
  {
    name: "linkdin",
    Icon: () => <AiFillLinkedin size={25} />,
    link: "https://www.linkedin.com/in/zoubir-ramache-04189a25b",
  },
  {
    name: "gmail",
    Icon: () => <BiLogoGmail />,
    link: "mailto:ramachezoubir@gmail.com",
  },
  {
    name: "instagram",
    Icon: () => <BsInstagram className="inline-block" size={25} />,
    link: "https://instagram.com/ramache_zoubir",
  },
  {
    name: "facebook",
    Icon: () => <BsFacebook size={25} />,
    link: "https://www.facebook.com/zoubir.ramach",
  },
];
