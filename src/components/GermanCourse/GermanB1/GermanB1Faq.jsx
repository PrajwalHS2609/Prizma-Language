"use client";
import React from "react";
import "../../Styles.css";
import { Accordion } from "react-bootstrap";
import faqImg from "@/Imgs/faq.png";
import Image from "next/image";
const GermanB1Faq = () => {
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
                  1. Who can join the B1 online German language course in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The B1 Online German Language Course in Bangalore is
                    suitable for students, working professionals, and job
                    seekers who have completed A2 German or have equivalent
                    intermediate-level knowledge.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="1">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>2. What is the B1 level in German?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    B1 is the intermediate level under the CEFR framework.
                    Learners can communicate independently in everyday and
                    professional situations and express opinions, experiences,
                    and plans clearly.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="2">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  3. Is this B1 online German course suitable for working
                  professionals in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. The course offers flexible batch timings, including
                    early morning, evening, and weekend batches, making it ideal
                    for working professionals in Bangalore.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="3">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>4. Are the B1 German classes live or recorded?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    {" "}
                    Classes are conducted as live interactive online sessions
                    with experienced trainers. Recorded sessions are provided
                    for revision or if you miss a class.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="4">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  5. What is the duration of the B1 online German course?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The B1 Online German Course in Bangalore typically lasts 8
                    to 10 weeks, depending on batch type and learning pace.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="5">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  6. Will I receive a certificate after completing the B1
                  course?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Upon successful completion, learners receive a B1
                    German course completion certificate, which can be used for
                    job applications, resumes, and academic purposes.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="6">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>7. Is the B1 German certificate recognized?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    {" "}
                    The course prepares learners for internationally recognized
                    exams such as Goethe B1, TELC B1, and TestDaF (foundation
                    level). Official exam certificates are issued by the
                    respective exam authorities.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="7">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>8. What topics are covered in the B1 German syllabus?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> The B1 syllabus includes:</p>
                  <ul>
                    <li> Advanced grammar and sentence structures</li>
                    <li> Workplace and academic vocabulary</li>
                    <li> Writing emails, reports, and formal texts</li>
                    <li> Expressing opinions and arguments</li>
                    <li> Understanding longer conversations and articles</li>
                    <li> Real-life professional communication practice</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="9">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>9. Is prior A2 German knowledge mandatory? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Completion of A2 German or equivalent proficiency is
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
                  <p>The course focuses on:</p>
                  <ul>
                    <li> Fluent speaking and listening practice</li>
                    <li> Grammar with contextual usage</li>
                    <li> Reading newspapers and articles</li>
                    <li> Writing structured texts and emails</li>
                    <li> Interactive discussions and role-plays</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="11">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  11. What technical requirements are needed for online B1
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
                <h5>14. Is one-to-one b1 German training available?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. One-to-one online B1 German classes are available for
                    learners seeking personalized training and flexible
                    schedules.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="15">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>15. How does B1 German help students?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> B1 German helps students:</p>
                  <ul>
                    <li> Meet language requirements for German universities</li>
                    <li> Prepare for study visas and academic programs</li>
                    <li> Improve confidence in speaking and writing</li>
                    <li> Progress to B2 advanced level</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="16">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>16. How does B1 German benefit working professionals?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>For working professionals, B1 German:</p>
                  <ul>
                    <li> Enables professional workplace communication</li>
                    <li> Enhances career opportunities in German MNCs</li>
                    <li>Supports onsite roles and international assignments</li>
                    <li>Improves chances of promotions and role transitions</li>
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
                    While B1 is an intermediate level, the course follows a
                    structured, step-by-step approach to ensure smooth learning
                    for all eligible learners.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="20">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  20. How can I enroll in the B1 Online German Language Course
                  in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>You can enroll by:</p>
                  <ul>
                    <li>  Filling out the online registration form</li>
                    <li> Contacting the support team via call or WhatsApp</li>
                    <li> Choosing your preferred batch and schedule</li>
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

export default GermanB1Faq;
