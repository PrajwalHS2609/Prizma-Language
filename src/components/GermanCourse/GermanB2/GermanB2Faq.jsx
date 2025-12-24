"use client"
import React from "react";
import "../../Styles.css";
import { Accordion } from "react-bootstrap";
import faqImg from "@/imgs/headerBanner.png";
import Image from "next/image";
const GermanB2Faq = () => {
  return (
    <div className="courseFaq-container">
      <h2>
        Frequently Asked <span>Questions</span>
      </h2>

      <div className="courseFaq-wrapper">
        <div className="courseFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="courseFaq-accItem" eventKey="0">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  1. Who can join the B2 online German language course in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The B2 Online German Language Course in Bangalore is
                    suitable for students, working professionals, and job
                    seekers who have successfully completed B1 German or possess
                    equivalent upper-intermediate proficiency.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="1">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>2. What is the B2 level in German?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    B2 is an upper-intermediate level under the CEFR framework.
                    Learners can communicate fluently and spontaneously,
                    understand complex texts, and participate effectively in
                    professional and academic discussions.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="2">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  3. Is this B2 online German course suitable for working
                  professionals in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. The course offers flexible batch timings, including
                    early morning, evening, and weekend classes, making it ideal
                    for busy working professionals in Bangalore.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="3">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>4. Are the B2 German classes live or recorded?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Classes are conducted as live, interactive online sessions
                    led by experienced German trainers. Recorded sessions are
                    provided for revision or in case a class is missed.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="4">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  5. What is the duration of the B2 online German course?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The B2 Online German Course in Bangalore typically takes 8
                    to 12 weeks, depending on the batch type, intensity, and
                    learning pace.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="5">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  6. Will I receive a certificate after completing the B2
                  course?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. On successful completion, learners receive a B2 German
                    course completion certificate, which can be used for job
                    applications, academic requirements, and professional
                    profiles.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="6">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>7. Is the B2 certificate recognized?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The course prepares learners for internationally recognized
                    exams such as Goethe B2, TELC B2, and TestDaF. Official
                    certificates are issued by the respective exam authorities.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="7">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>8. What topics are covered in the B2 German course?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> The B2 syllabus includes:</p>
                  <ul>
                    <li> Advanced grammar and sentence structures</li>
                    <li> Professional and academic vocabulary</li>
                    <li> Writing formal emails, reports, and essays</li>
                    <li> Participating in debates and discussions</li>
                    <li>
                      Understanding complex articles, presentations, and media
                    </li>
                    <li> Workplace and business communication skills</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="9">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>9. Is prior B1 German knowledge mandatory? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Completion of B1 German or equivalent proficiency is
                    required. A placement test may be conducted before
                    enrollment.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="10">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>10. What teaching methodology is followed?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> The course emphasizes:</p>
                  <ul>
                    <li> Advanced speaking and listening skills</li>
                    <li> Grammar in professional and academic contexts</li>
                    <li>Reading newspapers, reports, and research articles</li>
                    <li> Writing structured and formal content</li>
                    <li>
                      Interactive discussions, presentations, and role-plays
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="11">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  11. What technical requirements are needed to attend online B2
                  classes?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>You need:</p>
                  <ul>
                    <li> Laptop / desktop / smartphone</li>
                    <li>Stable internet connection</li>
                    <li>Headset or earphones (recommended)</li>
                    <li>Access to Zoom / Google Meet</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="12">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>12. Will study materials be provided?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Digital study materials, worksheets, vocabulary lists,
                    and practice exercises are included in the course fee.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="13">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  13. Are weekend or fast-track batches available in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Weekend batches, fast-track batches, and corporate
                    batches are available for students and professionals in
                    Bangalore.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="14">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>14. Is one-to-one B2 German training available?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. We offer 1-to-1 online B2 German classes for learners
                    who prefer personalized attention and flexible timings.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="15">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>15. How does learning B2 German help students?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>B2 German helps students:</p>
                  <ul>
                    <li> Meet language requirements for German universities</li>
                    <li> Prepare for study visas and academic programs</li>
                    <li>
                      Perform confidently in academic presentations and exams
                    </li>
                    <li> Progress toward C1 advanced proficiency</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="16">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>16. How does B2 German benefit working professionals?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>For working professionals, A1 German:</p>
                  <ul>
                    <li> Enables fluent professional communication</li>
                    <li>
                      Improves opportunities in German MNCs and global firms
                    </li>
                    <li> Supports leadership roles and client interactions</li>
                    <li>
                      Enhances chances for onsite and international assignments
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="17">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>17. Are assessments conducted during the course?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Regular assignments, quizzes, and speaking practice
                    tests are conducted to track progress.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="18">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>18. What if I miss a class?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    You can access recorded sessions and attend revision or
                    backup classes, subject to availability.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="19">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  19. Is this course beginner-friendly and easy to follow?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    B2 is an advanced level, but the course follows a
                    structured, step-by-step approach to ensure smooth
                    progression for eligible learners.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="20">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  20. How can I enroll in the B2 Online German Language Course
                  in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>You can enroll by:</p>
                  <ul>
                    <li> Filling out the online enrollment form</li>
                    <li> Contacting the support team via phone or WhatsApp</li>
                    <li>
                      Selecting your preferred batch, schedule, and learning
                      mode
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="courseFaq-content">
          <Image src={faqImg} alt="faqImg" />
        </div>
      </div>
    </div>
  );
};

export default GermanB2Faq;
