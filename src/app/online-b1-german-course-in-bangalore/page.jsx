import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanB1Essentials from "../../components/GermanCourse/GermanB1/GermanB1Essentials";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeFeatures from '../../components/HomePage/HomeFeatures/HomeFeatures';
import HomeBenefits from '../../components/HomePage/HomeBenefits/HomeBenefits';
import GermanB1Content from "../../components/GermanCourse/GermanB1/GermanB1Content";
import germanyBanner from "./../../Imgs/CourseBanner/germany.png"
import germanFlag from "./../../Imgs/barImgs/german.png";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";

export const metadata = {
  title: "Online B1 German Course in Bangalore | Online B1 German Classes in Bangalore",
  description: "Online B1 German Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills. ",
  canonical: "https://prizmaacademy.com/online-b1-german-course-in-bangalore",
  keywords: [],
};
export default function GermanB1Course() {
  return (
    <div>
      <CourseHeader
        country="German"
        img={germanyBanner}
        bar={germanFlag}        heading="German B1 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-b1-german-course-in-bangalore"
      />
      <GermanB1Essentials />
      <GermanCourseLvl />
       <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeReviews />
      <HomeYoutube />
      <GermanB1Content/>
    </div>
  );
}
