import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanB1Essentials from "../../components/GermanCourse/GermanB1/GermanB1Essentials";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeFeatures from '../../components/HomePage/HomeFeatures/HomeFeatures';
import HomeBenefits from '../../components/HomePage/HomeBenefits/HomeBenefits';
import GermanB1Head from "../../components/GermanCourse/GermanB1/GermanB1Head";
import GermanB1Content from "../../components/GermanCourse/GermanB1/GermanB1Content";

export default function GermanB1Course() {
  return (
    <div>
      <CourseHeader
        country="German"
        img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39.jpg"
        heading="German B1 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <GermanB1Essentials />
      <GermanCourseLvl />
       <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <GermanB1Content/>
    </div>
  );
}
