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
    <div className="flex items-center justify-center h-screen">
      <video
        autoPlay
        muted
        loop
        className={styles.videobackground}
        src="/videoacceuil.mp4"
        type="video/mp4"
      />
      <div className="text-center">
        <Header
          title="Celui qui cache sa générosité est doublement généreux"
          subtitle="Bienvenue sur notre site !"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
          onClick={handleDonationClick}
        >
          Faire un don
        </button>
      </div>
    </div>
  );
}


