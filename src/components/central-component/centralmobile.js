import React, { useEffect, useState } from "react";
import ArrowRightDark from "../central-component/src/arrow1.svg";
import ArrowRightLight from "../central-component/src/arrow1light.svg";
import projectoverlay from "../central-component/src/projectoverlay.svg";
import projet1 from "../central-component/src/projet1.png";
import projet2 from "../central-component/src/projet2.png";
import projet3 from "../central-component/src/projet3.png";
import {
  default as WhiteDark,
  default as WhiteLight,
} from "../central-component/src/white.png"; // Importez votre image de fond pour le mode sombre
import Carousel from "./carousselformation";
import Carouselpro from "./carousselpro";
import Recommandation from "./recommandation";

const MyComponent = ({ isDarkMode }) => {
  const ProjectImage = ({ src, alt }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative mx-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ backgroundColor: "transparent" }}
      >
        <img src={src} alt={alt} className="w-100 h-100 object-cover" />
        {isHovered && (
          <div className="absolute inset-0 opacity-80 flex items-center justify-center">
            <img className="text-white" src={projectoverlay} alt="Overlay" />
          </div>
        )}
      </div>
    );
  };
  useEffect(() => {
    const moveImage = (image) => {
      const container = document.querySelector(".area");
      const maxX = container.clientWidth - image.clientWidth;
      const maxY = container.clientHeight - image.clientHeight;
      let x = Math.random() * maxX;
      let y = Math.random() * maxY;
      let vx = Math.random() * 2 - 1;
      let vy = Math.random() * 2 - 1;

      const updatePosition = () => {
        x += vx;
        y += vy;
        if (x < 0 || x > maxX) {
          vx *= -1;
          x = Math.max(0, Math.min(maxX, x)); // Ensure x stays within bounds
        }
        if (y < 0 || y > maxY) {
          vy *= -1;
          y = Math.max(0, Math.min(maxY, y)); // Ensure y stays within bounds
        }
        image.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(updatePosition);
      };

      requestAnimationFrame(updatePosition);
    };

    const animateImages = () => {
      const images = document.querySelectorAll(".animated-image");
      images.forEach((image) => {
        moveImage(image);
      });
    };

    animateImages();
  }, []);

  // Déterminez la valeur de l'opacité en fonction du thème
  const opacity = isDarkMode ? 0.1 : 0.5;

  // Déterminez l'image de flèche en fonction du thème
  const arrowImage = isDarkMode ? ArrowRightDark : ArrowRightLight;

  const mailtoLink =
    "mailto:favorel.jonathan@outlook.fr?subject=Engagement&body=Bonjour Jonathan,%0D%0A%0D%0ANom de l'entreprise : [Votre Entreprise]%0D%0ANom du recruteur : [Votre Nom]%0D%0A%0D%0AJe suis intéressé par votre profil et j'aimerais discuter d'une opportunité au sein de notre équipe.%0D%0A%0D%0ACordialement,%0D%0A[Votre Nom]%0D%0A[Votre Poste]%0D%0A[Votre Numéro de Téléphone]";

  return (
    <div className="fixed mt-16 right-0 h-screen overflow-y-auto mx-8 sm:hidden">
      {/* Div avec du texte */}
      <div
        className="relative bg-white1 p-4 rounded-md transition-height duration-500 mt-14 dark:bg-blackbg"
        style={{
          backgroundImage: `url(${isDarkMode ? WhiteDark : WhiteLight})`, // Utilisez une image de fond différente en fonction du mode sombre
          backgroundSize: "cover", // Définissez la taille de l'image de fond
          backgroundPosition: "center", // Centrez l'image de fond
        }}
      >
        {/* Couche d'arrière-plan avec opacité */}
        <div
          className="absolute inset-0 bg-white1 rounded-md dark:bg-blackbg"
          style={{ opacity }} // Appliquez l'opacité définie
        ></div>

        {/* Contenu textuel au-dessus de la couche d'arrière-plan */}
        <div className="relative z-10">
          <h1 className="text-2xl font-inter font-bold mb-10 mt-4 ml-8 text-center dark:text-white1">
            Je m'appelle Jonathan <br></br>Développeur{" "}
            <span className="text-yellow">Front-end</span>
          </h1>
          <p className="text-base mb-2 font-inter-regular text-center dark:text-white">
            Je suis un développeur front-end passionné par la création
            d'expériences utilisateur engageantes. Maîtrisant HTML, CSS et
            JavaScript, ainsi que des frameworks tels que React.js et Angular,
            je transforme des concepts en interfaces intuitives et modernes
          </p>

          {/* Bouton centré */}
          <div className="flex justify-center">
            <a href={mailtoLink} className="no-underline">
              <button className="bg-yellow hover:bg-yellow1 text-white font-bold py-2 px-4 rounded-full mt-4 flex items-center">
                Engagez-moi
                <img src={arrowImage} className="ml-2 h-10" alt="Arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Texte sous la div */}
      <h2 className="font-inter text-3xl font-bold mt-10 text-center dark:text-white">
        Formations
      </h2>
      {/* Ajout de la nouvelle div */}
      <div className="text-center mt-6">
        {/* Contenu de la nouvelle div */}
        <p className="text-grey font-inter-regular dark:text-white">
          Mes compétences solides résultent d'un parcours académique diversifié
          et d'un apprentissage autodidacte. J'ai suivi des études approfondies
          dans divers domaines technologiques, complétées par des cours
          spécialisés en développement web. Cette approche mixte m’a permis
          d'acquérir une expertise polyvalente et une compréhension approfondie
          des technologies modernes
        </p>
      </div>
      <div className="container mx-auto flex justify-center">
        <Carousel />
      </div>
      <h2 className="font-inter text-3xl font-bold mt-10 text-center dark:text-white">
        Experience Professionnel
      </h2>
      {/* Ajout de la nouvelle div */}
      <div className="text-center mt-6">
        {/* Contenu de la nouvelle div */}
        <p className="text-grey font-inter-regular dark:text-white">
          Mon parcours professionnel diversifié m'a permis de développer mes
          compétences en HTML, CSS, JavaScript, ainsi que sur des frameworks
          comme React et Angular. Cette combinaison d'expériences et
          d'apprentissage autodidacte a consolidé mon expertise en développement
          front-end.
        </p>
      </div>
      <div className="container mx-auto flex justify-center">
        <Carouselpro />
      </div>
      <div>
        <Recommandation />
        <div className="sm:ml-0 sm:mr-4">
          <h2 className="font-inter text-3xl text-center font-bold mb-4 mt-16 mb-12 dark:text-white">
            Portfolio
          </h2>
          <p className="font-inter-regular text-center text-base text-grey dark:text-white">
            Dans mes projets personnels, j'ai utilisé HTML, CSS, et JavaScript
            pour créer des sites web interactifs. J'ai également travaillé avec
            React et Angular pour développer des applications dynamiques. Cette
            expérience m'a permis de consolider mon expertise en développement
            front-end.
          </p>
          <div className="flex justify-center mt-16">
            <ProjectImage src={projet1} alt="Description de l'image 1" />
          </div>
          <div className="flex justify-center mt-8">
            <ProjectImage src={projet2} alt="Description de l'image 2" />
          </div>
          <div className="flex justify-center mt-8">
            <ProjectImage src={projet3} alt="Description de l'image 3" />
          </div>
        </div>
      </div>
      <div className="bg-white1 text-black text-center py-4 -z-1 mt-10 mb-52 dark:bg-blackdark dark:text-white">
        2024 All Rights Reserved. Jonathan Favorel
      </div>
    </div>
  );
};

export default MyComponent;
