"use client";

import { useStateContext } from "@/Context/FirstProvider";
import {
  NavBar,
  Profile,
  MyProjects,
  ContactMe,
  AboutMe,
  Loading,
  TechStack,
} from "@/components";

export default function App() {
  const { loading } = useStateContext();

  return (
    <>
      {loading && <Loading />}
      <div className="relative min-h-screen overflow-x-hidden bg-black font-sans text-white antialiased">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]" />

        <NavBar />
        <Profile />
        <MyProjects />
        <AboutMe />
        <TechStack />
        <ContactMe />
      </div>
    </>
  );
}
