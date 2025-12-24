import Script from "next/script";
import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanC1Essentials from "../../components/GermanCourse/GermanC1/GermaC1Essentials";
import GermanC1Content from "../../components/GermanCourse/GermanC1/GermanC1Content";
import GermanC1Faq from "../../components/GermanCourse/GermanC1/GermanC1Faq";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import germanyBanner from "./../../Imgs/CourseBanner/germany.png";
import germanFlag from "./../../Imgs/barImgs/german.png";
export const metadata = {
  title:
    "Online C1 German Course in Bangalore | Online C1 German Classes in Bangalore ",
  description:
    "Online C1 German Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills. ",
  canonical: "https://prizmaacademy.com/online-c1-german-course-in-bangalore",
  keywords: [],
};
export default function GermanC1Course() {
  return (
    <>
      <Script
        id="german-c1-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who can join the C1 online German language course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The C1 online German language course in Bangalore is suitable for students, working professionals, and job seekers who have completed B2 German or possess equivalent advanced-level proficiency.",
                },
              },
              {
                "@type": "Question",
                name: "What is the C1 level in German?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "C1 is an advanced proficiency level under the CEFR framework. Learners can understand complex texts, express ideas fluently, and use German effectively in academic and professional environments.",
                },
              },
              {
                "@type": "Question",
                name: "Is the C1 online German course suitable for working professionals in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the course offers flexible batch timings including early morning, evening, and weekend classes, making it suitable for working professionals in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Are C1 German classes live or recorded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Classes are conducted as live interactive online sessions with experienced trainers. Recorded sessions are provided for revision or missed classes.",
                },
              },
              {
                "@type": "Question",
                name: "What is the duration of the C1 online German course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The C1 online German course typically lasts 10 to 14 weeks, depending on the batch type, course intensity, and learning pace.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive a certificate after completing the C1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, learners receive a C1 German course completion certificate that can be used for academic admissions, job applications, and professional credentials.",
                },
              },
              {
                "@type": "Question",
                name: "Is the C1 German certificate recognized?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course prepares learners for internationally recognized exams such as Goethe-Zertifikat C1, TELC C1, and TestDaF. Official certificates are issued by the respective examination authorities.",
                },
              },
              {
                "@type": "Question",
                name: "What topics are covered in the C1 German syllabus?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The syllabus includes advanced grammar usage, academic and professional vocabulary, essay and report writing, debates and presentations, understanding complex texts, and workplace communication.",
                },
              },
              {
                "@type": "Question",
                name: "Is prior B2 German knowledge mandatory for the C1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, completion of B2 German or equivalent proficiency is mandatory. A placement test may be conducted before enrollment.",
                },
              },
              {
                "@type": "Question",
                name: "What teaching methodology is followed in the C1 German course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course focuses on advanced speaking and listening fluency, grammatical accuracy, academic and professional reading, formal writing, presentations, and interactive discussions.",
                },
              },
              {
                "@type": "Question",
                name: "What technical requirements are needed to attend C1 online classes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Learners need a laptop, desktop, tablet, or smartphone with a stable high-speed internet connection, headset or earphones, and access to Zoom or Google Meet.",
                },
              },
              {
                "@type": "Question",
                name: "Are study materials provided for the C1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, advanced digital study materials, worksheets, mock exams, academic texts, and vocabulary lists are provided as part of the course.",
                },
              },
              {
                "@type": "Question",
                name: "Are weekend or fast-track C1 batches available in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, weekend batches, fast-track programs, and corporate training options are available for learners in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Is one-to-one C1 German training available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, one-to-one online C1 German classes are available for learners who prefer personalized coaching and flexible schedules.",
                },
              },
              {
                "@type": "Question",
                name: "How does C1 German help students?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "C1 German helps students meet language requirements for German universities, prepare for postgraduate and research programs, and excel in academic writing and presentations.",
                },
              },
              {
                "@type": "Question",
                name: "How does C1 German benefit working professionals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "C1 German enables near-native professional communication, supports leadership and client-facing roles, and enhances career opportunities in German MNCs and European firms.",
                },
              },
              {
                "@type": "Question",
                name: "Are assessments conducted during the C1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, advanced assessments including writing tasks, presentations, speaking evaluations, and mock exams are conducted to track learner progress.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I miss a C1 class?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recorded sessions are provided, and learners may attend revision or backup classes depending on availability.",
                },
              },
              {
                "@type": "Question",
                name: "Is the C1 online German course beginner-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "C1 is an advanced level and not suitable for beginners. The course follows a structured approach to help eligible learners progress confidently.",
                },
              },
              {
                "@type": "Question",
                name: "How can I enroll in the C1 Online German Language Course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can enroll by filling out the online registration form, contacting the support team via phone or WhatsApp, and selecting your preferred batch and schedule.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <CourseHeader
          country="German"
          img={germanyBanner}
          bar={germanFlag}
          heading="German C1 Language Course"
          description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
          link="/online-c1-german-course-in-bangalore"
        />
        <GermanC1Essentials />
        <GermanCourseLvl />
        <HomeFeatures />
        <HomeBenefits />
        <HomeWhy />
        <HomeReviews />
        <HomeYoutube />
        <GermanC1Faq />
        <GermanC1Content />
      </div>
    </>
  );
}
