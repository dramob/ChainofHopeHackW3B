import styles from "../../styles/Navbar.module.css";
import {
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from "../../utils/wallet";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [wallet, setWallet] = useState(null);

  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet();
    setWallet(wallet);
  };
  const handleDisconnectWallet = async () => {
    const { wallet } = await disconnectWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    const func = async () => {
      const account = await getActiveAccount();
      if (account) {
        setWallet(account.address);
      }
    };
    func();
  }, []);



  // La fonction Navbar retourne le contenu JSX suivant :
  return (
    <nav className={styles.navbar}>
      <a href="https://enseignements.telecom-sudparis.eu/fiche.php?m=21069" target={"_blank"}>
        <img className={styles.chainvault} src="/chainofhope.png" alt="Chainvault"></img>
      </a>
      <div className={styles.navLinks}>
        <a href="/" className={styles.navLink}>Accueil</a>
        <a href="/NotreVision" className={styles.navLink}>Notre Vision</a>
        <a href="/Associations" className={styles.navLink}>Les Associations</a>
      </div>
      <button
          onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
          className="bg-red-500 px-6 py-2 rounded-sm text-xs font-semibold text-white cursor-pointer"
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
