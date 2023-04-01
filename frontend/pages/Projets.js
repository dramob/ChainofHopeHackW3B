import { useState } from 'react';

const projects = [
  { id: 1, name: 'Projet 1' },
  { id: 2, name: 'Projet 2' },
  { id: 3, name: 'Projet 3' },
];

export default function Projets() {
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDonateClick = (projectId) => {
    setSelectedProject(projectId);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez ici la soumission du formulaire
    setShowForm(false);
  };

  return (
    <div>
      <h1>Les Projets</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <span>{project.name}</span>
          <button onClick={() => handleDonateClick(project.id)}>Donation</button>
        </div>
      ))}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">Montant:</label>
          <input type="number" id="amount" name="amount" />
          <button type="submit">Soumettre</button>
        </form>
      )}
    </div>
  );
}
