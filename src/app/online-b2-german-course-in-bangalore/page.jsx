import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanB2Essentials from "../../components/GermanCourse/GermanB2/GermanB2Essentials";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeFeatures from '../../components/HomePage/HomeFeatures/HomeFeatures';
import HomeBenefits from '../../components/HomePage/HomeBenefits/HomeBenefits';
import GermanB2Content from "../../components/GermanCourse/GermanB2/GermanB2Content";
import germanyBanner from "./../../Imgs/CourseBanner/germany.png"
import germanFlag from "./../../Imgs/Language Course/German.png"
export const metadata = {
  title: "Online B2 German Course in Bangalore | Online B2 German Classes in Bangalore ",
  description: "Online B2 German Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills",
  canonical: "https://prizmaacademy.com/online-b2-german-course-in-bangalore",
  keywords: [],
};
export default function GermanB2Course(){
    return(
        <div>
      <CourseHeader
        country="German"
        img={germanyBanner}
        bar={germanFlag}        heading="German B2 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/online-b2-german-course-in-bangalore"
      />
      <GermanB2Essentials/>
      <GermanCourseLvl />
       <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <GermanB2Content/>
    </div>
    )
}