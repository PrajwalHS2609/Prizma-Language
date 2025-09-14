import AboutUsHeader from "../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import ContactUsMain from "../../components/ContactUsPage/ContactUsMain/ContactUsMain";
import ContactUsMap from "../../components/ContactUsPage/ContactUsMap/ContactUsMap";
export const metadata = {
  title:"Learn Online German, French, Spanish & Italian Courses from Certified Trainers",
  description:
    "Master German, French, Spanish & Italian with expert-certified trainers through interactive online courses designed for all levels.",
  canonical: "https://prizmaacademy.com/",
  keywords: [],
};
export default function ContactUs() {
  return (
    <div>
      {" "}
      <AboutUsHeader heading="Contact Us" bread="Contact Us" />
      <ContactUsMain />
      <ContactUsMap />
    </div>
  );
}
