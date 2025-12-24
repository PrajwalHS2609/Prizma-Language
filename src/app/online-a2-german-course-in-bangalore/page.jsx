import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanA2Essential from "../../components/GermanCourse/GermanA2/GermanA2Essential";
import GermanCourseLvl from "../../components/GermanCourse/GermanCourseLvl";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeFeatures from "../../components/HomePage/HomeFeatures/HomeFeatures";
import HomeBenefits from "../../components/HomePage/HomeBenefits/HomeBenefits";
import GermanA2Content from "../../components/GermanCourse/GermanA2/GermanA2Content";
import germanyBanner from "./../../Imgs/CourseBanner/germany.png";
import germanFlag from "./../../Imgs/barImgs/german.png";
import HomeReviews from "../../components/HomePage/HomeReviews/HomeReviews";
import HomeYoutube from "../../components/HomePage/HomeYoutube/HomeYoutube";
import GermanA2Faq from "../../components/GermanCourse/GermanA2/GermanA2Faq";
import Script from "next/script";
export const metadata = {
  title: " ",
  description: "",
  canonical: "",
  keywords: [],
};
export default function GermanA2Course() {
  return (
    <>
      <Script
        id="german-a2-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who can join the A2 online German language course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The A2 online German language course in Bangalore is suitable for students, working professionals, and job seekers who have completed A1 German or have basic knowledge of the language.",
                },
              },
              {
                "@type": "Question",
                name: "What is the A2 level in German?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A2 is the elementary level under the CEFR framework. Learners can communicate in routine daily situations and discuss familiar topics such as work, family, shopping, and travel.",
                },
              },
              {
                "@type": "Question",
                name: "Is the A2 online German course suitable for working professionals in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the course offers flexible batch timings including early morning, evening, and weekend classes, making it ideal for working professionals in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Are A2 German classes live or recorded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Classes are conducted as live interactive online sessions with experienced German trainers. Recorded sessions are provided for revision or missed classes.",
                },
              },
              {
                "@type": "Question",
                name: "What is the duration of the A2 online German course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The A2 online German course typically lasts 6 to 8 weeks, depending on batch type and learning pace.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive a certificate after completing the A2 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, learners receive an A2 German course completion certificate that can be used for resumes, job applications, and academic records.",
                },
              },
              {
                "@type": "Question",
                name: "Is the A2 German certificate recognized?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course prepares learners for internationally recognized exams such as Goethe A2, TELC A2, and Start Deutsch A2. Official certificates are issued by the respective exam authorities.",
                },
              },
              {
                "@type": "Question",
                name: "What topics are covered in the A2 German syllabus?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The syllabus includes advanced grammar basics, workplace and daily-life vocabulary, describing experiences, expressing opinions, reading short texts, writing messages, and conversational practice.",
                },
              },
              {
                "@type": "Question",
                name: "Is prior A1 German knowledge required for A2?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, completion of A1 German or basic knowledge of the language is required. A placement test may be conducted if necessary.",
                },
              },
              {
                "@type": "Question",
                name: "What teaching methodology is used in the A2 German course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course focuses on speaking and listening practice, grammar with real-life application, reading and writing exercises, interactive activities, and continuous trainer feedback.",
                },
              },
              {
                "@type": "Question",
                name: "What technical requirements are needed to attend A2 online classes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Learners need a laptop, desktop, tablet, or smartphone with a stable internet connection, headset or earphones, and access to Zoom or Google Meet.",
                },
              },
              {
                "@type": "Question",
                name: "Are study materials provided for the A2 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, digital study materials, worksheets, practice exercises, and vocabulary lists are provided as part of the course.",
                },
              },
              {
                "@type": "Question",
                name: "Are weekend or fast-track A2 batches available in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, weekend batches, fast-track options, and corporate training programs are available for learners in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Is one-to-one A2 German training available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, one-to-one online A2 German classes are available for learners who prefer personalized attention and flexible scheduling.",
                },
              },
              {
                "@type": "Question",
                name: "How does A2 German help students?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A2 German helps students improve conversational confidence, prepare for higher education in Germany, qualify for exchange programs, and progress to the B1 level.",
                },
              },
              {
                "@type": "Question",
                name: "How does A2 German benefit working professionals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A2 German improves basic workplace communication, enhances opportunities in German MNCs, supports onsite assignments, and strengthens professional profiles.",
                },
              },
              {
                "@type": "Question",
                name: "Are assessments conducted during the A2 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, regular quizzes, assignments, speaking assessments, and mock tests are conducted to track learner progress.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I miss an A2 class?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recorded sessions are provided, and learners may attend revision or backup classes depending on availability.",
                },
              },
              {
                "@type": "Question",
                name: "Is the A2 online German course beginner-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the A2 course follows a structured and progressive approach, building smoothly on A1 concepts for comfortable learning.",
                },
              },
              {
                "@type": "Question",
                name: "How can I enroll in the A2 Online German Language Course in Bangalore?",
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
          heading="German A2 Language Course"
          description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
          link="/online-a2-german-course-in-bangalore"
        />
        <GermanA2Essential />
        <GermanCourseLvl />
        <HomeFeatures />
        <HomeBenefits />
        <HomeWhy />
        <HomeReviews />
        <HomeYoutube />
        <GermanA2Faq />
        <GermanA2Content />
      </div>
    </>
  );
}
