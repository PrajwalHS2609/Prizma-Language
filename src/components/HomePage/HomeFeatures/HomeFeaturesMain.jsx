"use client"
import React  from "react";
import "./HomeFeatures.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import interactive from "./../../../Imgs/Features/Interactive Live Classes.png";
import certified from "./../../../Imgs/Features/Certified Expert Trainers.png";
import flexible from "./../../../Imgs/Features/Flexible Learning Schedule.png";
import comprehensive from "./../../../Imgs/Features/Comprehensive Study Materials.png";
import focus from "./../../../Imgs/Features/Focus on All Aspects of Language.png";
import affordable from "./../../../Imgs/Features/Affordable and Accessible.png";
import cultural from "./../../../Imgs/Features/Cultural Insights and Practice.png";
import progress from "./../../../Imgs/Features/Progress Tracking and Assessments.png";
import certificate from "./../../../Imgs/Features/Certificate of Completion.png";
import global from "./../../../Imgs/Features/Global Community and Networking.png";
import Image from "next/image";

const HomeFeaturesMain = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const [showDots, setShowDots] = useState(true);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setShowDots(window.innerWidth > 768); // Adjust the width as needed
  //   };

  //   handleResize(); // Check initial size
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <div className="homeFeaturesMain">
      <div className="homeFeaturesMainContent">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="1s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={flexible} alt="flexible" loading="lazy" />
              </div>
              <h5>Flexible Learning Schedule</h5>
              <p>
                Learn at your own pace with 24/7 access to course materials,
                allowing you to balance studies with work or personal
                commitments.
              </p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={certified} alt="certified" loading="lazy" />
              </div>
              <h5>Certified Expert Trainers</h5>
              <p>
                Gain knowledge from experienced and certified language
                professionals who provide personalized guidance and feedback.
              </p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={interactive} alt="interactive" loading="lazy" />
              </div>
              <h5>Interactive Live Classes</h5>
              <p>
                Engage with instructors and fellow learners in real-time through
                live virtual sessions designed for collaborative learning.
              </p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={comprehensive} alt="comprehensive" loading="lazy" />
              </div>
              <h5>Comprehensive Study Materials</h5>
              <p>
                Access a wide range of resources, including e-books, audio
                lessons, practice exercises, and videos tailored to different
                proficiency levels.
              </p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={focus} alt="focus" loading="lazy" />
              </div>
              <h5>Focus on All Aspects of Language</h5>
              <p>
                Improve speaking, reading, writing, and listening skills with a
                holistic approach to mastering the language.
              </p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={affordable} alt="affordable" loading="lazy" />
              </div>
              <h5>Affordable and Accessible</h5>
              <p>
                Learn from the comfort of your home or office with affordable
                pricing options suitable for all budgets.
              </p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={cultural} alt="cultural" loading="lazy" />
              </div>
              <h5>Cultural Insights and Practice</h5>
              <p>
                Explore the cultural context of the language to improve
                understanding and usage in real-life situations.
              </p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={progress} alt="progress" loading="lazy" />
              </div>
              <h5>Progress Tracking and Assessments</h5>
              <p>
                Regular quizzes, assignments, and progress reports ensure you
                stay on track and identify areas for improvement.
              </p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={certificate} alt="certificate" loading="lazy" />
              </div>
              <h5>Certificate of Completion</h5>
              <p>
                Earn a recognized certificate upon completing the course to
                showcase your new language skills professionally or personally.
              </p>
            </div>
          </div>
          <div>
            <div className="item">
              <div className="item-imgContainer">
                <Image src={global} alt="global" loading="lazy" />
              </div>
              <h5>Global Community and Networking</h5>
              <p>
                Connect with fellow learners worldwide, creating opportunities
                for language practice and cultural exchange.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeFeaturesMain;
