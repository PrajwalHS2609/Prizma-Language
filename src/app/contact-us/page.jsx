import AboutUsHeader from "../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import ContactUsMain from "../../components/ContactUsPage/ContactUsMain/ContactUsMain";
import ContactUsMap from "../../components/ContactUsPage/ContactUsMap/ContactUsMap";
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
