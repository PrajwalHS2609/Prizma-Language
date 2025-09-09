import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanA2Essential from "../../components/GermanCourse/GermanA2/GermanA2Essential";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import GermanA2Content from "../../components/GermanCourse/GermanA2/GermanA2Content";
import GermanA2Head from "../../components/GermanCourse/GermanA2/GermanA2Head";
export const metadata = {
  title: " ",
  description: "",
  canonical: "",
  keywords: [],
};
export default function GermanA2Course() {
  return (
    <div>
      <CourseHeader
        country="German"
        img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39.jpg"
        heading="German A2 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <GermanA2Essential />
      <GermanCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <GermanA2Content />
    </div>
  );
}
