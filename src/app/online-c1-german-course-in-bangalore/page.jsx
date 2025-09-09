import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanC1Essentials from "../../components/GermanCourse/GermanC1/GermaC1Essentials";
import GermanC1Content from "../../components/GermanCourse/GermanC1/GermanC1Content";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
export const metadata = {
  title: "Online C1 German Course in Bangalore | Online C1 German Classes in Bangalore ",
  description: "Online C1 German Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills. ",
  canonical: "https://prizmaacademy.com/online-c1-german-course-in-bangalore",
  keywords: [],
};
export default function GermanC1Course() {
  return (
    <div>
      <CourseHeader
        country="German"
        img="https://scuola.vamtam.com/wp-content/uploads/2019/12/h-39.jpg"
        heading="German C1 Language Course"
        description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />
      <GermanC1Essentials />
      <GermanCourseLvl />
       <HomeFeatures />
      <HomeBenefits />
      <HomeWhy />
      <HomeTestimonial />
      <GermanC1Content/>
    </div>
  );
}
