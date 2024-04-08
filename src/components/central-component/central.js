import React, { useEffect } from "react";
import Ellipse1 from "../central-component/src/Ellipse12.svg";
import Ellipse2 from "../central-component/src/Ellipse13.svg";
import Ellipse3 from "../central-component/src/Ellipse15.svg";
import Ellipse4 from "../central-component/src/Ellipse16.svg";
import Polygon from "../central-component/src/Polygon1.svg";
import Rectangle1 from "../central-component/src/Rectangle51.svg";
import Rectangle2 from "../central-component/src/Rectangle52.svg";
import Arrow from "../central-component/src/arrow.svg";
import Me from "../central-component/src/me.svg";

const Central = () => {
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

  return (
    <div className="bg-white mr-36">
      <div className="bg-white1 p-0 mb-8 ml-8 mr-8 h-90 flex flex-grow relative overflow-hidden area">
        <div className="max-w-3xl flex-grow">
          <h1 className="text-4xl font-inter font-bold mb-16 mt-10 ml-8">
            Je m'appelle Jonathan Développeur{" "}
            <span className="text-yellow">Front-end</span>
          </h1>
          <div className="flex flex-col justify-between ml-8">
            <p className="text-base mb-32 font-inter-regular text-grey">
              Je suis un développeur front-end passionné par la création
              d'expériences utilisateur captivantes. Avec une expertise en HTML,
              CSS et JavaScript, ainsi qu'une maîtrise des frameworks comme
              React.js, Angular, je donne vie à des designs intuitifs et
              modernes. Parcourez mon portfolio pour découvrir comment je peux
              transformer vos idées en réalité !
            </p>
            <div className="-mt-16">
              <button className="bg-yellow hover:bg-yellow1 text-black font-bold py-3 px-6 rounded mb-4 flex items-center justify-center font-inter-medium">
                Engagez-moi
                <img src={Arrow} alt="" className="w-6 h-6 ml-2" />
              </button>
            </div>
          </div>
        </div>
        <img src={Me} alt="" className="ml-auto self-end" />
        <img
          src={Ellipse1}
          alt=""
          className="w-6 h-6 absolute animated-image"
          style={{ transition: "transform 0.5s ease-in-out" }}
        />
        <img
          src={Ellipse2}
          alt=""
          className="w-6 h-6 absolute animated-image"
          style={{ transition: "transform 0.5s ease-in-out" }}
        />
        <img
          src={Ellipse3}
          alt=""
          className="w-6 h-6 absolute animated-image"
          style={{ transition: "transform 0.2s ease-in-out" }}
        />
        <img
          src={Ellipse4}
          alt=""
          className="w-6 h-6 absolute animated-image"
          style={{ transition: "transform 0.2s ease-in-out" }}
        />
        <img
          src={Polygon}
          alt=""
          className="w-6 h-6 absolute animated-image"
          style={{ transition: "transform 0.4s ease-in-out" }}
        />
        <img
          src={Rectangle1}
          alt=""
          className="w-6 h-6 absolute animated-image"
          style={{
            transition: "transform 0.3s ease-in-out",
            top: Math.random() * 12 + "%",
            left: Math.random() * 12 + "%",
          }}
        />
        <img
          src={Rectangle2}
          alt=""
          className="w-6 h-6 absolute animated-image"
          style={{
            transition: "transform 0.3s ease-in-out",
            top: Math.random() * 10 + "%",
            left: Math.random() * 10 + "%",
          }}
        />
      </div>
      <div>
        <div className="text-center">
          <h2 className="font-inter text-3xl font-bold mb-4">Formations</h2>
          <p className="font-inter-regular text-base mb-6 px-64 text-grey">
            Mes compétences solides résultent de formations spécialisées et d'un
            apprentissage autodidacte. J'ai suivi des cours en HTML, CSS,
            JavaScript ainsi que des formations avancées sur les frameworks tels
            que React et Angular. Cette approche mixte m’a permis d'acquérir une
            expertise polyvalente en développement front-end.
          </p>
        </div>
        <div className="bg-white1 p-0 mb-8 ml-8 mr-8 h-90 flex flex-grow relative overflow-hidden">
          <div className="flex">
            {/* Tableau des diplômes */}
            <table className="w-full">
              {/* Première ligne du tableau */}
              <tr className="flex">
                {/* Première colonne pour les titres et les descriptions des diplômes */}
                <td className="w-3/4 p-8">
                  <div className="text-lg font-semibold">
                    <h2 className="text-lg font-inter-medium text-black">
                      BAC +3/4
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6">
                          Apprentissage
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1">
                            Oct 2023 - En cours
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Deuxième colonne pour les descriptions des diplômes */}
                <td className="w-3/4 p-4 pr-24">
                  <div className="mb-6">
                    <h3 className="text-lg font-inter-medium font-bold text-black mt-4">
                      Concepteur Développeur Nouvelles Technologies
                    </h3>
                    <p className="text-grey font-inter-regular mt-6">
                      Engagé en alternance dans un programme BAC +3/4, je
                      consolide théorie et pratique. Cette expérience renforce
                      mes compétences dans le développement de solutions
                      logicielles et d'applications métiers, me préparant ainsi
                      au monde professionnel de l'informatique.
                    </p>
                  </div>
                </td>
              </tr>
              {/* Ligne visuelle */}
              <div className="flex justify-center">
                <div className="border-b border-gray-300 w-full mx-8 mb-4"></div>
              </div>
              {/* Deuxième ligne du tableau */}
              <tr className="flex">
                {/* Première colonne pour les titres et les descriptions des diplômes */}
                <td className="w-3/4 p-8">
                  <div className="text-lg font-semibold">
                    <h2 className="text-lg font-inter-medium text-black">
                      Brevet de Technicien Supérieur
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6">
                          Aprentissage
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1 ">Juin 2020</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Deuxième colonne pour les descriptions des diplômes */}
                <td className="w-3/4 p-4 pr-24">
                  <div className="mb-4">
                    <h3 className="text-lg font-inter-medium font-bold text-black mt-4">
                      Services informatiques aux organisations option SLAM
                    </h3>
                    <p className="text-grey font-inter-regular mt-6">
                      Au cours de mon BTS SIO option SLAM en alternance, j'ai pu
                      conjuguer théorie et pratique, renforçant ainsi mes
                      compétences techniques et professionnelles. Cette
                      formation m'a doté d'une expertise solide dans le
                      développement de solutions logicielles et d'applications
                      métiers.
                    </p>
                  </div>
                </td>
              </tr>
              {/* Ligne visuelle */}
              <div className="flex justify-center">
                <div className="border-b border-gray-300 w-full mx-8 mb-4"></div>
              </div>
              {/* Deuxième ligne du tableau */}
              <tr className="flex">
                {/* Première colonne pour les titres et les descriptions des diplômes */}
                <td className="w-3/4 p-8">
                  <div className="text-lg font-semibold">
                    <h2 className="text-lg font-inter-medium text-black">
                      Technicien d’usinage
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6">
                          étudiant
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1">Juin 2016</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Deuxième colonne pour les descriptions des diplômes */}
                <td className="w-3/4 p-4 pr-24">
                  <div className="mb-4">
                    <h3 className="text-lg font-inter-medium font-bold text-black mt-4">
                      Baccalauréat Professionnel
                    </h3>
                    <p className="text-grey font-inter-regular mt-6">
                      Mon baccalauréat professionnel, obtenu avec mention Bien,
                      atteste de mon engagement soutenu et de ma détermination à
                      exceller dans mes études. Cette réussite démontre ma
                      capacité à mener à bien mes projets académiques avec
                      rigueur et sérieux.
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h2 className="font-inter text-3xl font-bold mb-4">
            Experience Professionnel
          </h2>
          <p className="font-inter-regular text-base mb-6 px-64 text-grey">
            Mon parcours professionnel diversifié m'a permis de développer mes
            compétences en HTML, CSS, JavaScript ainsi que sur des frameworks
            comme React et Angular. Cette combinaison d'expériences et
            d'apprentissage autodidacte a consolidé mon expertise en
            développement front-end.
          </p>
        </div>
        <div className="bg-white1 p-0 mb-8 ml-8 mr-8 h-90 flex flex-grow relative overflow-hidden">
          <div className="flex">
            {/* Tableau des diplômes */}
            <table className="w-full">
              {/* Première ligne du tableau */}
              <tr className="flex">
                {/* Première colonne pour les titres et les descriptions des diplômes */}
                <td className="w-3/4 p-8">
                  <div className="text-lg font-semibold">
                    <h2 className="text-lg font-inter-medium text-black">
                      Développeur Web
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6">
                          Apprentissage
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1">
                            Janvier 2022 - Actuellement
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Deuxième colonne pour les descriptions des diplômes */}
                <td className="w-3/4 p-4 pr-24">
                  <div className="mb-6">
                    <h3 className="text-lg font-inter-medium font-bold text-black mt-4">
                      FACIL - Saint-Amand-les-Eaux
                    </h3>
                    <p className="text-grey font-inter-regular mt-6">
                      Chez FACIL, j'ai développé des applications métier avec
                      Windev ainsi que des sites web en utilisant Webdev et
                      Next.js. J'ai également travaillé sur la manipulation de
                      bases de données et d'API REST, enrichissant ainsi mes
                      compétences en développement informatique.
                    </p>
                  </div>
                </td>
              </tr>
              {/* Ligne visuelle */}
              <div className="flex justify-center">
                <div className="border-b border-gray-300 w-full mx-8 mb-4"></div>
              </div>
              {/* Deuxième ligne du tableau */}
              <tr className="flex">
                {/* Première colonne pour les titres et les descriptions des diplômes */}
                <td className="w-3/4 p-8">
                  <div className="text-lg font-semibold">
                    <h2 className="text-lg font-inter-medium text-black">
                      Technicien HelpDesk
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6">
                          Employé
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1 ">
                            Janvier 2021 - 24 Avril 2021
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Deuxième colonne pour les descriptions des diplômes */}
                <td className="w-3/4 p-4 pr-24">
                  <div className="mb-4">
                    <h3 className="text-lg font-inter-medium font-bold text-black mt-4">
                      Modis (Crédit du nord) - Lille
                    </h3>
                    <p className="text-grey font-inter-regular mt-6">
                      En tant que technicien helpdesk au Crédit du Nord à Lille,
                      j'ai traité les demandes des conseillers à l'échelle
                      nationale, couvrant divers problèmes allant des
                      imprimantes aux applications métier, avec une escalade au
                      niveau 2 si nécessaire.
                    </p>
                  </div>
                </td>
              </tr>
              {/* Ligne visuelle */}
              <div className="flex justify-center">
                <div className="border-b border-gray-300 w-full mx-8 mb-4"></div>
              </div>
              {/* Deuxième ligne du tableau */}
              <tr className="flex">
                {/* Première colonne pour les titres et les descriptions des diplômes */}
                <td className="w-3/4 p-8">
                  <div className="text-lg font-semibold">
                    <h2 className="text-lg font-inter-medium text-black">
                      Développeur Web
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6">
                          Aprentissage
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1">
                            Août 2018 - Août 2020
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Deuxième colonne pour les descriptions des diplômes */}
                <td className="w-3/4 p-4 pr-24">
                  <div className="mb-4">
                    <h3 className="text-lg font-inter-medium font-bold text-black mt-4">
                      Ecoburotic - Rouvignies
                    </h3>
                    <p className="text-grey font-inter-regular mt-6">
                      J'ai contribué au développement du site vitrine de
                      l'entreprise en utilisant principalement HTML et CSS, avec
                      une touche de PHP. Ma participation active à ce projet m'a
                      permis de créer une interface web attrayante et
                      fonctionnelle, reflétant ainsi l'image de l'entreprise.
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Central;
