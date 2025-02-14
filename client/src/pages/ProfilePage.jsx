import "../components/candidate.css"; 

const candidates = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    vision: "I aim to bring transparency and progress to our community."
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    vision: "My goal is to ensure equal opportunities for everyone."
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: "https://via.placeholder.com/150",
    vision: "Focusing on education and healthcare improvements."
  }
];

function ProfilePage() {
  return (
    <div className="candidate-container">
      <h1 className="candidate-title">Candidate List</h1>
      <div className="candidate-grid">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <img src={candidate.image} alt={candidate.name} className="candidate-image" />
            <h2 className="candidate-name">{candidate.name}<br /></h2>
            <p className="candidate-vision">{candidate.vision}</p>
          </div>
        ))}
      </div>
      <button className="vote-button">Cast Vote!</button>
    </div>
  );
}


export default ProfilePage;