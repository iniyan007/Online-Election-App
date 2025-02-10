import "../components/card.css"; // Import external CSS file

const elections = [
  { name: "Presidential Election", status: "Enrolled", from: "10 Feb 2025", to: "15 Feb 2025" },
  { name: "State Election", status: "Not Enrolled", from: "20 Mar 2025", to: "25 Mar 2025" },
  { name: "Local Council Election", status: "Enrolled", from: "5 Apr 2025", to: "10 Apr 2025" }
];

function HomePage() {
 // ✅ Correct placement

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
       // ✅ Correct path
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
