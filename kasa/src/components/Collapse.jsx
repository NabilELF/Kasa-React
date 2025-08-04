import { useState } from "react";
import "../styles/Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <svg
          className={`arrow ${isOpen ? "open" : ""}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7L10 12L15 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
