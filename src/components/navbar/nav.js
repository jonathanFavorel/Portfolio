import React, { useEffect, useState } from "react";
import { ReactComponent as FormationIcon } from "./src/Formation.svg";
import { ReactComponent as HomeIcon } from "./src/Home.svg";
import { ReactComponent as ProjetIcon } from "./src/Projet.svg";
import { ReactComponent as RecommandationIcon } from "./src/Recommandation.svg";
import { ReactComponent as ThemeIcon } from "./src/Theme.svg";
import { ReactComponent as WorkIcon } from "./src/Work.svg";

const VerticalNavbar = () => {
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveIcon(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const sections = ["home", "formation", "work", "recommandation", "projet"];

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
          <div
            className={getIconClass("home")}
            onClick={() => {
              smoothScroll("home");
              setActiveIcon("home");
            }}
          >
            <HomeIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </div>
          <div
            className={getIconClass("formation")}
            onClick={() => {
              smoothScroll("formation");
              setActiveIcon("formation");
            }}
          >
            <FormationIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </div>
          <div
            className={getIconClass("work")}
            onClick={() => {
              smoothScroll("work");
              setActiveIcon("work");
            }}
          >
            <WorkIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </div>
          <div
            className={getIconClass("recommandation")}
            onClick={() => {
              smoothScroll("recommandation");
              setActiveIcon("recommandation");
            }}
          >
            <RecommandationIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </div>
          <div
            className={getIconClass("projet")}
            onClick={() => {
              smoothScroll("projet");
              setActiveIcon("projet");
            }}
          >
            <ProjetIcon
              className="h-10 mx-auto mb-8 cursor-pointer"
              fill={iconFillColor}
            />
          </div>
        </div>
      </div>
      <div className="pb-4"></div>
    </nav>
  );
};

export default VerticalNavbar;
