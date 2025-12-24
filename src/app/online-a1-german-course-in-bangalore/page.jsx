import Script from "next/script";
import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanA1Content from "../../components/GermanCourse/GermanA1/GermanA1Content";
import GermanA1Faq from "../../components/GermanCourse/GermanA1/GermanA1Faq";
import GermanCourseEssential from "../../components/GermanCourse/GermanCourseEssential";
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
    "Online A1 German Course in Bangalore | Online A1 German Classes in Bangalore ",
  description:
    "Online A1 German Course in Bangalore from Certified Trainers, beginner-level to develop strong speaking, listening, reading, and writing skills.",
  canonical: "https://prizmaacademy.com/online-a1-german-course-in-bangalore",
  keywords: [],
};
export default function GermanA1Course() {
  return (
    <>
      <Script
        id="german-a1-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who can join the A1 online German language course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The A1 online German language course in Bangalore is suitable for students, working professionals, job seekers, and absolute beginners with no prior knowledge of German.",
                },
              },
              {
                "@type": "Question",
                name: "What is the A1 level in German?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A1 is the beginner level under the CEFR framework. Learners can understand and use basic everyday expressions, introduce themselves, and communicate in simple situations.",
                },
              },
              {
                "@type": "Question",
                name: "Is the A1 online German course suitable for working professionals in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the course offers flexible schedules including evening, early morning, and weekend batches, making it ideal for working professionals in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Are the classes live or recorded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Classes are conducted as live interactive online sessions, and recorded sessions are provided for revision or missed classes.",
                },
              },
              {
                "@type": "Question",
                name: "What is the duration of the A1 online German course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The A1 online German course typically lasts 6 to 8 weeks, depending on the batch type and learning pace.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive a certificate after completing the A1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, learners receive an A1 German course completion certificate that can be used for resumes, academic records, and professional profiles.",
                },
              },
              {
                "@type": "Question",
                name: "Is the A1 German certificate recognized?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course prepares students for internationally recognized exams such as Goethe A1, TELC A1, and Start Deutsch A1. Official exam certificates are issued by the respective authorities.",
                },
              },
              {
                "@type": "Question",
                name: "What topics are covered in the A1 German course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The syllabus includes German alphabet and pronunciation, basic grammar, everyday vocabulary, self-introduction, numbers, time, directions, and simple conversations.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need prior knowledge of German to enroll?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No prior knowledge is required. The A1 German course is designed for complete beginners.",
                },
              },
              {
                "@type": "Question",
                name: "What technical requirements are needed for online classes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You need a laptop, desktop, tablet, or smartphone with a stable internet connection and access to platforms like Zoom or Google Meet.",
                },
              },
              {
                "@type": "Question",
                name: "Are study materials provided for the A1 course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, digital study materials, worksheets, vocabulary lists, and practice exercises are provided as part of the course.",
                },
              },
              {
                "@type": "Question",
                name: "Are weekend or fast-track batches available in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, weekend batches, fast-track options, and corporate batches are available for students and working professionals in Bangalore.",
                },
              },
              {
                "@type": "Question",
                name: "Is one-to-one A1 German training available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, one-to-one online A1 German training is available for learners who prefer personalized instruction and flexible timings.",
                },
              },
              {
                "@type": "Question",
                name: "How does A1 German help students?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A1 German helps students build a strong foundation, prepare for higher studies in Germany, and improve opportunities for internships and exchange programs.",
                },
              },
              {
                "@type": "Question",
                name: "How does A1 German benefit working professionals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A1 German helps working professionals improve career prospects in German MNCs, IT, engineering, automotive, and manufacturing sectors, and supports onsite opportunities.",
                },
              },
              {
                "@type": "Question",
                name: "Are assessments conducted during the course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, regular quizzes, assignments, and speaking assessments are conducted to track learner progress.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I miss a class?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Learners can access recorded sessions and may attend revision or backup classes, subject to availability.",
                },
              },
              {
                "@type": "Question",
                name: "Is the A1 online German course beginner-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the course follows a step-by-step teaching approach, making it easy for beginners to learn and gain confidence.",
                },
              },
              {
                "@type": "Question",
                name: "How can I enroll in the A1 Online German Language Course in Bangalore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can enroll by filling out the online registration form, contacting the support team via phone or WhatsApp, and selecting your preferred batch and timing.",
                },
              },
            ],
          }),
        }}
      />
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "A1 Online German Language Course",
          description:
            "The A1 Online German Language Course at Prizma Academy is designed for beginners to build strong foundations in German, focusing on basic communication, grammar, and everyday vocabulary.",
          provider: {
            "@type": "Organization",
            name: "Prizma Academy",
            url: " https://prizmaacademy.com/online-a1-german-course-in-bangalore ",
          },
          educationalLevel: "Beginner",
          educationalCredentialAwarded:
            "A1 German Course Completion Certificate",
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Online",
            duration: "50 Days",
            inLanguage: "German",
            location: {
              "@type": "VirtualLocation",
              url: "https://prizmaacademy.com/",
            },
          },
          audience: {
            "@type": "Audience",
            audienceType: ["Students", "Working Professionals"],
          },
        })}
      </script>

      <div>
        <CourseHeader
          country="German"
          img={germanyBanner}
          bar={germanFlag}
          heading="German A1 Language Course"
          description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
          link="/online-a1-german-course-in-bangalore"
        />
        <GermanCourseEssential />
        <GermanCourseLvl />
        <HomeFeatures />
        <HomeBenefits />
        <HomeWhy />
        <HomeReviews />
        <HomeYoutube />
        <GermanA1Faq />
        <GermanA1Content />
      </div>
    </>
  );
}
