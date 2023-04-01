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

  return (
    <div>
      <h1>Les Services</h1>
      <div className={styles.servicesList}>
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
          >
            {service.name}
          </button>
        ))}
      </div>
      {selectedService && (
        <div className={styles.chat}>
          <h2>Messages pour le service {selectedService}</h2>
          <div className={styles.messages}>
            {messages[selectedService] &&
              messages[selectedService].map((message, index) => (
                <p key={index}>{message}</p>
              ))}
          </div>
          <form onSubmit={handleMessageSubmit}>
            <input type="text" name="message" placeholder="Entrez votre message" />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      )}
    </div>
  );
}
