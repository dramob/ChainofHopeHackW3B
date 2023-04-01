import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home() {
  const router = useRouter();

  const handleDonationClick = () => {
    router.push('/Associations');
  };

  return (
    <div className={styles.container}>
      <video
        autoPlay
        muted
        loop
        className={styles.videobackground}
        src="/videoacceuil.mp4"
        type="video/mp4"
      />
      <div className={styles.content}>
        <Header
          title="Celui qui cache sa générosité est doublement généreux"
          subtitle="Bienvenue sur notre site !"
        />
        <button
          className={styles.fairetransaction}
          onClick={handleDonationClick}
        >
          Faire un don
        </button>
      </div>
    </div>
  );
}
