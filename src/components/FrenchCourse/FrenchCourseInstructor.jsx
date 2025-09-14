import React from 'react'

const FrenchCourseInstructor = () => {
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
              Our Certified French Trainer ensures expert guidance with
              personalized teaching methods, helping learners build strong
              grammar, vocabulary, and communication skills for academic,
              professional, and cultural success.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrenchCourseInstructor
