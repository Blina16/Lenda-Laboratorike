import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <h1 className="fw-bold">Welcome to TutorPro</h1>
        <p className="text-muted">
          Find expert tutors for math, science, language and more.
        </p>
      </div>
    </div>
  );
}

export default App;
