import profile from "../central-component/src/Profile.png";
import profile2 from "../central-component/src/Profile2.png";
import stars from "../central-component/src/stars.svg";
import starsgrey from "../central-component/src/starsgrey.svg";

const RecommendationCard = ({
  starsCount,
  text,
  name,
  position,
  company,
  description,
  profileImage,
}) => (
  <div className="max-w-2xl mb-5 bg-white1 rounded-lg overflow-hidden shadow-lg dark:bg-blackdark">
    <div className="flex mx-auto mb-4 ml-8 mt-4">
      {[...Array(starsCount)].map((_, index) => (
        <img key={index} src={stars} alt="Star" className="h-6 mr-4" />
      ))}
      {[...Array(5 - starsCount)].map((_, index) => (
        <img key={index} src={starsgrey} alt="Star" className="h-6 mr-4" />
      ))}
    </div>
    <div className="px-6 py-4 ml-4">
      <h2 className="text-black font-bold text-base mb-2 font-inter-medium dark:text-white dark:bg-blackdark">
        {text}
      </h2>
      <p className="text-grey text-base font-inter-extra-light dark:text-white">
        {description}
      </p>
      <div className="flex items-center mt-8">
        <img
          src={profileImage}
          className="h-24 w-24 rounded-full mr-4 object-cover object-center"
          alt="Profile"
        />
        <div>
          <p className="font-bold font-inter-medium text-lg dark:text-white">
            {name}
          </p>
          <p className="text-sm text-grey font-inter-light dark:text-white">
            {position}
          </p>
          <p className="text-sm text-grey font-inter-light dark:text-white">
            {company}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const RecommendationSection = () => (
  <div>
    <div className="text-center" id="recommandation">
      <h2 className="font-inter text-3xl font-bold mb-16 mt-16 dark:text-white">
        Recommandations
      </h2>
    </div>
    <div className="bg-white p-0 mb-8 ml-8 mr-8 h-90 flex flex-grow relative overflow-hidden dark:bg-blackbg">
      <div className="flex flex-wrap justify-center mx-auto overflow-x-auto">
        <RecommendationCard
          starsCount={4}
          text="Sérieux et investi !"
          description="“Jonathan a réussi à s’adapter à une équipe en place et à intervenir sur un environnement client complexe.”"
          name="Florian Jauffrion"
          position="Superviseur équipe"
          company="Altimance"
          profileImage={profile}
        />
        <RecommendationCard
          starsCount={4}
          text="Souci du détail !"
          description="“Jonathan est un développeur passionné et très créatif, qui a le souci du détail et l'envie de bien faire. Il est à l'écoute et sait s'adapter aux besoins du projet.”"
          name="Nicolas Petey"
          position="Lead dev"
          company="CAPCT"
          profileImage={profile2}
        />
      </div>
    </div>
  </div>
);

export default RecommendationSection;
