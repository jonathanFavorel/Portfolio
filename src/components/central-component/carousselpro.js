import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const [diplomas] = useState([
    {
      title: "Développeur Web",
      level: "FACIL - Saint-Amand-les-Eaux",
      date: "Février 2022 - Octobre 2024",
      description: `Engagé en alternance dans un programme BAC +3/4, je combine théorie et pratique. Cette expérience renforce mes compétences dans le développement de solutions logicielles et d'applications métiers, me préparant ainsi au monde professionnel de l'informatique.`,
    },
    {
      title: "Technicien HelpDesk",
      level: "ALTIMANCE - Anzin",
      date: "Juin 2021 - Aout 2021",
      description: `Chez Altimance, j'ai géré les demandes de trois clients importants : SCC, Expanscience et BEG. Ce rôle m'a permis de développer mes compétences en support technique et de m'adapter aux besoins variés de chaque client. J'ai appris à résoudre rapidement les problèmes, à gérer la pression et à maintenir une communication claire et efficace. Cette expérience a renforcé mes compétences en service client et en gestion de situations diverses.`,
    },
    {
      title: "Technicien HelpDesk",
      level: "Modis (Crédit du nord) - Lille",
      date: "Janvier 2021 - Avril 2021",
      description: `En tant que technicien helpdesk au Crédit du Nord à Lille,
      j'ai pris en charge les demandes des conseillers à
      l'échelle nationale.Cette expérience m'a permis de
      développer mes compétences en support technique, de
      renforcer ma capacité à résoudre des problèmes rapidement
      et de travailler efficacement sous pression.`,
    },
    {
      title: "Technicien HelpDesk",
      level: "Ecoburotic - Rouvignies",
      date: "Août 2018 - Avril 2020",
      description: `En tant que Technicien Help Desk chez ECOBUROTIC, j'ai été
      chargé de fournir un support technique efficace et de
      résoudre les problèmes liés à l'impression et aux
      consommables pour nos utilisateurs particuliers. Mon rôle
      exigeait une communication claire et empathique avec les
      utilisateurs, ainsi qu'une expertise technique pour
      résoudre rapidement les problèmes rencontrés.`,
    },
  ]);

  return (
    <div className="max-w-lg mx-auto py-8 mt-4 relative">
      {diplomas.map((diploma, index) => (
        <DiplomaCard
          key={index}
          diploma={diploma}
          isLast={index === diplomas.length - 1}
        />
      ))}
    </div>
  );
};

const DiplomaCard = ({ diploma, isLast }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white1 p-6 rounded-lg shadow-md mb-8 flex dark:bg-blackdark z-10"
      >
        <div className="flex-shrink-0 mr-6">
          {/* Placeholder pour une éventuelle icône ou marqueur */}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2 font-inter-medium dark:text-white1">
            {diploma.title}
          </h2>
          <p className=" mb-1 font-inter-medium dark:text-neutral-200">
            {diploma.level}
          </p>
          <p className=" mb-1 mt-4 font-inter-medium dark:text-neutral-500">
            <span className="bg-yellow text-white font-bold font-inter-medium rounded-full px-2 py-1 ">
              {diploma.date}
            </span>
          </p>

          <p className="text-gray-700 font-bold font-inter-medium dark:text-white1 mt-4">
            {diploma.description}
          </p>
        </div>
      </motion.div>
      {!isLast && (
        <motion.div
          initial={{ opacity: 0, y: 1000 }}
          animate={inView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 1000 }}
          transition={{ duration: 0.5 }}
          className="top-0 relative h-7 -mt-8 w-1 bg-yellow left-1/2 top-0 transform -translate-x-1/2 z-0"
        ></motion.div>
      )}
    </div>
  );
};

export default Timeline;
