
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const allProjects = [
  {
    id: 1,
    name: 'Croix-Rouge',
    description: 'Aide et soutien aux personnes affectées par les catastrophes naturelles et les conflits armés.',
    website: 'https://www.icrc.org',
  },
  {
    id: 2,
    name: 'Médecins Sans Frontières',
    description: "Soins médicaux d'urgence aux personnes touchées par les conflits, les épidémies et les catastrophes naturelles.",
    website: 'https://www.msf.org',
  },
  {
    id: 3,
    name: 'UNICEF',
    description: "Protection et promotion des droits de l'enfant, y compris l'éducation, la santé et le bien-être.",
    website: 'https://www.unicef.org',
  },
  {
    id: 4,
    name: 'Amnesty International',
    description: 'Défense des droits de la personne et lutte contre les injustices dans le monde entier.',
    website: 'https://www.amnesty.org',
  },
  {
    id: 5,
    name: 'World Wildlife Fund',
    description: 'Conservation de la nature et réduction des menaces les plus urgentes pour la diversité de la vie sur Terre.',
    website: 'https://www.worldwildlife.org',
  },
];

export default function Projets() {
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayedProjects, setDisplayedProjects] = useState(allProjects.slice(0, 3));

  const handleDonateClick = (projectId) => {
    setSelectedProject(projectId);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez ici la soumission du formulaire
    setShowForm(false);
  };

  const loadMoreProjects = () => {
    setDisplayedProjects(allProjects.slice(0, displayedProjects.length + 3));
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-4xl font-bold mb-6">Les Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-md"
          >
            <span className="text-2xl font-semibold">{project.name}</span>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 mt-2 block"
            >
              Visiter le site de l'organisation
            </a>
            <button
              onClick={() => handleDonateClick(project.id)}
              className="bg-blue-500 text-white mt-4 py-2 px-4 rounded"
            >
              Donation
            </button>
          </div>
        ))}
      </div>
      {displayedProjects.length < allProjects.length && (
        <button
          onClick={loadMoreProjects}
          className="bg           blue-500 text-white my-6 py-2 px-6 rounded"
          >
            Afficher plus
          </button>
        )}
        {showForm && (
          <form onSubmit={handleSubmit} className="mt-8">
            <label htmlFor="amount" className="block text-xl font-semibold mb-2">
              Montant:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="0"
              step="0.000000001" // Permettre les valeurs décimales
              className="border-2 border-gray-200 p-2 rounded-md w-full mb-4"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded"
            >
              Soumettre
            </button>
          </form>
        )}
      </div>
    );
  }
  
