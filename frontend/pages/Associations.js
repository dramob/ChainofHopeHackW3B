import { useState } from 'react';
import Projets from './Projets';
import Services from './Services';
import styles from '../styles/Navbar.module.css'; // Importez le fichier CSS

export default function Associations() {
  const [selectedPage, setSelectedPage] = useState('projets');

  return (
    <div>
      <div className={styles.Navbar}> {/* Appliquez le style subNavbar */}
        <button onClick={() => setSelectedPage('projets')}>Les Projets</button>
        <button onClick={() => setSelectedPage('services')}>Les Services</button>
      </div>
      {selectedPage === 'projets' ? <Projets /> : <Services />}
    </div>
  );
}
