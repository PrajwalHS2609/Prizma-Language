import CourseHeader from "../../components/CourseHeader/CourseHeader";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ItalianCourseHead from "../../components/ItalianCourse/ItalianCourseHead";
import ItalianCourseLvl from "../../components/ItalianCourse/ItalianCourseLvl";

export default function ItalianCourse() {
  return (
    <div>
      <CourseHeader
        country="Italian"
        img="https://images.pexels.com/photos/629142/pexels-photo-629142.jpeg"
        heading="Online Italian Language Course"
        description="If you have a basic knowledge of Italian , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
        link="/"
      />

      <ItalianCourseHead/>
      <ItalianCourseLvl/>
      <HomeFeatures />
      <HomeBenefits />
    <HomeWhy />
    <HomeTestimonial />
    </div>
  );
}
