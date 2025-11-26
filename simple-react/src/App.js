import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./components/theme.css";
import hero from "./components/Hero";



function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="notion-card notion-shadow">
          <h1 className="fw-bold mb-3">Welcome to BrightDesk</h1>
          <p className="text-muted fs-5">
Unlock Your Best Study Self.          </p>
        </div>

        <div className="notion-card notion-shadow">
          <h3 className="fw-semibold">Find Your Perfect Tutor</h3>
          <p className="text-muted">
            Browse experts in Math, English, Science, Languages, Coding and more.
          </p>
        </div>
      </div>
    </>
  );
}
export default App;
