import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const [diplomas] = useState([
    {
      title: "Concepteur Développeur Nouvelles Technologies",
      level: "BAC +3/4",
      date: "Oct 2022 - En cours",
      description: `Engagé en alternance dans un programme BAC +3/4, je combine théorie et pratique. Cette expérience renforce mes compétences dans le développement de solutions logicielles et d'applications métiers, me préparant ainsi au monde professionnel de l'informatique.`,
    },
    {
      title: "Services informatiques aux organisations option SLAM",
      level: "Brevet de Technicien Supérieur",
      date: "Juin 2020",
      description: `Au cours de mon BTS SIO option SLAM en alternance, j'ai pu conjuguer théorie et pratique, renforçant ainsi mes compétences techniques et professionnelles. Cette formation m'a doté d'une expertise solide dans le développement de solutions logicielles et d'applications métiers.`,
    },
    {
      title: "Technicien d’usinage",
      level: "Baccalauréat Professionnel",
      date: "Juin 2018",
      description: `Mon baccalauréat professionnel, obtenu avec mention Bien,
      témoigne de mon engagement soutenu et de ma détermination
      à exceller dans mes études. Cette réussite démontre ma
      capacité à mener à bien mes projets académiques avec
      rigueur et sérieux.`,
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
