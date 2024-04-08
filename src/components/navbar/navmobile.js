import React, { useState } from "react";
import { ReactComponent as ContactIcon } from "./src/Contact.svg";
import { ReactComponent as FormationIcon } from "./src/Formation.svg";
import { ReactComponent as HomeIcon } from "./src/Home.svg";
import { ReactComponent as ProjetIcon } from "./src/Projet.svg";
import { ReactComponent as RecommandationIcon } from "./src/Recommandation.svg";
import { ReactComponent as ThemeIcon } from "./src/Theme.svg";
import { ReactComponent as WorkIcon } from "./src/Work.svg";

const HorizontalNavbar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleClick = (icon) => {
    if (activeIcon === icon) {
      setActiveIcon("");
    } else {
      setActiveIcon(icon);
    }
  };

  return (
    <nav className="flex justify-between bg-white1 text-white p-4">
      <div>
        <ThemeIcon className="h-8 mx-auto mb-2" fill="#2B2B2B" />
      </div>
      <div className="flex justify-between w-full max-w-xs">
        <div
          className={`relative h-8 w-8 mx-auto mb-2 ${
            activeIcon === "home" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("home")}
        >
          <HomeIcon className="h-8 mx-auto mb-2" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-8 w-8 mx-auto mb-2 ${
            activeIcon === "formation" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("formation")}
        >
          <FormationIcon className="h-8 mx-auto mb-2" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-8 w-8 mx-auto mb-2 ${
            activeIcon === "work" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("work")}
        >
          <WorkIcon className="h-8 mx-auto mb-2" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-8 w-8 mx-auto mb-2 ${
            activeIcon === "recommandation" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("recommandation")}
        >
          <RecommandationIcon className="h-8 mx-auto mb-2" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-8 w-8 mx-auto mb-2 ${
            activeIcon === "projet" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("projet")}
        >
          <ProjetIcon className="h-8 mx-auto mb-2" fill="#2B2B2B" />
        </div>
        <div
          className={`relative h-8 w-8 mx-auto mb-2 ${
            activeIcon === "contact" ? "bg-yellow rounded-full" : ""
          } transition-all duration-300`}
          onClick={() => handleClick("contact")}
        >
          <ContactIcon className="h-8 mx-auto mb-2" fill="#2B2B2B" />
        </div>
      </div>
      <div>
        {/* Ajoutez les éléments de la barre de navigation à droite ici */}
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
