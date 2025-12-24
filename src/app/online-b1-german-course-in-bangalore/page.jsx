import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanB1Essentials from "../../components/GermanCourse/GermanB1/GermanB1Essentials";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import GermanB1Content from "../../components/GermanCourse/GermanB1/GermanB1Content";
import germanyBanner from "./../../Imgs/CourseBanner/germany.png";
import germanFlag from "./../../Imgs/barImgs/german.png";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import GermanB1Faq from "../../components/GermanCourse/GermanB1/GermanB1Faq";
import Script from "next/script";

export const metadata = {
  title:
    "Online B1 German Course in Bangalore | Online B1 German Classes in Bangalore",
  description:
    "Online B1 German Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills. ",
  canonical: "https://prizmaacademy.com/online-b1-german-course-in-bangalore",
  keywords: [],
};
export default function GermanB1Course() {
  return (
    <>
      <Script
        id="german-b1-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who can join the B1 online German language course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The B1 online German language course in Bangalore is suitable for students, working professionals, and job seekers who have completed A2 German or have equivalent intermediate-level knowledge.",
                },
              },
              {
                "@type": "Question",
                name: "What is the B1 level in German?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "B1 is the intermediate level under the CEFR framework. Learners can communicate independently in everyday and professional situations and express opinions, experiences, and plans clearly.",
                },
              },
              {
                "@type": "Question",
                name: "Is the B1 online German course suitable for working professionals in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the course offers flexible batch timings including early morning, evening, and weekend batches, making it ideal for working professionals in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Are B1 German classes live or recorded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Classes are conducted as live interactive online sessions with experienced trainers. Recorded sessions are provided for revision or missed classes.",
                },
              },
              {
                "@type": "Question",
                name: "What is the duration of the B1 online German course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The B1 online German course typically lasts 8 to 10 weeks, depending on the batch type and learning pace.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive a certificate after completing the B1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, learners receive a B1 German course completion certificate that can be used for job applications, resumes, and academic purposes.",
                },
              },
              {
                "@type": "Question",
                name: "Is the B1 German certificate recognized?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course prepares learners for internationally recognized German exams such as Goethe B1, TELC B1, and TestDaF. Official certificates are issued by the respective exam authorities.",
                },
              },
              {
                "@type": "Question",
                name: "What topics are covered in the B1 German syllabus?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The syllabus includes advanced grammar, workplace and academic vocabulary, writing emails and reports, expressing opinions and arguments, understanding longer texts, and professional communication practice.",
                },
              },
              {
                "@type": "Question",
                name: "Is prior A2 German knowledge required for the B1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, completion of A2 German or equivalent proficiency is required. A placement test may be conducted before enrollment.",
                },
              },
              {
                "@type": "Question",
                name: "What teaching methodology is followed in the B1 German course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course focuses on fluent speaking and listening practice, grammar with contextual usage, reading articles, writing structured texts, and interactive discussions.",
                },
              },
              {
                "@type": "Question",
                name: "What technical requirements are needed to attend B1 online classes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Learners need a laptop, desktop, tablet, or smartphone with a stable internet connection, headset or earphones, and access to Zoom or Google Meet.",
                },
              },
              {
                "@type": "Question",
                name: "Are study materials provided for the B1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, digital study materials, worksheets, mock tests, and vocabulary lists are provided as part of the course.",
                },
              },
              {
                "@type": "Question",
                name: "Are weekend or fast-track B1 batches available in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, weekend batches, fast-track programs, and corporate training options are available for learners in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Is one-to-one B1 German training available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, one-to-one online B1 German classes are available for learners who prefer personalized training and flexible schedules.",
                },
              },
              {
                "@type": "Question",
                name: "How does B1 German help students?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "B1 German helps students meet language requirements for German universities, prepare for study visas, improve academic communication, and progress to the B2 level.",
                },
              },
              {
                "@type": "Question",
                name: "How does B1 German benefit working professionals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "B1 German enables professional workplace communication, enhances opportunities in German MNCs, supports onsite roles, and improves career growth prospects.",
                },
              },
              {
                "@type": "Question",
                name: "Are assessments conducted during the B1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, regular quizzes, assignments, speaking assessments, and mock exams are conducted to track learner progress.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I miss a B1 class?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recorded sessions are provided, and learners may attend revision or backup classes depending on availability.",
                },
              },
              {
                "@type": "Question",
                name: "Is the B1 online German course beginner-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While B1 is an intermediate level, the course follows a structured and step-by-step approach to ensure smooth learning for eligible learners.",
                },
              },
              {
                "@type": "Question",
                name: "How can I enroll in the B1 Online German Language Course in Bangalore?",
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
          heading="German B1 Language Course"
          description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
          link="/online-b1-german-course-in-bangalore"
        />
        <GermanB1Essentials />
        <GermanCourseLvl />
        <HomeFeatures />
        <HomeBenefits />
        <HomeWhy />
        <HomeReviews />
        <HomeYoutube />
        <GermanB1Faq />
        <GermanB1Content />
      </div>
    </>
  );
}
