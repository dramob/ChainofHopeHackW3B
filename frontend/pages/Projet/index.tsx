import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Transfers from "../../components/Transfers";
import {
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from "../../utils/wallet"
import { TezosToolkit } from '@taquito/taquito';
import { App2 } from './don';
import { App  } from "./mint";
const Tezos = new TezosToolkit('https://ghostnet.ecadinfra.com');
const allProjects = [
  {
    id: 'tz1abcdefghij1234567895',
    name: 'Croix-Rouge',
    description: 'Aide et soutien aux personnes affectées par les catastrophes naturelles et les conflits armés.',
    website: 'https://www.icrc.org',
  },
  {
    id: 'tz1abcdefghij1234567894',
    name: 'Médecins Sans Frontières',
    description: "Soins médicaux d'urgence aux personnes touchées par les conflits, les épidémies et les catastrophes naturelles.",
    website: 'https://www.msf.org',
  },
  {
    id: 'tz1abcdefghij1234567892',
    name: 'UNICEF',
    description: "Protection et promotion des droits de l'enfant, y compris l'éducation, la santé et le bien-être.",
    website: 'https://www.unicef.org',
  },
  {
    id: 'tz1abcdefghij1234567893',
    name: 'Amnesty International',
    description: 'Défense des droits de la personne et lutte contre les injustices dans le monde entier.',
    website: 'https://www.amnesty.org',
  },
  {
    id: 'tz1abcdefghij1234567891',
    name: 'World Wildlife Fund',
    description: 'Conservation de la nature et réduction des menaces les plus urgentes pour la diversité de la vie sur Terre.',
    website: 'https://www.worldwildlife.org',
  },
];
const activeAccount=getActiveAccount();


const mintaddress='KT1QmxPiDY1rYyfQUE249P4NDeHHWhTbGjT8';
export default function Projets(address:string ) {
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayedProjects, setDisplayedProjects] = useState(allProjects.slice(0, 3));
  const [recipient, setRecipient] = useState('');
  const [transferAmount, setTransferAmount] = useState(0)

  const handleDonateClick = (projectId) => {
    setSelectedProject(projectId);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call an external function here to process the recipient and transferAmount values
    console.log(`Recipient: ${recipient}, Transfer Amount: ${transferAmount}`);
   
    //new App2("https://ghostnet.ecadinfra.com/").sendTz(recipient, transferAmount);
    new App("https://ghostnet.ecadinfra.com/").mint(address,`${transferAmount}`, mintaddress);
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
            className="bg- border-2 border-gray-200 p-6 rounded-lg shadow-md"
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
              className="bg-blue-500 text- mt-4 py-2 px-4 rounded"
            >
              Donation
            </button>
          </div>
        ))}
      </div>
      {displayedProjects.length < allProjects.length && (
        <button
          onClick={loadMoreProjects}
          className="bg-blue-500 text- my-6 py-2 px-6 rounded"
        >
          Afficher plus
        </button>
      )}
      {showForm && (
      <form onSubmit={handleSubmit} className="mt-8">
        <div>
          <label htmlFor="recipient">Recipient Address:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="transferAmount">Transfer Amount:</label>
          <input
            type="number"
            id="transferAmount"
            value={transferAmount}
            onChange={(e) => setTransferAmount(parseFloat(e.target.value))}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      )}</div>
  );
}