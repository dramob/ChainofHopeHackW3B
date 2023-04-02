import styles from "../../styles/Navbar.module.css";
import { useWallet } from "../Web3Context/Web3context";
import { useEffect, useState } from "react";
// 4. Créez un hook personnalisé pour accéder facilement au contexte


// Exemple d'utilisation dans un composant Navbar
export default function Navbar() {
  // Utilisez le hook useWallet pour accéder aux variables et fonctions du contexte de portefeuille
  const { wallet, handleConnectWallet, handleDisconnectWallet } = useWallet();

  // Utilisez les variables et fonctions dans votre composant Navbar
  return (
    <nav className={styles.navbar}>
      {/* Votre code HTML ici */}
      <a href="" target={"_blank"}>
        <img className={styles.chainvault} src="/chainofhope.png" alt="COH logo"></img>
      </a>
      <div className={styles.navLinks}>
        <a href="/" className={styles.navLink}>Accueil</a>
        <a href="/NotreVision" className={styles.navLink}>Notre Vision</a>
        <a href="/Associations" className={styles.navLink}>Les Associations</a>
      </div>
      <button
        onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
      className={`${styles.connectButton} bg-red-500 text-white cursor-pointer`}
      >
        💳{" "}
        {wallet
          ? wallet.slice(0, 4) +
            "..." +
            wallet.slice(wallet.length - 4, wallet.length)
          : "Connect"}
      </button>
    </nav>
  );
}

