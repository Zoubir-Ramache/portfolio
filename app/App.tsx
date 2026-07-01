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
      <div className="relative min-h-screen overflow-x-hidden bg-slate-950 font-sans text-slate-200 antialiased selection:bg-indigo-500/30">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_80%_120%,rgba(59,130,246,0.15),transparent)]" />
        
        <NavBar />
        <main className="flex flex-col gap-24 pb-24">
          <Profile />
          <MyProjects />
          <AboutMe />
          <TechStack />
          <ContactMe />
        </main>
      </div>
    </>
  );
}
