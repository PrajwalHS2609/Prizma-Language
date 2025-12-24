"use client";
import React from "react";
import "../../Styles.css";
import { Accordion } from "react-bootstrap";
import faqImg from "@/Imgs/faq.png";
import Image from "next/image";
const GermanA2Faq = () => {
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
                  1. Who can join the A2 online German language course in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    {" "}
                    The A2 Online German Language Course in Bangalore is
                    suitable for students, working professionals, and job
                    seekers who have completed A1 German or possess basic
                    knowledge of the language.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="1">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>2. What is the A2 level in German?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    A2 is the elementary level under the CEFR framework. At this
                    level, learners can communicate in routine daily situations,
                    understand frequently used expressions, and talk about
                    familiar topics such as work, family, shopping, and travel.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="2">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  3. Is this A2 online German course suitable for working
                  professionals in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. The course offers flexible batch timings, including
                    evening, early morning, and weekend classes, making it ideal
                    for Bangalore-based working professionals.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="3">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>4. Are the A2 German classes live or recorded?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Classes are conducted as live interactive online sessions
                    with experienced German trainers. Recorded sessions are
                    provided for revision or in case you miss a class.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="4">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  5. What is the duration of the A2 online German course?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The A2 Online German Course in Bangalore typically takes 6
                    to 8 weeks, depending on the batch type and learning pace.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="5">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  6. Will I receive a certificate after completing the A2
                  course?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Upon successful completion, you will receive an A2
                    German course completion certificate, which can be used for
                    job applications, resumes, and academic records.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="6">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>7. Is the A2 German certificate recognized?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The course prepares learners for internationally recognized
                    exams such as Goethe A2, TELC A2, and Start Deutsch A2.
                    Official exam certificates are issued by the respective
                    examination authorities.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="7">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>8. What topics are covered in the A2 German course?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>The A2 syllabus includes:</p>
                  <ul>
                    <li> Extended grammar and sentence structures</li>
                    <li> Everyday and workplace vocabulary</li>
                    <li> Describing experiences and events</li>
                    <li> Making requests and giving opinions</li>
                    <li> Reading short texts and writing simple messages</li>
                    <li> Conversational practice for real-life situations</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="9">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>9. Is prior A1 German knowledge mandatory? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Basic knowledge of German or completion of A1 level is
                    required. A placement test may be conducted if needed.
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
                    <li> Speaking and listening practice</li>
                    <li> Grammar with real-life application</li>
                    <li> Reading and writing exercises</li>
                    <li> Interactive activities and role-plays</li>
                    <li> Continuous trainer feedback</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="11">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  11. What technical requirements are needed to attend online
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
                <h5>14. Is one-to-one A2 German training available?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. We offer 1-to-1 online A2 German classes for learners
                    who prefer personalized attention and flexible timings.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="15">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>15. How does learning A2 German help students?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>A2 German helps students:</p>
                  <ul>
                    <li> Improve conversational confidence</li>
                    <li> Prepare for higher education in Germany</li>
                    <li>
                      Strengthen eligibility for exchange programs and
                      internships
                    </li>
                    <li> Progress smoothly to B1 level</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="16">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>16. How does A2 German benefit working professionals?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> For working professionals, A2 German:</p>
                  <ul>
                    <li> Improves workplace communication basics</li>
                    <li> Enhances job opportunities in German MNCs</li>
                    <li>
                      Supports onsite assignments and international exposure
                    </li>
                    <li> Adds value to professional profiles</li>
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
                <h5>18. What if I miss A2 class?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Regular assignments, quizzes, speaking assessments, and
                    mock tests are conducted to track progress.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="19">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>19. Is the A2 online German course beginner-friendly? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. The A2 course follows a structured and progressive
                    approach, building smoothly on A1 concepts and ensuring
                    comfortable learning.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="20">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  20. How can I enroll in the A2 Online German Language Course
                  in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> You can enroll by:</p>
                  <ul>
                    <li>  Filling out the online enrollment form</li>
                    <li> Contacting the support team via call or WhatsApp</li>
                    <li> Selecting your preferred batch and schedule</li>
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

export default GermanA2Faq;
