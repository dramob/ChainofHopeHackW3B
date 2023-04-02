import { useState } from 'react';
import styles from '../styles/Service.module.css';

const services = [
  { id: 1, name: 'Service 1', company: 'Entreprise A', cost: 100, averageRating: 0, ratingCount: 0 },
  { id: 2, name: 'Service 2', company: 'Entreprise B', cost: 200, averageRating: 0, ratingCount: 0 },
  { id: 3, name: 'Service 3', company: 'Entreprise C', cost: 300, averageRating: 0, ratingCount: 0 },
];
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [confirming, setConfirming] = useState({ show: false, serviceId: null });
  const [rating, setRating] = useState({ show: false, serviceId: null });

  const handleServiceClick = (id) => {
    setSelectedService(id);
  };
  const [currentRating, setCurrentRating] = useState(0);

  const handleMouseEnter = (ratingValue) => {
    setCurrentRating(ratingValue);
  };
  const showConfirmation = (serviceId) => {
    setConfirming({ show: true, serviceId });
  };

  const handleConfirmationYes = () => {
    burnTokens(confirming.serviceId);
    setConfirming({ show: false, serviceId: null });
    setRating({ show: true, serviceId: selectedService });
  };

  const handleConfirmationNo = () => {
    setConfirming({ show: false, serviceId: null });
  };

  const handleRating = (ratingValue) => {
    const serviceIndex = services.findIndex(service => service.id === selectedService);
    const service = services[serviceIndex];
    service.ratingCount += 1;
    service.averageRating = ((service.averageRating * (service.ratingCount - 1)) + ratingValue) / service.ratingCount;

    // Mettre à jour le service dans le tableau
    const newServices = [...services];
    newServices[serviceIndex] = service;
    setSelectedService(null);

    console.log(`Note donnée : ${ratingValue}`);
    setRating({ show: false, serviceId: null });
    const renderStars = () => {
      const stars = [];
  
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <a
            key={i}
            onClick={() => handleRating(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            title={`Donner ${i} étoiles`}
            className={i <= currentRating ? styles.filled : ''}
          >
            ☆
          </a>
        );
      }
      return stars;
    };
  
  };
  return (
    <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Les Services</h1>
    <div className="flex space-x-4 mb-8">
      {services.map((service) => (
        <button
        key={service.id}
        onClick={() => handleServiceClick(service.id)}
        className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-700"
      >
        {service.name} - {service.cost}COH - {service.averageRating.toFixed(1)}☆
      </button>
      
      ))}
    </div>
    {selectedService && (
      <div className="bg-red-100 p-4 rounded">
          
          <button
            onClick={() => showConfirmation(selectedService)}
            className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-700 mt-4"
          >
            Brûler des tokens
          </button>
          {confirming.show && confirming.serviceId === selectedService && (
            <div className="bg-white p-4 rounded border-2 border-gray-200 mt-4">
              <p>Êtes-vous sûr de vouloir brûler des tokens pour ce service ?</p>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleConfirmationYes}
                  className="bg-grey-500 text-red px-4 py-2 rounded hover:bg-green-700"
                >
                  Oui
                </button>
                <button
                  onClick={handleConfirmationNo}
                  className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-700"
                >
                  Non
                </button>
              </div>
            </div>
          )}
          {rating.show && rating.serviceId === selectedService && (
            <div className={`${styles.rating} mt-4`}>
              <span
               className="mr-2">Notez ce service :</span>
               <a onClick={() => handleRating(5)} title="Donner 5 étoiles">☆</a>
               <a onClick={() => handleRating(4)} title="Donner 4 étoiles">☆</a>
               <a onClick={() => handleRating(3)} title="Donner 3 étoiles">☆</a>
               <a onClick={() => handleRating(2)} title="Donner 2 étoiles">☆</a>
               <a onClick={() => handleRating(1)} title="Donner 1 étoile">☆</a>
             </div>
           )}
         </div>
       )}
     </div>
     );
    }
    
    function burnTokens(serviceId) {
    }
     