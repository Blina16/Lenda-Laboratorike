import Navbar from "./components/Navbar";
import "./components/theme.css";
import StudentReviews from "./components/StudentReviews";
// eslint-disable-next-line no-unused-vars
import TutorsList from "./components/TutorsList";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        {/* HERO CARD */}
        <div className="notion-card notion-shadow mb-4 p-4">
          <h1 className="fw-bold mb-3">Welcome to BrightDesk</h1>
          <p className="text-muted fs-5">Unlock Your Best Study Self.</p>
        </div>

        {/* TUTOR FIND CARD */}
        <div className="notion-card notion-shadow mb-5 p-4">
          <h3 className="fw-semibold">Find Your Perfect Tutor</h3>
          <p className="text-muted">
            Browse experts in Math, English, Science, Languages, Coding and more.
          </p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="container my-5">

        {/* About Intro */}
        <div className="notion-card notion-shadow p-5 mb-4">
          <h2 className="fw-bold mb-2">About BrightDesk</h2>
          <p className="text-muted mb-0" style={{ maxWidth: 820 }}>
            At <strong>BrightDesk</strong>, we believe learning should be clear, simple, and
            empowering. We connect students with dedicated tutors who bring expertise,
            empathy, and real-world strategies — delivered remotely so learning fits your life.
          </p>
        </div>

        {/* Two-column section */}
        <div className="row g-4">

          {/* Students column */}
          <div className="col-md-6">
            <div className="notion-card notion-shadow h-100 p-4">
              <div className="d-flex align-items-start mb-3">
                <svg width="54" height="54" viewBox="0 0 24 24" className="me-3">
                  <circle cx="12" cy="7" r="3" fill="none" stroke="#111" strokeWidth="1.2" />
                  <path d="M4 20c1.8-4 6.2-6 8-6s6.2 2 8 6" fill="none" stroke="#111" strokeWidth="1.2" />
                </svg>
                <h3 className="h5 mb-0">For Students — Learn Smarter, Grow Faster</h3>
              </div>

              <ul className="list-unstyled ms-1">
                <li className="d-flex align-items-start mb-3">
                  <span className="badge bg-light text-dark rounded-circle me-3"
                    style={{ width: 30, height: 30, display: "inline-flex",
                    alignItems: "center", justifyContent: "center",
                    border: "1px solid #e6e6e6" }}>
                    ✓
                  </span>
                  <div>
                    <strong>Personalized learning paths</strong>
                    <div className="text-muted">Lessons tailored to your pace and goals.</div>
                  </div>
                </li>

                <li className="d-flex align-items-start mb-3">
                  <span className="badge bg-light text-dark rounded-circle me-3"
                    style={{ width: 30, height: 30, display: "inline-flex",
                    alignItems: "center", justifyContent: "center",
                    border: "1px solid #e6e6e6" }}>
                    ⏱
                  </span>
                  <div>
                    <strong>Flexible 1-on-1 remote sessions</strong>
                    <div className="text-muted">Book sessions that fit your schedule.</div>
                  </div>
                </li>

                <li className="d-flex align-items-start">
                  <span className="badge bg-light text-dark rounded-circle me-3"
                    style={{ width: 30, height: 30, display: "inline-flex",
                    alignItems: "center", justifyContent: "center",
                    border: "1px solid #e6e6e6" }}>
                    🎯
                  </span>
                  <div>
                    <strong>Exam & homework support</strong>
                    <div className="text-muted">Clear explanations that build confidence.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Tutors column */}
          <div className="col-md-6">
            <div className="notion-card notion-shadow h-100 p-4">
              <div className="d-flex align-items-start mb-3">
                <svg width="54" height="54" viewBox="0 0 24 24" className="me-3">
                  <rect x="3" y="4" width="18" height="14" rx="2"
                    fill="none" stroke="#111" strokeWidth="1.2" />
                  <path d="M8 8h8M8 12h5" stroke="#111" strokeWidth="1.2" />
                </svg>
                <h3 className="h5 mb-0">For Tutors — Teach With Purpose</h3>
              </div>

              <ul className="list-unstyled ms-1">
                <li className="d-flex align-items-start mb-3">
                  <span className="badge bg-light text-dark rounded-circle me-3"
                    style={{ width: 30, height: 30, display: "inline-flex",
                    alignItems: "center", justifyContent: "center",
                    border: "1px solid #e6e6e6" }}>
                    🤝
                  </span>
                  <div>
                    <strong>Meaningful one-on-one teaching</strong>
                    <div className="text-muted">Connect with students who want to grow.</div>
                  </div>
                </li>

                <li className="d-flex align-items-start mb-3">
                  <span className="badge bg-light text-dark rounded-circle me-3"
                    style={{ width: 30, height: 30, display: "inline-flex",
                    alignItems: "center", justifyContent: "center",
                    border: "1px solid #e6e6e6" }}>
                    🖥️
                  </span>
                  <div>
                    <strong>Remote & flexible work</strong>
                    <div className="text-muted">Teach anywhere, anytime.</div>
                  </div>
                </li>

                <li className="d-flex align-items-start">
                  <span className="badge bg-light text-dark rounded-circle me-3"
                    style={{ width: 30, height: 30, display: "inline-flex",
                    alignItems: "center", justifyContent: "center",
                    border: "1px solid #e6e6e6" }}>
                    🧭
                  </span>
                  <div>
                    <strong>Tools to teach clearly</strong>
                    <div className="text-muted">Track progress & share resources easily.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Mission Section */}
        <div className="notion-card notion-shadow p-5 mt-4">
          <h2 className="fw-bold mb-3">Our Mission</h2>

          <p className="text-muted" style={{ maxWidth: 850 }}>
            Our mission is to make high-quality learning accessible to every student, no matter
            where they live or how busy their schedules are. Education should be flexible,
            supportive, and personal — never limited by distance.
          </p>

          <p className="text-muted" style={{ maxWidth: 850 }}>
            By connecting learners with passionate tutors worldwide, we’re building a space where
            knowledge is shared clearly, progress is celebrated, and real growth happens one
            session at a time.
          </p>

          <p className="text-muted" style={{ maxWidth: 850 }}>
            <strong>Help students learn better, and help tutors teach better — from anywhere.</strong>
          </p>
        </div>
<StudentReviews />

      </section>
    </>
  );
}

export default App;
