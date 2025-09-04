import React from "react";
import "./HomeBenefits.css";
import HomeBenefitsCard from "./HomeBenefitsCard";
import career from "./../../../Imgs/HomeBenefits/enhancedCareer.gif";
import communication from "./../../../Imgs/HomeBenefits/communication.gif";
import awareness from "./../../../Imgs/HomeBenefits/awareness.gif";
import cognitive from "./../../../Imgs/HomeBenefits/cognitive.gif";
import travel from "./../../../Imgs/HomeBenefits/relationship.gif";
import educational from "./../../../Imgs/HomeBenefits/educational.gif";
import relationship from "./../../../Imgs/HomeBenefits/networking.gif";
import brainFunctionality from "./../../../Imgs/HomeBenefits/brainFunctionality.gif";
import confidence from "./../../../Imgs/HomeBenefits/confidence.gif";
import globalMedia from "./../../../Imgs/HomeBenefits/globalMedia.gif";
import preparedness from "./../../../Imgs/HomeBenefits/prepared.gif";
import flexibility from "./../../../Imgs/HomeBenefits/flexibility.gif";

const HomeBenefitsMain = () => {
  return (
    <div className="homeBenefitsMain">
      <HomeBenefitsCard
        img={career}
        head="Enhanced Career Opportunities"
        para="Learning a foreign language opens doors to global job markets, giving you an edge in industries like tourism, international business, education, and more."
      />
      <HomeBenefitsCard
        img={communication}
        head="Improved Communication Skills"
        para="Develop the ability to communicate effectively with people from diverse cultural and linguistic backgrounds."
      />
      <HomeBenefitsCard
        img={awareness}
        head="Cultural Awareness and Appreciation"
        para="Understanding a new language allows you to immerse yourself in its culture, fostering tolerance and global awareness."
      />
      <HomeBenefitsCard
        img={cognitive}
        head="Cognitive Development"
        para="Boost your memory, problem-solving skills, and multitasking abilities through the mental challenge of learning a new language."
      />
      <HomeBenefitsCard
        img={travel}
        head="Travel with Confidence"
        para="Navigate foreign destinations with ease by mastering the local language, enhancing your travel experiences."
      />
      <HomeBenefitsCard
        img={educational}
        head="Better Educational Prospects"
        para="Learning a foreign language can improve your chances of studying abroad in renowned institutions that require language proficiency."
      />
      <HomeBenefitsCard
        img={relationship}
        head="Networking and Relationships"
        para="Expand your social circle by connecting with speakers of the language, building personal and professional relationships worldwide."
      />
      <HomeBenefitsCard
        img={brainFunctionality}
        head="Increased Brain Functionality"
        para="Studies show that bilingual or multilingual individuals are better at decision-making, focus, and creative thinking."
      />
      <HomeBenefitsCard
        img={confidence}
        head="Enhanced Self-Confidence"
        para="The ability to communicate in a new language builds self-esteem and provides a sense of accomplishment."
      />
      <HomeBenefitsCard
        img={globalMedia}
        head="Access to Global Media"
        para="Enjoy international movies, books, music, and news in their original languages, enriching your understanding and entertainment options."
      />
      <HomeBenefitsCard
        img={preparedness}
        head="Preparedness for Globalization"
        para="Equip yourself with the skills needed to thrive in a globalized world where multilingualism is increasingly valued."
      />
      <HomeBenefitsCard
        img={flexibility}
        head="Flexibility in Learning"
        para="Online language courses offer flexibility, making it easy for anyone, regardless of age or background, to learn at their own pace."
      />
    </div>
  );
};

export default HomeBenefitsMain;
