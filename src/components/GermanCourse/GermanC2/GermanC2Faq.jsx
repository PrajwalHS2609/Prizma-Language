"use client";
import React from "react";
import "../../Styles.css";
import { Accordion } from "react-bootstrap";
import faqImg from "@/Imgs/faq.png";
import Image from "next/image";
const GermanC2Faq = () => {
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
                  1. Who can join the C2 online German language course in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The C2 Online German Language Course in Bangalore is
                    designed for students, working professionals, educators,
                    translators, and job seekers who have successfully completed
                    C1 German or possess near-native German proficiency.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="1">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>2. What is the C2 level in German?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    C2 is the highest level under the CEFR framework,
                    representing near-native fluency. Learners can understand
                    virtually everything they hear or read and express
                    themselves spontaneously, precisely, and effectively in
                    complex academic and professional situations.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="2">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  3. Is the C2 online German course suitable for working
                  professionals in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. The course offers highly flexible batch timings,
                    including early morning, evening, weekend, and customized
                    corporate batches, making it suitable for senior
                    professionals and busy learners in Bangalore.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="3">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>4. Are C2 German classes live or recorded?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Classes are conducted as live, highly interactive online
                    sessions led by expert or native-level German trainers.
                    Recorded sessions are available for revision or missed
                    classes.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="4">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  5. What is the duration of the C2 online German course?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The C2 Online German Course in Bangalore typically takes 12
                    to 16 weeks, depending on learning objectives,
                    specialization (academic, professional, or exam-focused),
                    and batch intensity.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="5">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  6. Will I receive a certificate after completing the C2
                  course?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Upon successful completion, learners receive a C2
                    German course completion certificate, valuable for academic
                    careers, professional advancement, teaching roles, and
                    international opportunities.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="6">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>7. Is the C2 certificate recognized?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    The course prepares learners for internationally recognized
                    certifications such as Goethe-Zertifikat C2, TELC C2, and
                    TestDaF (advanced scores). Official certificates are issued
                    by the respective exam authorities.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="7">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>8. What topics are covered in the C2 German course?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p> The C2 syllabus includes:</p>
                  <ul>
                    <li> Mastery of complex grammar and stylistic nuances</li>
                    <li> Academic, literary, and professional vocabulary</li>
                    <li>
                      Writing research papers, essays, and critical analyses
                    </li>
                    <li> Advanced presentations, debates, and negotiations</li>
                    <li>
                      Understanding native-level media, literature, and lectures
                    </li>
                    <li>High-level business and intercultural communication</li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="courseFaq-accItem" eventKey="9">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>9. Is prior C1 German knowledge mandatory?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Completion of C1 German or equivalent proficiency is
                    mandatory. A strict placement test or interview may be
                    conducted before enrollment.
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
                    <li> Native-level fluency and pronunciation refinement</li>
                    <li> Precision in grammar and stylistic expression</li>
                    <li> Academic and professional writing mastery</li>
                    <li> Advanced reading comprehension and analysis</li>
                    <li>Real-world simulations, debates, and presentations</li>
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
                    Yes. Advanced digital resources, including academic texts,
                    research articles, mock exams, vocabulary compendiums, and
                    practice worksheets, are provided.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="13">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  13. Are weekend or fast-track C2 batches available in
                  Bangalore?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. Weekend, fast-track, and customized batches are
                    available, including exam-oriented and profession-specific
                    training.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="14">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>14. Is one-to-one C2 German training available?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    Yes. One-to-one online C2 German coaching is available for
                    learners seeking personalized mentorship and flexible
                    scheduling.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="15">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>15. How does learning C2 German help students?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>C2 German helps students:</p>
                  <ul>
                    <li>
                      {" "}
                      Meet language requirements for doctoral and research
                      programs
                    </li>
                    <li>
                      Excel in academic writing, publishing, and presentations
                    </li>
                    <li>
                      Strengthen eligibility for scholarships and international
                      grants
                    </li>
                    <li>
                      Prepare for careers in teaching, translation, and research
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="16">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>16. How does C2 German benefit working professionals?</h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>For working professionals, C2 German:</p>
                  <ul>
                    <li> Enables near-native professional communication</li>
                    <li>
                      Supports leadership, consulting, and executive roles
                    </li>
                    <li>
                      Enhances opportunities in German MNCs, EU institutions,
                      and academia
                    </li>
                    <li>
                      Strengthens profiles for long-term international roles
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
                    Yes. Regular advanced assessments, including academic
                    writing tasks, oral presentations, critical analysis, and
                    mock certification exams, are conducted.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="18">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>18. What if I miss a C2 class?</h5>
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
                <h5>19. Is the C2 online German course beginner-friendly? </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>
                    No. C2 is an expert-level course and is intended only for
                    learners with strong advanced proficiency. However, the
                    program follows a structured and guided approach for
                    eligible candidates.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item className="courseFaq-accItem" eventKey="20">
              <Accordion.Header className="courseFaq-accHeader">
                <h5>
                  20. How can I enroll in the C2 Online German Language Course
                  in Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="courseFaq-body">
                <div className="courseFaq-item">
                  <p>You can enroll by:</p>
                  <ul>
                    <li> Filling out the online enrollment form</li>
                    <li> Contacting the support team via phone or WhatsApp</li>
                    <li> Completing the placement assessment</li>
                    <li>Selecting your preferred batch and learning format</li>
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

export default GermanC2Faq;
