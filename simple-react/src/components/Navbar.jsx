export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg notion-nav px-4 py-3">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4" href="#">
          BrightDesk
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto gap-3">

            <li className="nav-item">
              <a className="nav-link notion-hover rounded px-2" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link notion-hover rounded px-2" href="#">
                Subjects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link notion-hover rounded px-2" href="#">
                Tutors
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link notion-hover rounded px-2" href="#">
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link notion-hover rounded px-2" href="#">
                Contact
              </a>
            </li>
          </ul>

          {/* CTA */}
          <button className="btn btn-dark rounded-3 ms-3 px-3 py-2">
            Book a Session
          </button>
        </div>
      </div>
    </nav>
  );
}
