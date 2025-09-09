"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./../GermanA1/GermanA1.css"

const GermanA1Instructor = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Card = [
    {
      id: 1,
      head: "Qualifications and Expertise",
      para: "Ensure the trainer has relevant certifications, qualifications, and a strong background in language instruction. Native or near-native fluency is a significant advantage.",
    },
    {
      id: 2,
      head: "Teaching Experience",
      para: "Look for trainers with proven experience, especially in teaching learners at your proficiency level or for your specific needs (e.g., business communication, exam preparation).",
    },

    {
      id: 3,
      head: "Customization of Courses",
      para: "Check if the trainer can tailor lessons to your goals, such as conversational skills, grammar, vocabulary, or industry-specific terminology.",
    },

    {
      id: 4,
      head: "Teaching Methodology",
      para: "Inquire about their approach to language teaching. Do they emphasize practical usage, cultural context, or structured grammar lessons? Ensure their style matches your learning preferences.",
    },

    {
      id: 5,
      head: "Flexibility",
      para: "Verify their availability and willingness to accommodate your schedule, whether you prefer online, in-person, or hybrid sessions.",
    },

    {
      id: 6,
      head: "Learning Materials",
      para: "Ask if they provide comprehensive learning resources, such as textbooks, practice exercises, audio-visual aids, and online tools, to support your progress.",
    },

    {
      id: 7,
      head: "Proficiency Testing and Evaluation",
      para: "Ensure the trainer offers initial proficiency testing to customize your learning plan and regular assessments to track your progress.",
    },

    {
      id: 8,
      head: "Communication Skills",
      para: "A good language trainer should have excellent communication skills and the ability to simplify complex concepts.",
    },

    {
      id: 9,
      head: "Cultural Knowledge",
      para: "For language training, especially for international communication, understanding cultural nuances can be essential.",
    },

    {
      id: 10,
      head: "References and Reviews",
      para: "Check testimonials, reviews, or references from previous students to gauge their teaching effectiveness and professionalism.",
    },

    {
      id: 11,
      head: "Specialization in Exam Preparation",
      para: "If you're aiming for language certifications (e.g., TOEFL, IELTS, DELE), ensure the trainer has expertise in preparing students for these exams.",
    },

    {
      id: 12,
      head: "Cost and Value",
      para: "Compare the pricing of their services with the quality of training they offer. Ensure the investment aligns with your goals.",
    },

    {
      id: 13,
      head: "Trial Classes",
      para: "Opt for trainers who offer trial sessions to evaluate their teaching style and compatibility with your learning needs",
    },

    {
      id: 14,
      head: "Language Focus",
      para: "Some trainers specialize in specific skills like speaking or writing. Ensure they align with your primary objectives.",
    },
    {
      id: 15,
      head: "Group vs. Individual Training",
      para: "Decide if you prefer one-on-one sessions for personalized attention or group lessons for a more interactive experience.",
    },
  ];

  return (
    <div className="nestedGermanCurriculum">
      <div className="nestedGermanCurriculum-Head">
        <h4>Instructors</h4>
      </div>
      <div
        className="nestedGermanCurriculum-Content"
        id="nestedGermanCurriculum-Content1"
      >
        {/* Instructor Image + Description */}
        <div className="nestedGermanInstructor">
          <div className="nestedGermanInstructor-content">
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              alt="Instructor"
            />
          </div>
          <div className="nestedGermanInstructor-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              nostrum molestiae sapiente laudantium praesentium fugiat
              doloremque porro omnis ipsam obcaecati libero ducimus soluta quo
              distinctio quos.
            </p>
          </div>
        </div>

        {/* Carousel */}
        {/* <div className="nestedGermanInstructor-features">
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition="1s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            {Card.map((x) => (
              <div key={x.id} className="instructorCard">
                <img
                  src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148571409.jpg"
                  alt={x.head}
                />
                <div className="instructorCardCover">
                  <h5>{x.head}</h5>
                  <p>{x.para}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div> */}
      </div>
    </div>
  );
};

export default GermanA1Instructor;
