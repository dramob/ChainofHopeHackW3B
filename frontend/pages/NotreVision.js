// Importation de React et des styles du fichier '../styles/APropos.module.css'
import React from 'react';
import styles from '../styles/APropos.module.css';

// Importation du composant Header depuis le fichier '../components/Header'
import Header from '../components/Header';

// Définition d'une fonction  APropos
const APropos = () => {
  return (
    <div className={styles.content}>
      {/* Affichage du composant Header avec un titre et un sous-titre */}
      <Header title="À propos" subtitle="Information sur notre entreprise et notre équipe." />
      {/* Paragraphe expliquant comment la technologie blockchain est utilisée pour stocker et échanger des documents sensibles en toute sécurité */}
      <p className={styles.blockchain}>
        De nos jours, les scandales de corruption et de mauvaise gestion des fonds au sein des grandes organisations non gouvernementales (ONG) ont semé le doute dans l'esprit des donateurs. Afin de restaurer la confiance et d'assurer une transparence totale, un projet communautaire de Gift economy à ete lancé.Chez Chain of Hope, nous nous engageons à garantir la transparence et la traçabilité des dons aux associations. Pour cela, nous proposons une solution on-chain reposant sur la blockchain Tezos. Nous voulons également créer un véritable lien entre les donateurs et les associations en favorisant une communication ouverte et honnête.

En utilisant notre token $COH, les donateurs peuvent renforcer le lien avec les différentes associations de notre communauté et continuer à soutenir notre projet. Nous sommes convaincus que notre action contribuera à renforcer le secteur associatif et à soutenir les causes les plus importantes pour les gens. Rejoignez-nous dans notre mission pour faire de notre vision une réalité.
      </p>
    </div>
  );
};

// Exportation du composant APropos par défaut
export default APropos;
