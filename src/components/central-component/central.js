import React, { useEffect, useState } from "react";
import Ellipse1 from "../central-component/src/Ellipse12.svg";
import Ellipse2 from "../central-component/src/Ellipse13.svg";
import Ellipse3 from "../central-component/src/Ellipse15.svg";
import Ellipse4 from "../central-component/src/Ellipse16.svg";
import Polygon from "../central-component/src/Polygon1.svg";
import profile from "../central-component/src/Profile.png";
import profile2 from "../central-component/src/Profile2.png";
import Rectangle1 from "../central-component/src/Rectangle51.svg";
import Rectangle2 from "../central-component/src/Rectangle52.svg";
import Arrow from "../central-component/src/arrow.svg";
import Me from "../central-component/src/me.svg";
import point from "../central-component/src/point.svg";
import projectoverlay from "../central-component/src/projectoverlay.svg";
import projet1 from "../central-component/src/projet1.png";
import projet2 from "../central-component/src/projet2.png";
import projet3 from "../central-component/src/projet3.png";
import stars from "../central-component/src/stars.svg";
import starsgrey from "../central-component/src/starsgrey.svg";

const Central = () => {
  const mailtoLink =
    "mailto:favorel.jonathan@outlook.fr?subject=Engagement&body=Bonjour Jonathan,%0D%0A%0D%0ANom de l'entreprise : [Votre Entreprise]%0D%0ANom du recruteur : [Votre Nom]%0D%0A%0D%0AJe suis intéressé par votre profil et j'aimerais discuter d'une opportunité au sein de notre équipe.%0D%0A%0D%0ACordialement,%0D%0A[Votre Nom]%0D%0A[Votre Poste]%0D%0A[Votre Numéro de Téléphone]";
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
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
        const container = document.querySelector(".area");
        const maxX = container.clientWidth - image.clientWidth;
        const maxY = container.clientHeight - image.clientHeight;
        const initialX = Math.random() * maxX;
        const initialY = Math.random() * maxY;
        image.style.transform = `translate(${initialX}px, ${initialY}px)`;
      });

      images.forEach((image) => {
        moveImage(image);
      });
    };

    animateImages();
  }, []);

  return (
    <div className="bg-white mr-36 -ml-4 dark:bg-blackbg  hidden sm:block">
      <section id="home">
        <div className="bg-white1 p-0 mb-8 ml-8 mr-8 h-90 flex flex-grow relative overflow-hidden area dark:bg-blackdark">
          <div className="max-w-3xl flex-grow relative z-10 ">
            <h1 className="text-4xl font-inter font-bold mb-16 mt-10 ml-8 dark:text-white1">
              Je m'appelle Jonathan <br></br>Développeur{" "}
              <span className="text-yellow">Front-end</span>
            </h1>
            <div className="flex flex-col justify-between ml-8">
              <p className="text-base mb-32 font-inter-regular text-grey dark:text-white">
                Je suis un développeur front-end passionné par la création
                d'expériences utilisateur engageantes. Maîtrisant HTML, CSS et
                JavaScript, ainsi que des frameworks tels que React.js et
                Angular, je transforme des concepts en interfaces intuitives et
                modernes
              </p>
              <div className="-mt-16">
                <a href={mailtoLink} className="no-underline">
                  <button
                    className="bg-yellow hover:bg-yellow1 text-white font-bold py-3 px-6 rounded mb-4 flex items-center justify-center font-inter-medium dark:text-white"
                    onClick={() => smoothScroll("contact")}
                  >
                    Engagez-moi
                    <img
                      src={Arrow}
                      alt=""
                      className="w-6 h-6 ml-2 invert filter"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <img src={Me} alt="" className="ml-auto self-end z-10" />
          <img
            src={Ellipse1}
            alt=""
            className="w-6 h-6 absolute animated-image z-0"
            style={{ transition: "transform 0.5s ease-in-out" }}
            data-x="10"
            data-y="0"
          />
          <img
            src={Ellipse2}
            alt=""
            className="w-6 h-6 absolute animated-image z-0 top-20"
            style={{ transition: "transform 0.5s ease-in-out" }}
            data-x="20"
            data-y="300"
          />
          <img
            src={Ellipse3}
            alt=""
            className="w-6 h-6 absolute animated-image z-0 top-5"
            style={{ transition: "transform 0.2s ease-in-out" }}
            data-x="300"
            data-y="100"
          />
          <img
            src={Ellipse4}
            alt=""
            className="w-6 h-6 absolute animated-image z-0 top-8"
            style={{ transition: "transform 0.2s ease-in-out" }}
            data-x="400"
            data-y="200"
          />
          <img
            src={Polygon}
            alt=""
            className="w-6 h-6 absolute animated-image z-0 top-2"
            style={{ transition: "transform 0.4s ease-in-out" }}
            data-x="150"
            data-y="400"
          />
          <img
            src={Rectangle1}
            alt=""
            className="w-6 h-6 absolute animated-image z-0 top-6"
            style={{ transition: "transform 0.3s ease-in-out" }}
            data-x="250"
            data-y="350"
          />
          <img
            src={Rectangle2}
            alt=""
            className="w-6 h-6 absolute animated-image z-0 top-8"
            style={{ transition: "transform 0.3s ease-in-out" }}
            data-x="50"
            data-y="250"
          />
        </div>
      </section>

      <div className="mb-32">
        <div className="text-center">
          <h2 className="font-inter text-3xl font-bold mb-4 dark:text-white">
            Formations
          </h2>
          <p className="font-inter-regular text-base mb-6 px-64 text-grey dark:text-white">
            Mes compétences solides résultent d'un parcours académique
            diversifié et d'un apprentissage autodidacte. J'ai suivi des études
            approfondies dans divers domaines technologiques, complétées par des
            cours spécialisés en développement web. Cette approche mixte m’a
            permis d'acquérir une expertise polyvalente et une compréhension
            approfondie des technologies modernes
          </p>
        </div>
        <section id="formation">
          <div className="bg-white1 p-0 mb-16 ml-8 mr-8 h-90 flex flex-grow relative overflow-hidden dark:bg-blackdark">
            <div className="flex">
              {/* Tableau des diplômes */}
              <table className="w-full">
                {/* Première ligne du tableau */}
                <tr className="flex">
                  {/* Première colonne pour les titres et les descriptions des diplômes */}
                  <td className="w-3/4 p-8">
                    <div className="text-lg font-semibold">
                      <h2 className="text-lg font-inter-medium text-black dark:text-white">
                        BAC +3/4
                      </h2>
                      <div className="flex justify-between">
                        <div className="flex justify-between items-center">
                          <h2 className="text-sm font-inter-regular text-black mr-4 mt-6 dark:text-white">
                            Apprentissage
                          </h2>
                          <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                            <h6 className="text-xs text-white1 dark:text-white1">
                              Oct 2022 - En cours
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* Deuxième colonne pour les descriptions des diplômes */}
                  <td className="w-3/4 p-4 pr-24">
                    <div className="mb-6">
                      <h3 className="text-lg font-inter-medium font-bold text-black mt-4 dark:text-white">
                        Concepteur Développeur Nouvelles Technologies
                      </h3>
                      <p className="text-grey font-inter-regular mt-6 dark:text-white">
                        Engagé en alternance dans un programme BAC +3/4, je
                        combine théorie et pratique. Cette expérience renforce
                        mes compétences dans le développement de solutions
                        logicielles et d'applications métiers, me préparant
                        ainsi au monde professionnel de l'informatique.
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
                      <h2 className="text-lg font-inter-medium text-black dark:text-white">
                        Brevet de Technicien Supérieur
                      </h2>
                      <div className="flex justify-between">
                        <div className="flex justify-between items-center">
                          <h2 className="text-sm font-inter-regular text-black mr-4 mt-6 dark:text-white">
                            Aprentissage
                          </h2>
                          <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                            <h6 className="text-xs text-white1 dark:text-white1">
                              Juin 2020
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* Deuxième colonne pour les descriptions des diplômes */}
                  <td className="w-3/4 p-4 pr-24">
                    <div className="mb-4">
                      <h3 className="text-lg font-inter-medium font-bold text-black mt-4 dark:text-white">
                        Services informatiques aux organisations option SLAM
                      </h3>
                      <p className="text-grey font-inter-regular mt-6 dark:text-white">
                        Au cours de mon BTS SIO option SLAM en alternance, j'ai
                        pu conjuguer théorie et pratique, renforçant ainsi mes
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
                      <h2 className="text-lg font-inter-medium text-black dark:text-white">
                        Technicien d’usinage
                      </h2>
                      <div className="flex justify-between">
                        <div className="flex justify-between items-center">
                          <h2 className="text-sm font-inter-regular text-black mr-4 mt-6 dark:text-white">
                            Étudiant
                          </h2>
                          <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                            <h6 className="text-xs text-white1 dark:text-white1">
                              Juin 2018
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* Deuxième colonne pour les descriptions des diplômes */}
                  <td className="w-3/4 p-4 pr-24 formation">
                    <div className="mb-4">
                      <h3 className="text-lg font-inter-medium font-bold text-black mt-4 dark:text-white">
                        Baccalauréat Professionnel
                      </h3>
                      <p className="text-grey font-inter-regular mt-6 dark:text-white">
                        Mon baccalauréat professionnel, obtenu avec mention
                        Bien, témoigne de mon engagement soutenu et de ma
                        détermination à exceller dans mes études. Cette réussite
                        démontre ma capacité à mener à bien mes projets
                        académiques avec rigueur et sérieux.
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="text-center">
          <h2 className="font-inter text-3xl font-bold mb-4  dark:text-white">
            Experience Professionnel
          </h2>
          <p className="font-inter-regular text-base mb-6 px-64 text-grey dark:text-white">
            Mon parcours professionnel diversifié m'a permis de développer mes
            compétences en HTML, CSS, JavaScript, ainsi que sur des frameworks
            comme React et Angular. Cette combinaison d'expériences et
            d'apprentissage autodidacte a consolidé mon expertise en
            développement front-end.
          </p>
        </div>
        <div className="bg-white1 p-0 mb-8 ml-8 mr-8 h-90 flex flex-grow relative overflow-hidden dark:bg-blackdark">
          <div className="flex">
            {/* Tableau des diplômes */}
            <table className="w-full">
              {/* Première ligne du tableau */}
              <tr className="flex">
                {/* Première colonne pour les titres et les descriptions des diplômes */}
                <td className="w-3/4 p-8">
                  <div className="text-lg font-semibold">
                    <h2 className="text-lg font-inter-medium text-black dark:text-white">
                      Développeur Web
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6 dark:text-white">
                          Apprentissage
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1 dark:text-white1">
                            Février 2022 - Actuellement
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Deuxième colonne pour les descriptions des diplômes */}
                <td className="w-3/4 p-4 pr-24">
                  <div className="mb-6">
                    <h3 className="text-lg font-inter-medium font-bold text-black mt-4 dark:text-white">
                      FACIL - Saint-Amand-les-Eaux
                    </h3>
                    <p className="text-grey font-inter-regular mt-6 dark:text-white">
                      Chez FACIL, j'ai travaillé sur le développement de
                      diverses applications métier. En parallèle, j'ai créé et
                      maintenu des sites web en Next.js. Cette expérience m'a
                      permis d'enrichir mes compétences en développement
                      informatique, de comprendre les besoins des utilisateurs
                      finaux et de collaborer efficacement avec les équipes de
                      projet.
                    </p>
                  </div>
                </td>
              </tr>
              {/* Ligne visuelle */}
              <div className="flex justify-center">
                <div className="border-b border-gray-300 w-full mx-8 mb-4"></div>
              </div>
              <tr className="flex">
                {/* Première colonne pour les titres et les descriptions des diplômes */}
                <td className="w-3/4 p-8">
                  <div className="text-lg font-semibold">
                    <h2 className="text-lg font-inter-medium text-black dark:text-white">
                      Technicien HelpDesk
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6 dark:text-white">
                          Employé
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1 dark:text-white1">
                            Juin 2021 - Aout 2021
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Deuxième colonne pour les descriptions des diplômes */}
                <td className="w-3/4 p-4 pr-24">
                  <section id="work">
                    <div className="mb-4">
                      <h3 className="text-lg font-inter-medium font-bold text-black mt-4 dark:text-white">
                        Altimance - Anzin
                      </h3>

                      <p className="text-grey font-inter-regular mt-6 dark:text-white">
                        Chez Altimance, j'ai géré les demandes de trois clients
                        importants : SCC, Expanscience et BEG. Ce rôle m'a
                        permis de développer mes compétences en support
                        technique et de m'adapter aux besoins variés de chaque
                        client. J'ai appris à résoudre rapidement les problèmes,
                        à gérer la pression et à maintenir une communication
                        claire et efficace. Cette expérience a renforcé mes
                        compétences en service client et en gestion de
                        situations diverses.
                      </p>
                    </div>
                  </section>
                </td>
              </tr>
              {/* Deuxième ligne du tableau */}
              <div className="flex justify-center">
                <div className="border-b border-gray-300 w-full mx-8 mb-4"></div>
              </div>
              <tr className="flex">
                {/* Première colonne pour les titres et les descriptions des diplômes */}
                <td className="w-3/4 p-8">
                  <div className="text-lg font-semibold">
                    <h2 className="text-lg font-inter-medium text-black dark:text-white">
                      Technicien HelpDesk
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6 dark:text-white">
                          Employé
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1 dark:text-white1">
                            Janvier 2021 - Avril 2021
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Deuxième colonne pour les descriptions des diplômes */}
                <td className="w-3/4 p-4 pr-24">
                  <div className="mb-4">
                    <h3 className="text-lg font-inter-medium font-bold text-black mt-4 dark:text-white">
                      Modis (Crédit du nord) - Lille
                    </h3>

                    <p className="text-grey font-inter-regular mt-6 dark:text-white">
                      En tant que technicien helpdesk au Crédit du Nord à Lille,
                      j'ai pris en charge les demandes des conseillers à
                      l'échelle nationale.Cette expérience m'a permis de
                      développer mes compétences en support technique, de
                      renforcer ma capacité à résoudre des problèmes rapidement
                      et de travailler efficacement sous pression.
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
                    <h2 className="text-lg font-inter-medium text-black dark:text-white">
                      Développeur Web
                    </h2>
                    <div className="flex justify-between">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm font-inter-regular text-black mr-4 mt-6 dark:text-white">
                          Aprentissage
                        </h2>
                        <div className="rounded bg-yellow p-1 pt-0 pb-0 mt-5">
                          <h6 className="text-xs text-white1 dark:text-white1">
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
                    <h3 className="text-lg font-inter-medium font-bold text-black mt-4 dark:text-white">
                      Ecoburotic - Rouvignies
                    </h3>
                    <p className="text-grey font-inter-regular mt-6 dark:text-white">
                      Chez Ecoburotic, j'ai contribué au développement du site
                      vitrine de l'entreprise en utilisant principalement HTML
                      et CSS, avec une touche de PHP.Cette expérience m'a permis
                      de renforcer mes compétences en développement front-end et
                      d'acquérir une bonne compréhension des bonnes pratiques de
                      conception web.
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="">
        <section id="recommandation">
          <div className="text-center">
            <h2 className="font-inter text-3xl font-bold mb-16 mt-16 dark:text-white">
              Recommandations
            </h2>
          </div>
          <div className="bg-white p-0 mb-8 ml-8 mr-8 h-90 flex flex-grow relative overflow-hidden dark:bg-blackbg sm:-mr-2 sm:ml-16">
            <div class="flex flex-wrap justify-center mx-auto overflow-x-auto">
              <div class="max-w-md bg-white1 rounded-lg overflow-hidden shadow-lg dark:bg-blackdark sm:mr-16 sm:mb-4">
                <div class="flex mx-auto mb-2 ml-8 mt-4">
                  <img src={stars} alt="Titre" class="h-6 mr-4" />
                  <img src={stars} alt="Titre" class="h-6 mr-4" />
                  <img src={stars} alt="Titre" class="h-6 mr-4" />
                  <img src={stars} alt="Titre" class="h-6 mr-4" />
                  <img src={starsgrey} alt="Titre" class="h-6" />
                </div>
                <div class="px-6 py-4 ml-4">
                  <h2 class="text-black font-bold text-base mb-2 font-inter-medium dark:text-white">
                    sérieux et investi !
                  </h2>
                  <p class="text-grey text-base font-inter-extra-light dark:text-white">
                    “Jonathan a réussi a s’adapter à une équipe en place et à
                    intervenir sur un environnement client complexe.”
                  </p>
                  <div class="flex items-center mt-8">
                    <img
                      alt=""
                      src={profile}
                      class="h-24 w-24 rounded-full mr-4"
                    />
                    <div>
                      <p class="font-bold font-inter-medium text-lg dark:text-white">
                        Florian Jauffrion
                      </p>
                      <p class="text-sm text-grey font-inter-light dark:text-white">
                        Supérviseur équipe
                      </p>
                      <p class="text-sm text-grey font-inter-light dark:text-white">
                        Altimance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="max-w-md bg-white1 rounded-lg overflow-hidden shadow-lg dark:bg-blackdark sm:mr-16 sm:mb-4">
                <div class="flex mx-auto mb-2 ml-8 mt-4">
                  <img src={stars} alt="Titre" class="h-6 mr-4" />
                  <img src={stars} alt="Titre" class="h-6 mr-4" />
                  <img src={stars} alt="Titre" class="h-6 mr-4" />
                  <img src={stars} alt="Titre" class="h-6 mr-4" />
                  <img src={starsgrey} alt="Titre" class="h-6" />
                </div>
                <div class="px-6 py-4 ml-4">
                  <h2 class="text-black font-bold text-base mb-2 font-inter-medium dark:text-white">
                    Souci du détail !
                  </h2>
                  <p class="text-grey text-base font-inter-extra-light dark:text-white">
                    “Jonathan est un développeur passionné et très créatif, qui
                    a le souci du détail et l'envie de bien faire. Il est à
                    l'écoute et sait s'adapter aux besoins du projet.”
                  </p>
                  <div class="flex items-center mt-8">
                    <img
                      alt=""
                      src={profile2}
                      class="h-24 w-24 rounded-full mr-4 object-cover object-center"
                    />
                    <div>
                      <p class="font-bold font-inter-medium text-lg dark:text-white">
                        Nicolas Petey
                      </p>
                      <p class="text-sm text-grey font-inter-light dark:text-white">
                        Lead Dev
                      </p>
                      <p class="text-sm text-grey font-inter-light dark:text-white">
                        FACIL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center space-x-2 mt-8 ">
            <img src={point} alt="" class="h-2 w-auto" />
            <img src={point} alt="" class="h-2 w-auto" />
            <img src={point} alt="" class="h-2 w-auto" />
          </div>
        </section>
      </div>

      <div>
        <div className="text-center">
          <h2 className="font-inter text-3xl font-bold mb-4 mt-16 mb-12 dark:text-white">
            Portfolio
          </h2>
          <p className="font-inter-regular text-base mb-6 px-64 text-grey dark:text-white">
            Dans mes projets personnels, j'ai utilisé HTML, CSS, et JavaScript
            pour créer des sites web interactifs. J'ai également travaillé avec
            React et Angular pour développer des applications dynamiques. Cette
            expérience m'a permis de consolider mon expertise en développement
            front-end.
          </p>
        </div>

        <div className="mb-16 sm:ml-0 sm:mr-4">
          <div className="flex justify-center mt-16">
            <ProjectImage src={projet1} alt="Description de l'image 1" />
            <ProjectImage src={projet2} alt="Description de l'image 2" />
            <ProjectImage src={projet3} alt="Description de l'image 3" />
          </div>

          <section id="projet">
            <div className="flex justify-center mt-8">
              <ProjectImage src={projet1} alt="Description de l'image 1" />
              <ProjectImage src={projet2} alt="Description de l'image 2" />
              <ProjectImage src={projet3} alt="Description de l'image 3" />
            </div>
          </section>

          <div className="flex justify-center mt-8">
            <ProjectImage src={projet1} alt="Description de l'image 1" />
            <ProjectImage src={projet2} alt="Description de l'image 2" />
            <ProjectImage src={projet3} alt="Description de l'image 3" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="max-w-lg w-full"></div>
      </div>
      <footer className="bg-white1 text-black text-center py-4 -z-1 dark:bg-blackdark dark:text-white">
        2024 All Rights Reserved. Jonathan Favorel
      </footer>
    </div>
  );
};

export default Central;
