import React, { useState } from "react";
import { ReactComponent as ContactIcon } from "./src/Contact.svg";
import { ReactComponent as FormationIcon } from "./src/Formation.svg";
import { ReactComponent as HomeIcon } from "./src/Home.svg";
import { ReactComponent as ProjetIcon } from "./src/Projet.svg";
import { ReactComponent as RecommandationIcon } from "./src/Recommandation.svg";
import { ReactComponent as ThemeIcon } from "./src/Theme.svg";
import { ReactComponent as WorkIcon } from "./src/Work.svg";

const VerticalNavbar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleClick = (icon) => {
    if (activeIcon === icon) {
      setActiveIcon("");
    } else {
      setActiveIcon(icon);
    }
  };

  return (
    <nav className="fixed right-0 sm:flex flex-col justify-between h-screen bg-white1 text-white w-36">
      <div className="pt-4">
        <ThemeIcon className="h-14 mx-auto mb-2" fill="#2B2B2B" />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div
          className={`relative h-10 w-10 mx-auto mb-8 ${
            activeIcon === "home" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("home")}
        >
          <HomeIcon className="h-10 mx-auto mb-8" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-10 w-10 mx-auto mb-8 ${
            activeIcon === "formation" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("formation")}
        >
          <FormationIcon className="h-10 mx-auto mb-8" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-10 w-10 mx-auto mb-8 ${
            activeIcon === "work" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("work")}
        >
          <WorkIcon className="h-10 mx-auto mb-8" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-10 w-10 mx-auto mb-8 ${
            activeIcon === "recommandation" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("recommandation")}
        >
          <RecommandationIcon className="h-10 mx-auto mb-8" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-10 w-10 mx-auto mb-2mb-8 ${
            activeIcon === "projet" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("projet")}
        >
          <ProjetIcon className="h-10 mx-auto mb-8" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-10 w-10 mx-auto mb-8 mt-8 ${
            activeIcon === "contact" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("contact")}
        >
          <ContactIcon className="h-10 mx-auto mt-0" fill="#2B2B2B" />
        </div>
      </div>
      <div className="pb-4">
        {/* Ajoutez les éléments de la barre de navigation à droite ici */}
      </div>
    </nav>
  );
};

export default VerticalNavbar;
