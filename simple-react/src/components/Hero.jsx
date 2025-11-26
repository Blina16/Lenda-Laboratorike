import NotionFaces from "./NotionFaces";

export default function Hero() {
  return (
    <div className="text-center my-5">

      {/* Faces Row */}
      <NotionFaces />

      {/* Headline */}
      <h1 className="fw-bold display-4 mt-4">
        One workspace.<br />Zero busywork.
      </h1>

      <p className="text-muted fs-5 mt-3 mx-auto" style={{ maxWidth: "600px" }}>
        Organize learning, manage tutors, track progress, and automate tasks.
        A smarter workspace for students and educators.
      </p>
    </div>
  );
}
