import React from "react";

const reviews = [
  {
    name: "Amina R.",
    text: "My math grades improved so quickly. The tutors explain everything so clearly!",
    rating: 5,
  },
  {
    name: "Daniel K.",
    text: "Flexible and easy to book sessions. Perfect for studying after school.",
    rating: 5,
  },
  {
    name: "Sophia M.",
    text: "I finally understand chemistry. My tutor is so patient and supportive!",
    rating: 4,
  },
];

export default function StudentReviews() {
  return (
    <section className="container my-5">
      <div className="notion-card notion-shadow p-5">

        <h2 className="fw-bold mb-4">What Students Say</h2>

        <div className="row g-4">
          {reviews.map((review, index) => (
            <div className="col-md-4" key={index}>
              <div className="notion-card p-4 h-100" style={{ borderRadius: 14 }}>
                <h5 className="fw-semibold mb-2">{review.name}</h5>

                <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                  "{review.text}"
                </p>

                <div className="mt-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} style={{ fontSize: 20 }}>⭐</span>
                    
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

<StudentReviews />

      </div>
    </section>
  );
}
