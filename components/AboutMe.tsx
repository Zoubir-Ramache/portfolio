import Skills from "./Skills";
import { motion as m } from "framer-motion";

function AboutMe() {
  return (
    <m.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto my-16 px-4"
      id="AboutMe"
    >
      <div className="bg-base-200/50 backdrop-blur-sm p-8 rounded-3xl border border-base-content/5 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-primary rounded-full"></span>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Web developer based in Algeria
            </p>
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Student at the University of Constantine
            </p>
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              20 years old, passionate about innovation
            </p>
            <p className="pt-4 text-base-content/70">
              I specialize in building responsive, modern web applications using the latest technologies. My focus is on creating clean code and intuitive user interfaces.
            </p>
          </div>

          <div className="bg-base-100/50 p-6 rounded-2xl border border-base-content/5">
            <Skills />
          </div>
        </div>
      </div>
    </m.section>
  );
}

export default AboutMe;
