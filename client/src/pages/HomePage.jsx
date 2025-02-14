import "../components/card.css"; 
import "./ProfilePage.jsx";
import { useState } from "react";
import ProfilePage from "./ProfilePage.jsx";

const elections = [
  { name: "Presidential Election", status: "Enrolled", from: "10 Feb 2025", to: "15 Feb 2025" },
  { name: "State Election", status: "Not Enrolled", from: "20 Mar 2025", to: "25 Mar 2025" },
  { name: "Local Council Election", status: "Enrolled", from: "5 Apr 2025", to: "10 Apr 2025" }
];

function HomePage() {
  const [showCandidate, setShowCandidate] = useState(false);

  const handleButtonClick = () => {
    setShowCandidate(true);
  };
  if (showCandidate) {
    return <ProfilePage />;
  }
  return (
    <div className="election-container">
      <h1 className="election-title">Upcoming Elections</h1>

      <div className="election-grid">
        {elections.map((election, index) => (
          <div key={index} className="election-card">
            <h2 className="election-name">{election.name}</h2>
            <p className="election-status">
              Status:{" "}
              <span className={election.status === "Enrolled" ? "enrolled" : "not-enrolled"}>
                {election.status}
              </span>
            </p>
            <p className="election-time">
              Time: {election.from} - {election.to}
            </p>
            <button
              className={`vote-button ${election.status === "Enrolled" ? "enabled" : "disabled"}`}
              disabled={election.status !== "Enrolled"}
              onClick={handleButtonClick}
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
