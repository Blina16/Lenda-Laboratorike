export default function NotionFaces() {
  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap my-4">

      {/* FACE 1 */}
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="35" fill="#fff" stroke="#000" strokeWidth="3" />
        <circle cx="30" cy="35" r="5" fill="#000" />
        <circle cx="50" cy="35" r="5" fill="#000" />
        <path d="M30 55 Q40 65 50 55" stroke="#000" strokeWidth="3" fill="none" />
      </svg>

      {/* FACE 2 */}
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="35" fill="#FCEED3" stroke="#000" strokeWidth="3" />
        <circle cx="28" cy="38" r="5" fill="#000" />
        <circle cx="52" cy="38" r="5" fill="#000" />
        <rect x="33" y="48" width="14" height="4" rx="2" fill="#000" />
      </svg>

      {/* FACE 3 */}
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="35" fill="#fff" stroke="#000" strokeWidth="3" />
        <path d="M20 40 C25 20, 55 20, 60 40" stroke="#000" strokeWidth="3" fill="none" />
        <circle cx="32" cy="45" r="5" fill="#000" />
        <circle cx="48" cy="45" r="5" fill="#000" />
      </svg>

      {/* FACE 4 */}
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="35" fill="#fff" stroke="#000" strokeWidth="3" />
        <circle cx="30" cy="32" r="5" fill="#000" />
        <circle cx="50" cy="32" r="5" fill="#000" />
        <path d="M30 55 H50" stroke="#000" strokeWidth="4" />
      </svg>

    </div>
  );
}
