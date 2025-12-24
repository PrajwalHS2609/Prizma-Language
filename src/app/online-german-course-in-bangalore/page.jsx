import Script from "next/script";
import AboutUsHeader from "../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import CourseHeader from "../../components/CourseHeader/CourseHeader";
import GermanContent from "../../components/GermanCourse/GermanContent";
import GermanCourseFaq from "../../components/GermanCourse/GermanCourseFaq";
import GermanCourseHead from "../../components/GermanCourse/GermanCourseHead";
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
    "Online German Course in Bangalore | Online German Classes in Bangalore ",
  description:
    "Online German Course in Bangalore from Certified Trainers, learners can cover every level from beginner (A1) to advanced (C2) and develop strong speaking, listening, reading, and writing skills.",
  canonical: "https://prizmaacademy.com/online-german-course-in-bangalore",
  keywords: [],
};
export default function GermanCourse() {
  return (
    <>
      <Script
        id="german-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who can join the online German language course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The online German language course is suitable for students, working professionals, job seekers, and beginners with no prior knowledge of German. Anyone interested in learning German for education, career, or migration purposes can enroll.",
                },
              },
              {
                "@type": "Question",
                name: "Is this course suitable for working professionals with a busy schedule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The course is designed with flexible class schedules, including evening and weekend batches, making it ideal for working professionals.",
                },
              },
              {
                "@type": "Question",
                name: "What German levels are offered in the online course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course offers CEFR-based levels: A1 & A2 (Beginner & Elementary), B1 & B2 (Intermediate & Upper Intermediate), and C1 (Advanced, on request).",
                },
              },
              {
                "@type": "Question",
                name: "Are the classes live or recorded?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Classes are conducted as live interactive sessions with experienced German trainers. Recorded sessions are also provided for revision or missed classes.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive a certificate after completing the course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Upon successful completion, learners receive a course completion certificate useful for resumes, job applications, and academic purposes.",
                },
              },
              {
                "@type": "Question",
                name: "Is the certification recognized?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course prepares learners for internationally recognized German exams such as Goethe, TestDaF, and TELC. Official exam certifications are issued by the respective exam bodies.",
                },
              },
              {
                "@type": "Question",
                name: "What is the course duration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Course duration varies by level. A1/A2 typically take 6–8 weeks, while B1/B2 take 8–10 weeks, depending on batch type and learning pace.",
                },
              },
              {
                "@type": "Question",
                name: "What teaching methods are used in the course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The course focuses on speaking and pronunciation, listening and comprehension, reading and writing, grammar with practical usage, and real-life conversation practice.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any prior knowledge of German?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No prior knowledge is required for the A1 beginner level. Higher levels require completion of the previous level or a placement test.",
                },
              },
              {
                "@type": "Question",
                name: "What technical requirements are needed to attend the course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Learners need a laptop, desktop, tablet, or smartphone with a stable internet connection, headset or earphones, and access to Zoom or Google Meet.",
                },
              },
              {
                "@type": "Question",
                name: "Will study materials be provided?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Digital study materials, worksheets, vocabulary lists, and practice exercises are provided as part of the course.",
                },
              },
              {
                "@type": "Question",
                name: "Is one-on-one German training available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. One-to-one online German classes are available for learners who prefer personalized training and flexible timings.",
                },
              },
              {
                "@type": "Question",
                name: "How does learning German help my career?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "German language skills open opportunities in multinational companies and German firms, engineering, IT, automobile and manufacturing sectors, higher education in Germany, career growth, salary benefits, and global mobility.",
                },
              },
              {
                "@type": "Question",
                name: "Can students learn German for studies abroad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. German is highly beneficial for students planning higher education in Germany, student exchange programs, and international internships.",
                },
              },
              {
                "@type": "Question",
                name: "Is doubt-clearing support available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Dedicated doubt-clearing sessions and continuous trainer support are provided throughout the course.",
                },
              },
              {
                "@type": "Question",
                name: "How are assessments conducted?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Regular tests, assignments, and speaking assessments are conducted to monitor progress and improve language fluency.",
                },
              },
              {
                "@type": "Question",
                name: "What if I miss a class?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recorded sessions are provided, and learners may attend backup or revision classes based on availability.",
                },
              },
              {
                "@type": "Question",
                name: "How do I enroll in the online German language course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can enroll by filling out the online registration form, contacting the support team via phone or WhatsApp, and selecting your preferred batch and level.",
                },
              },
              {
                "@type": "Question",
                name: "Is this course beginner-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The course follows a step-by-step learning approach, making it easy for beginners to understand and speak German confidently.",
                },
              },
              {
                "@type": "Question",
                name: "Can I balance work or studies along with this course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The course is designed to support a healthy work-life-study balance for both students and working professionals.",
                },
              },
            ],
          }),
        }}
      />
      {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Online German Language Course",
          description:
            "Prizma Academy offers online German language courses from beginner to advanced levels (A1, A2, B1, B2, C1, C2) for students and working professionals. The course focuses on speaking, listening, reading, writing, and exam preparation.",
          provider: {
            "@type": "Organization",
            name: "Prizma Academy",
            url: "https://prizmaacademy.com/online-german-course-in-bangalore",
          },
          educationalCredentialAwarded: "Course Completion Certificate",
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
            audienceType: ["Students", "Working Professionals", "Job Seekers"],
          },
        })}
      </script>

      <div>
        <CourseHeader
          country="German"
          img={germanyBanner}
          bar={germanFlag}
          heading="Online German Language Course"
          description="If you have a basic knowledge of German , you are ready to move on to our Elementary courses where you’ll build upon the foundations and gain a more solid understanding of the language."
          link="/"
        />
        <GermanCourseHead />
        <GermanCourseLvl />
        <HomeFeatures />
        <HomeBenefits />
        <HomeWhy />
        <HomeReviews />
        <HomeYoutube />
        <GermanCourseFaq/>
        <GermanContent />
      </div>
    </>
  );
}
