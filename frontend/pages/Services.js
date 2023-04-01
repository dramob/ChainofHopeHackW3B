import { useState } from 'react';
import styles from '../styles/Service.module.css'; // Importez le fichier CSS

const services = [
  { id: 1, name: 'Service 1' },
  { id: 2, name: 'Service 2' },
  { id: 3, name: 'Service 3' },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [messages, setMessages] = useState({});

  const handleServiceClick = (id) => {
    setSelectedService(id);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (!messages[selectedService]) {
      setMessages({ ...messages, [selectedService]: [message] });
    } else {
      setMessages({
        ...messages,
        [selectedService]: [...messages[selectedService], message],
      });
    }
    e.target.message.value = '';
  };

  return (    <div className="p-8">
  <h1 className="text-2xl font-bold mb-4">Les Services</h1>
  <div className="flex space-x-4 mb-8">
    {services.map((service) => (
      <button
      key={service.id}
      onClick={() => handleServiceClick(service.id)}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {service.name}
    </button>
  ))}
</div>
{selectedService && (
  <div className="bg-gray-100 p-4 rounded">
    <h2 className="text-xl font-bold mb-4">Messages pour le service {selectedService}</h2>
    <div className="mb-4">
      {messages[selectedService] &&
        messages[selectedService].map((message, index) => (
          <p key={index} className="border-b border-gray-200 py-2">
            {message}
          </p>
        ))}
    </div>
    <form onSubmit={handleMessageSubmit} className="flex space-x-4">
      <input
        type="text"
        name="message"
        placeholder="Entrez votre message"
        className="border border-gray-300 p-2 w-full rounded"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Envoyer
      </button>
    </form>
  </div>
)}
</div>
);
}



  

