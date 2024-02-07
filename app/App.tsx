"use client";
import { useEffect } from "react";
import { useStateContext } from "@/Context/FirstProvider";
import {
  NavBar,
  Profile,
  MyProjects,
  ContactMe,
  AboutMe,
  Loading,
} from "@/components";
export default function App() {
  const { ActiveNavbar, theme, setTheme, ActiveNavbarOnScroll, loading } =
    useStateContext();

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme || "dark");

    window.addEventListener("scroll", ActiveNavbarOnScroll);
  }, [setTheme, ActiveNavbarOnScroll]);

  return (
    <>
      {loading && <Loading />}
      <div
        data-theme={theme}
        className=" bg-base-100 overflow-hidden  font-sans text-primary-content "
      >
        {ActiveNavbar && <NavBar />}
        <Profile />
        <div className="mt-24 ">
          <AboutMe />
          <MyProjects />
          <ContactMe />
        </div>
      </div>
    </>
  );
}
