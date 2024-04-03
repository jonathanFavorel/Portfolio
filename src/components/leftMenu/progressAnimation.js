// progressAnimations.js
import { useEffect, useState } from "react";

const useProgressAnimations = () => {
  const [progressWidths, setProgressWidths] = useState({
    html: 0,
    css: 0,
    js: 0,
  });
  const [languageProgress, setLanguageProgress] = useState({
    french: 0,
    english: 0,
  });

  const startAnimations = async () => {
    // Charger les barres de progression de manière asynchrone
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simuler une attente de 500ms

    const maxProgress = { html: 90.5, css: 85.5, js: 70.5 };
    const maxLanguageProgress = { french: 98, english: 60 };

    const intervalId = setInterval(() => {
      // Mettre à jour les barres de progression HTML, CSS et JS
      setProgressWidths((prevProgress) => {
        const nextProgress = {
          html: Math.min(prevProgress.html + 1, maxProgress.html),
          css: Math.min(prevProgress.css + 1, maxProgress.css),
          js: Math.min(prevProgress.js + 1, maxProgress.js),
        };
        return nextProgress;
      });

      // Mettre à jour les barres de progression des langues
      setLanguageProgress((prevProgress) => {
        const nextProgress = {
          french: Math.min(prevProgress.french + 1, maxLanguageProgress.french),
          english: Math.min(
            prevProgress.english + 1,
            maxLanguageProgress.english
          ),
        };
        return nextProgress;
      });

      // Arrêter les animations lorsque les barres atteignent leur valeur maximale
      if (
        progressWidths.html >= maxProgress.html &&
        progressWidths.css >= maxProgress.css &&
        progressWidths.js >= maxProgress.js &&
        languageProgress.french >= maxLanguageProgress.french &&
        languageProgress.english >= maxLanguageProgress.english
      ) {
        clearInterval(intervalId);
      }
    }, 1); // La vitesse d'incrémentation contrôle la fluidité de l'animation
  };

  useEffect(() => {
    // Démarrer les animations lors du chargement de la page
    startAnimations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    progressWidths,
    languageProgress,
    startAnimations, // Expose startAnimations as part of the return value
  };
};

export default useProgressAnimations;
