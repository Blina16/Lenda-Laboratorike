import React from "react";

const tutors = [
  {
    name: "Sarah Johnson",
    subject: "Mathematics",
    img: "https://images.generated.photos/V7zPwBq5BvNnX97GxJt0T1DcW5-7XJv6pJmY2oHiRR4/rs:fit:512:512/czM6Ly9p/ZG1nL3Bob3RvLzAw/MDQ4NjYuanBn.jpg",
  },
  {
    name: "Michael Chen",
    subject: "Physics",
    img: "https://images.generated.photos/O5nGfJM3PcTJS3BM4tiTqcKoy0eZZ_-9_19p1ZBOqV8/rs:fit:512:512/czM6Ly9p/ZG1nL3Bob3RvLzAw/MDQ4NjEuanBn.jpg",
  },
  {
    name: "Amira Khalid",
    subject: "English Literature",
    img: "https://images.generated.photos/SoW0V_8uLA4jW-SKx4lIx-a72E9h2Q6rHqv9iAjE8W4/rs:fit:512:512/czM6Ly9p/ZG1nL3Bob3RvLzAw/MDQ4NzIuanBn.jpg",
  },
  {
    name: "David Martinez",
    subject: "Chemistry",
    img: "https://images.generated.photos/kP3BBceZx2drXrDoIjuo1leChX2NDSSSXqoQZnIcXtU/rs:fit:512:512/czM6Ly9p/ZG1nL3Bob3RvLzAw/MDQ4NzEuanBn.jpg",
  },
];

export default function TutorsList() {
  return (
    <section className="container my-5">
      <div className="notion-card notion-shadow p-5">
        <h2 className="fw-bold mb-4">Meet Our Tutors</h2>

        <div className="row g-4">
          {tutors.map((tutor, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="notion-card p-3 text-center h-100" style={{ borderRadius: 14 }}>

                <img
                  src={tutor.img}
                  alt={tutor.name}
                  className="rounded-circle mb-3"
                  style={{ width: 90, height: 90, objectFit: "cover" }}
                />

                <h5 className="fw-semibold mb-1">{tutor.name}</h5>

                <div className="badge bg-light text-dark" style={{ border: "1px solid #ddd" }}>
                  {tutor.subject}
                  
<TutorsList />

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


