import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanC2Content from "../../components/GermanCourse/GermanC2/GermanC2Content";
import GermanC2Essentials from "../../components/GermanCourse/GermanC2/GermanC2Essentials";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
  title:
    "Online C2 German Course in Bangalore | Online C2 German Classes in Bangalore ",
  description:
    "Online C2 German Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills. ",
  canonical: "https://prizmaacademy.com/online-c2-german-course-in-bangalore",
  keywords: [],
};
export default function GermanC2Course() {
  return (
    <div>
      <CourseHeader
        country="German"
        img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39.jpg"
        heading="German C2 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <GermanC2Essentials />
      <GermanCourseLvl />
      <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <GermanC2Content />
    </div>
  );
}
