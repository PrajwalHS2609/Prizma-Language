"use client";
import React from "react";
import "../Styles.css";
import { Accordion } from "react-bootstrap";
import faqImg from "@/Imgs/faq.png";
import Image from "next/image";
const GermanCourseFaq = () => {
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
                <h5>1. Who can join the online German language course?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    {" "}
                    Our online German language course is suitable for students,
                    working professionals, job seekers, and beginners with no
                    prior knowledge of German. Anyone interested in learning
                    German for education, career, or migration purposes can
                    enroll.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="1">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  2. Is this course suitable for working professionals with a
                  busy schedule?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    {" "}
                    Yes. The course is designed with flexible class schedules,
                    including evening and weekend batches, making it ideal for
                    working professionals.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="2">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>3. What German levels are offered in the online course?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> We offer all levels based on the CEFR framework:</p>
                  <ul>
                    <li> A1 & A2 – Beginner & Elementary</li>
                    <li> B1 & B2 – Intermediate & Upper Intermediate</li>
                    <li> C1 – Advanced (on request)</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="3">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>4. Are the classes live or recorded?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    {" "}
                    Classes are conducted as live interactive sessions with
                    experienced German trainers. Recorded sessions are also
                    provided for revision or if you miss a class.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="4">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  5. Will I receive a certificate after completing the course?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    {" "}
                    Yes. Upon successful completion, you will receive a course
                    completion certificate, which is useful for resumes, job
                    applications, and academic purposes.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="5">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>6. Is the certification recognized?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The course prepares learners for internationally recognized
                    German exams such as Goethe, TestDaF, and TELC. While the
                    completion certificate confirms training, exam
                    certifications are issued by respective exam bodies.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="6">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>7. What is the course duration? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> The duration depends on the level:</p>
                  <ul>
                    <li> A1 / A2: 6–8 weeks</li>
                    <li> B1 / B2: 8–10 weeks</li>
                  </ul>
                  <div className="courseFaq-item">
                    <p>
                      {" "}
                      Course duration may vary based on batch type and learning
                      pace.
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="7">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>8. What teaching methods are used? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> The course focuses on:</p>
                  <ul>
                    <li> Speaking & pronunciation</li>
                    <li> Listening & comprehension</li>
                    <li> Reading & writing</li>
                    <li> Grammar with practical usage</li>
                    <li> Real-life conversation practice</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="9">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>9. Do I need any prior knowledge of German? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    {" "}
                    No prior knowledge is required for A1 (Beginner) level.
                    Higher levels require completion of the previous level or a
                    placement test.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="10">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  10. What technical requirements are needed to attend the
                  course?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>You will need:</p>
                  <ul>
                    <li> A laptop / desktop / tablet or smartphone</li>
                    <li> Stable internet connection</li>
                    <li> Headset or earphones (recommended)</li>
                    <li> Zoom / Google Meet access</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="11">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>11. Will I get study materials?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Digital study materials, worksheets, vocabulary lists,
                    and practice exercises are provided as part of the course.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="12">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>12. Is one-on-one training available?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. We offer individual (1-to-1) online German classes for
                    learners who prefer personalized training and flexible
                    timing.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="13">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>13. How does learning German help my career?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>German language skills open opportunities in:</p>
                  <ul>
                    <li> MNCs & German companies</li>
                    <li>Engineering, IT, Automobile & Manufacturing sectors</li>
                    <li> Higher education in Germany</li>
                    <li>
                      Career growth, salary advantage, and global mobility
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="14">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>14. Can students learn German for studies abroad?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Absolutely. German is highly beneficial for students
                    planning higher education in Germany, student exchange
                    programs, and international internships.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="15">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>15. Is there doubt-clearing support?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Dedicated doubt-clearing sessions and trainer support
                    are available throughout the course.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="16">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>16. How are assessments conducted?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Regular tests, assignments, and speaking assessments are
                    conducted to track progress and improve language fluency.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="17">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>17. What if I miss a class?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Recorded sessions are provided, and you can also attend
                    backup or revision classes, depending on availability.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="18">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>18. How do I enroll in the online German course?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>You can enroll by:</p>
                  <ul>
                    <li> Filling out the online registration form</li>
                    <li> Contacting our support team via phone or WhatsApp</li>
                    <li> Choosing your preferred batch and level</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="19">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>19. Is this course beginner-friendly?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. The course follows a step-by-step learning approach,
                    making it easy for beginners to understand and speak German
                    confidently.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="20">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>20. Can I balance work/studies along with this course?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Definitely. The course is specifically designed to ensure
                    work-life-study balance for both students and working
                    professionals.
                  </p>
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

export default GermanCourseFaq;
