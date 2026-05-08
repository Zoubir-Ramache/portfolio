import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { motion as m } from "framer-motion";
import { IconType } from "react-icons";

type ContactProps = {
  name: string;
  Icon: IconType;
  link: string;
  index: number;
};

export default function ContactMe() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto py-20 px-4 mb-20"
      id="Contact"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-base-content/60">I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {CONTACTS.map((contact, index) => (
          <Contact key={contact.link} {...contact} index={index} />
        ))}
      </div>
    </m.section>
  );
}

const Contact = ({ name, Icon, link, index }: ContactProps) => (
  <m.a
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.05 }}
    href={link}
    target="_blank"
    className="flex items-center gap-3 px-6 py-3 bg-base-200 hover:bg-primary hover:text-white rounded-2xl transition-all duration-300 shadow-md border border-base-content/5"
  >
    <Icon className="text-xl" />
    <span className="font-semibold capitalize">{name}</span>
  </m.a>
);

const CONTACTS = [
  {
    name: "github",
    Icon: BsGithub,
    link: "https://github.com/Zoubir-Ramache/",
  },
  {
    name: "LinkedIn",
    Icon: BsLinkedin,
    link: "https://www.linkedin.com/in/zoubir-ramache-04189a25b",
  },
  {
    name: "gmail",
    Icon: BiLogoGmail,
    link: "mailto:ramachezoubir@gmail.com",
  },
  {
    name: "instagram",
    Icon: BsInstagram,
    link: "https://instagram.com/ramache_zoubir",
  },
  {
    name: "facebook",
    Icon: BsFacebook,
    link: "https://www.facebook.com/zoubir.ramach",
  },
];
