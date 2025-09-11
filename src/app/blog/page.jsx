import BlogPage from "../../components/BlogPage/BlogPage";
import AboutUsHeader from "./../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";

export default function Blog() {
  return (
    <div>
      <AboutUsHeader heading="Blog" bread="Blog" />
      <BlogPage />
    </div>
  );
}
