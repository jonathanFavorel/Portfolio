import React, { useEffect, useState } from "react";
import Central from "../central-component/centralmobile";
import useProgressAnimations from "../leftMenu/progressAnimation";
import Profile from "../leftMenu/src/Profile.png";
import Download from "../leftMenu/src/download.svg";
import Square from "../leftMenu/src/square.svg";
import Linkedin from "./src/Linkedin.svg";
import { ReactComponent as MenuIcon } from "./src/MenuButton.svg";
import { ReactComponent as ThemeIcon } from "./src/Theme.svg";
import { ReactComponent as CrossIcon } from "./src/cross.svg";
import Git from "./src/git.svg";

const Navbar = () => {
  const [sidebarOpen] = useState(false);
  const { progressWidths, languageProgress, startAnimations } =
    useProgressAnimations();

  useEffect(() => {
    if (sidebarOpen) {
      startAnimations(); // Démarrer les animations de progression lorsque le menu est ouvert
    }
  }, [sidebarOpen, startAnimations]);

  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileCentered, setIsProfileCentered] = useState(false);
  const [showText, setShowText] = useState(false);
  const [profileMarginTop, setProfileMarginTop] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isMenuOpen);
    setIsProfileCentered(!isProfileCentered);
    if (isMenuOpen) {
      setTimeout(() => {
        setShowText(false);
      }, 500);
    }
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
  };

  useEffect(() => {
    const handleThemeChange = (e) => {
      setIsDarkMode(e.matches);
      localStorage.theme = e.matches ? "dark" : "light";
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        setShowText(true);
      }, 230);
    } else {
      setShowText(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isOpen) {
      setProfileMarginTop(0); // Mettez la valeur de décalage souhaitée
    } else {
      setProfileMarginTop(0);
    }
  }, [isOpen]);

  return (
    <div>
      <nav
        className={`shadow-xl bg-white1 w-6/6 mx-10 p-2 fixed top-4 left-0 right-0 z-50 flex justify-between items-center mx-7 block sm:hidden dark:bg-blackdark  ${
          isOpen
            ? "rounded-large w-30 transition-all duration-230 ease-in-out mx-auto overflow-y-auto max-h-screen"
            : "rounded-full"
        }`}
      >
        <div
          className={`flex flex-col items-center transition-all duration-300 ${
            isOpen ? "mx-auto mt-40 mb-56" : ""
          }`}
        >
          <img
            style={{ marginTop: `${profileMarginTop}px` }}
            className={`w-16 h-16 rounded-full border border-black mt-0 dark:border-white ${
              isOpen ? "mt-0" : ""
            }`}
            src={Profile}
            alt=""
          />
          {isMenuOpen && showText && (
            <div className="text-center opacity-100 transition duration-1000 ease-out mx-auto -mb-52">
              <div className="">
                <h1 className="font-inter-medium font-bold text-lg dark:text-white1">
                  Jonathan Favorel
                </h1>
                <h1 className="font-inter-medium text-lg dark:text-white1">
                  Développeur Front-end
                </h1>
                <div className="relative flex justify-center space-x-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/jonathan-favorel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-7 h-7 rounded-full"
                      src={Linkedin}
                      alt="LinkedIn Profile"
                    />
                  </a>
                  <a
                    href="https://github.com/jonathanFavorel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-7 h-7 rounded-full"
                      src={Git}
                      alt=""
                    ></img>
                  </a>
                </div>
                <div className="border-b border-white mt-2 mb-2"></div>
                <ul className="flex-col justify-center mt-4 mb-4 space-y-2.5 font-inter-regular text-base mx-auto list-none">
                  <li className="flex items-center">
                    <h5 className="mr-2 text-sm dark:text-white">Age :</h5>
                    <button className="bg-yellow rounded-lg h-6 py-0 px-4 text-base text-sm text-black flex items-center dark:text-white ml-32">
                      24 ans
                    </button>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-sm dark:text-white">
                      Expérience :
                    </span>
                    <button className="bg-yellow rounded-lg h-6 py-0 px-4 text-sm text-base text-black flex items-center dark:text-white ml-24">
                      4 ans
                    </button>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-sm dark:text-white">
                      Secteur :
                    </span>
                    <button className="bg-yellow rounded-lg h-6 py-0 px-4 text-base text-black text-sm flex items-center dark:text-white ml-28">
                      France
                    </button>
                  </li>
                  <li className="flex items-center text-sm dark:text-white">
                    En recherche :
                    <label htmlFor="toggle" className="ml-28 cursor-pointer ">
                      <div className="relative">
                        <div className="toggle__line w-8 h-5 bg-white rounded-full shadow-inner border-2 border-green  dark:bg-black"></div>
                        <div className="toggle__dot absolute w-3 h-3 bg-green rounded-full shadow left-4 top-1"></div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="border-b border-white mt-2 mb-2"></div>
                <li className="list-none">
                  <ul className="flex-col justify-center mb-4 space-y-2.5">
                    <li className="flex items-center justify-center">
                      {" "}
                      {/* Ajout de justify-center */}
                      <h1 className="flex items-center font-inter-medium text-lg dark:text-white">
                        Langue
                      </h1>
                    </li>
                    <li className="relative">
                      <h1 className="font-inter-regular text-base text-grey text-sm mr-10 dark:text-white">
                        Français{" "}
                        <span className="absolute top-0 right-16 text-sm dark:text-white">
                          100%
                        </span>
                      </h1>
                      <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex dark:bg-black">
                        <div
                          className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5"
                          style={{ width: `${languageProgress.french}%` }}
                        ></div>
                      </div>
                    </li>
                    <li className="relative">
                      <h1 className="font-inter-regular text-base text-grey text-sm mr-10 dark:text-white">
                        Anglais{" "}
                        <span className="absolute top-0 right-16 text-sm dark:text-white">
                          60%
                        </span>
                      </h1>
                      <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex dark:bg-black">
                        <div
                          className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5 "
                          style={{ width: `${languageProgress.english}%` }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </li>{" "}
                <div className="border-b border-white mt-2 mb-2"></div>
                <li className="list-none">
                  <ul className="flex-col justify-center mb-4 space-y-2.5">
                    <li className="flex items-center justify-center">
                      {" "}
                      {/* Ajout de justify-center */}
                      <h1 className="flex items-center font-inter-medium text-lg dark:text-white">
                        Langage
                      </h1>
                    </li>
                    <li className="relative">
                      <h1 className="font-inter-regular text-base text-grey mr-10 text-sm dark:text-white">
                        HTML{" "}
                        <span className="absolute top-0 right-16 text-sm dark:text-white">
                          90.5%
                        </span>
                      </h1>
                      <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex transition-width duration-500 ease-in-out dark:bg-black">
                        <div
                          className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5"
                          style={{ width: `${progressWidths.html}%` }}
                        ></div>
                      </div>
                    </li>
                    <li className="relative">
                      <h1 className="font-inter-regular text-base text-grey text-sm mr-10 dark:text-white">
                        CSS{" "}
                        <span className="absolute top-0 right-16 text-sm dark:text-white">
                          85.5%
                        </span>
                      </h1>
                      <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex transition-width duration-500 ease-in-out dark:bg-black">
                        <div
                          className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5"
                          style={{ width: `${progressWidths.css}%` }}
                        ></div>
                      </div>
                    </li>
                    <li className="relative">
                      <h1 className="font-inter-regular text-base text-sm text-grey mr-10 dark:text-white">
                        JS{" "}
                        <span className="absolute top-0 text-sm right-16 dark:text-white">
                          70.5%
                        </span>
                      </h1>
                      <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex transition-width duration-500 ease-in-out dark:bg-black">
                        <div
                          className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5"
                          style={{ width: `${progressWidths.js}%` }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </li>
                <div className="border-b border-white mt-1 mb-2"></div>
                <li className="list-none">
                  <ul className="flex-col justify-center mb-4 space-y-2">
                    <li className="flex items-center justify-center">
                      {" "}
                      {/* Ajout de justify-center */}
                      <h1 className="flex items-center font-inter-medium text-lg dark:text-white">
                        Technologies
                      </h1>
                    </li>
                    <li className="relative flex items-center justify-center">
                      {" "}
                      {/* Ajout de justify-center */}
                      <div className="flex items-center">
                        <img
                          className="w-15 h-15 mt-2"
                          src={Square}
                          alt=""
                        ></img>
                        <h1 className="font-inter-regular text-sm text-base text-grey ml-2 mt-2 dark:text-white">
                          Bootstrap, Tailwind
                        </h1>
                      </div>
                    </li>
                    <li className="relative flex items-center justify-center">
                      {" "}
                      {/* Ajout de justify-center */}
                      <div className="flex items-center">
                        <img
                          className="w-15 h-15 mt-2"
                          src={Square}
                          alt=""
                        ></img>
                        <h1 className="font-inter-regular text-sm text-base text-grey ml-2 mt-2 dark:text-white">
                          React, Angular, NextJS
                        </h1>
                      </div>
                    </li>
                    <li className="relative flex items-center justify-center">
                      {" "}
                      {/* Ajout de justify-center */}
                      <div className="flex items-center">
                        <img
                          className="w-15 h-15 mt-2"
                          src={Square}
                          alt=""
                        ></img>
                        <h1 className="font-inter-regular text-sm text-base text-grey ml-2 mt-2 dark:text-white">
                          Figma, Trello
                        </h1>
                      </div>
                    </li>
                    <li className="relative flex items-center justify-center">
                      {" "}
                      {/* Ajout de justify-center */}
                      <div className="flex items-center">
                        <img
                          className="w-15 h-15 mt-2"
                          src={Square}
                          alt=""
                        ></img>
                        <h1 className="font-inter-regular text-sm text-base text-grey ml-2 mt-2 dark:text-white">
                          GIT
                        </h1>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="relative flex items-center justify-center h-full mb-0">
                  <a
                    href="/CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow hover:bg-yellow1 text-black font-bold py-2 px-4 rounded flex items-center mb-20 dark:text-white"
                  >
                    CV{" "}
                    <img
                      className="w-15 h-15 mt-1 ml-2 dark:invert"
                      src={Download}
                      alt=""
                    />
                  </a>
                </li>
              </div>
            </div>
          )}
        </div>
        <div className="fixed flex items-center right-12 top-7">
          <ThemeIcon
            className="h-14 cursor-pointer mr-2"
            fill={isDarkMode ? "#FFFFFF" : "#2B2B2B"}
            onClick={toggleTheme}
          />
          {isMenuOpen ? (
            <CrossIcon
              className="h-18 cursor-pointer ml-4 mr-2"
              stroke={isDarkMode ? "#FFFFFF" : "#2B2B2B"}
              onClick={toggleMenu}
            />
          ) : (
            <MenuIcon
              className="h-14 cursor-pointer"
              fill={isDarkMode ? "#FFFFFF" : "#2B2B2B"}
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
      <Central isDarkMode={isDarkMode} />
    </div>
  );
};

export default Navbar;
