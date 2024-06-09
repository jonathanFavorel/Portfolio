import React, { useEffect, useState } from "react";
import { ReactComponent as FormationIcon } from "./src/Formation.svg";
import { ReactComponent as HomeIcon } from "./src/Home.svg";
import { ReactComponent as ProjetIcon } from "./src/Projet.svg";
import { ReactComponent as RecommandationIcon } from "./src/Recommandation.svg";
import { ReactComponent as ThemeIcon } from "./src/Theme.svg";
import { ReactComponent as WorkIcon } from "./src/Work.svg";

const VerticalNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
  };

  const [activeIcon, setActiveIcon] = useState("home");

  useEffect(() => {
    const sections = ["home", "formation", "work", "recommandation", "projet"];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveIcon(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const getIconClass = (iconId) =>
    `relative h-10 w-10 mx-auto mb-8 ${
      activeIcon === iconId
        ? "bg-yellow rounded-full transition-all duration-300"
        : ""
    }`;

  const iconFillColor = isDarkMode ? "#FFFFFF" : "#2B2B2B";

  return (
    <nav
      className={`bg-white1 fixed right-0 flex-col justify-between h-screen text-white w-36 dark:bg-blackdark hidden sm:flex`}
    >
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="pt-4 flex justify-center mb-64">
          <ThemeIcon
            className="h-14 cursor-pointer"
            fill={iconFillColor}
            onClick={toggleTheme}
          />
        </div>
        <div className="mb-40 -mt-8">
          <a
            href="#home"
            className={getIconClass("home")}
            onClick={() => setActiveIcon("home")}
          >
            <HomeIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </a>
          <a
            href="#formation"
            className={getIconClass("formation")}
            onClick={() => setActiveIcon("formation")}
          >
            <FormationIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </a>
          <a
            href="#work"
            className={getIconClass("work")}
            onClick={() => setActiveIcon("work")}
          >
            <WorkIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </a>
          <a
            href="#recommandation"
            className={getIconClass("recommandation")}
            onClick={() => setActiveIcon("recommandation")}
          >
            <RecommandationIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </a>
          <a
            href="#projet"
            className={getIconClass("projet")}
            onClick={() => setActiveIcon("projet")}
          >
            <ProjetIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </a>
        </div>
      </div>
      <div className="pb-4"></div>
    </nav>
  );
};

export default VerticalNavbar;
