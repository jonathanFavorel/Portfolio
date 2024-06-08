import { useEffect, useState } from "react";

const useScrollSpy = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const formationSection = document.getElementById("formation");
      const workSection = document.getElementById("work");
      const recommandationSection = document.getElementById("recommandation");
      const projetSection = document.getElementById("projet");
      const contactSection = document.getElementById("contact");

      const sections = [
        { id: "home", ref: homeSection },
        { id: "formation", ref: formationSection },
        { id: "work", ref: workSection },
        { id: "recommandation", ref: recommandationSection },
        { id: "projet", ref: projetSection },
        { id: "contact", ref: contactSection },
      ];

      const { top: navTop } = document
        .querySelector("nav")
        .getBoundingClientRect();

      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach(({ id, ref }) => {
        if (ref) {
          const distance = Math.abs(ref.getBoundingClientRect().top - navTop);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      setActiveIcon(closestSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeIcon;
};

export default useScrollSpy;
