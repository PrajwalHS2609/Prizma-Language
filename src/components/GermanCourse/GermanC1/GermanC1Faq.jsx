"use client"
import React from "react";
import "../../Styles.css";
import { Accordion } from "react-bootstrap";
import faqImg from "@/imgs/headerBanner.png";
import Image from "next/image";
const GermanC1Faq = () => {
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
                  1. Who can join the C1 online German language course in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The C1 Online German Language Course in Bangalore is
                    suitable for students, working professionals, and job
                    seekers who have successfully completed B2 German or possess
                    equivalent advanced-level proficiency.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="1">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>2. What is the C1 level in German?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    C1 is an advanced proficiency level under the CEFR
                    framework. Learners can understand complex and demanding
                    texts, express ideas fluently and spontaneously, and use
                    German effectively in academic and professional
                    environments.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="2">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  3. Is the C1 online German course suitable for working
                  professionals in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. The course offers flexible batch timings, including
                    early morning, evening, and weekend classes, making it
                    suitable for busy working professionals in Bangalore.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="3">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>4. Are C1 German classes live or recorded?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Classes are conducted as live, interactive online sessions
                    led by experienced native or near-native German trainers.
                    Recorded sessions are provided for revision or if you miss a
                    class.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="4">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>5. What is the duration of the C1 online German course?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The C1 Online German Course in Bangalore typically takes 10
                    to 14 weeks, depending on course intensity, batch type, and
                    learning pace.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="5">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  6. Will I receive a certificate after completing the C1
                  course?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Upon successful completion, learners receive a C1
                    German course completion certificate, useful for academic
                    admissions, job applications, and professional credentials.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="6">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>7. Is the C1 certificate recognized?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The course prepares learners for internationally recognized
                    exams such as Goethe-Zertifikat C1, TELC C1, and TestDaF.
                    Official certifications are issued by the respective
                    examination bodies.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="7">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>8. What topics are covered in the C1 German syllabus?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> The C1 syllabus includes:</p>
                  <ul>
                    <li> Advanced and nuanced grammar usage</li>
                    <li> Academic and professional vocabulary</li>
                    <li> Writing essays, reports, and research summaries</li>
                    <li>
                      Participating in debates, presentations, and discussions
                    </li>
                    <li> Understanding complex texts, lectures, and media</li>
                    <li> Business and workplace communication</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="9">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>9. Is prior B2 German knowledge mandatory? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Completion of B2 German or equivalent proficiency is
                    mandatory. A placement test may be conducted before
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
                  <p>The course focuses on:</p>
                  <ul>
                    <li> High-level speaking and listening fluency</li>
                    <li> Grammar accuracy and stylistic refinement</li>
                    <li> Reading academic texts and professional documents</li>
                    <li>Writing structured, formal, and analytical content</li>
                    <li>
                      Presentations, discussions, and real-world simulations
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="11">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  11. What are the technical requirements to attend online
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
                  13. Are weekend or fast-track C1 batches available in
                  Bangalore?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Weekend batches, fast-track programs, and corporate
                    training options are available for learners in Bangalore.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="14">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>14. Is one-to-one C1 German training available?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. One-to-one online C1 German classes are available for
                    learners seeking personalized coaching and flexible
                    schedules.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="15">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>15. How does C1 German help students?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> C1 German helps students:</p>
                  <ul>
                    <li> Meet language requirements for German universities</li>
                    <li> Prepare for PhD, Master’s, and research programs</li>
                    <li>
                      Excel in academic writing, presentations, and discussions
                    </li>
                    <li> Strengthen scholarship and visa applications</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="16">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>116. How does C1 German benefit working professionals?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> For working professionals, C1 German:</p>
                  <ul>
                    <li> Enables near-native professional communication</li>
                    <li>
                      Supports leadership, managerial, and client-facing roles
                    </li>
                    <li>
                      Improves career prospects in German MNCs and Europe-based
                      firms
                    </li>
                    <li>
                      Enhances eligibility for long-term onsite and global roles
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
                <h5>19. Is the C1 online German course beginner-friendly? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    C1 is an advanced level and not for beginners. However, the
                    course follows a structured, guided approach to help
                    eligible learners progress confidently.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="20">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  20. How can I enroll in the C1 Online German Language Course
                  in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> You can enroll by:</p>
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

export default GermanC1Faq;
