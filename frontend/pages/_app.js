
import "../styles/globals.css";
import { WalletProvider } from "../components/Web3Context/Web3context";
import MainLayout from "../layout/mainLayout";
function MyApp({ Component, pageProps }) {
	return (
	  // Enveloppez votre application avec le WalletProvider
	  <WalletProvider>
		<MainLayout>
		<Component {...pageProps} />
		</MainLayout>
	  </WalletProvider>
	);
  }
  
  export default MyApp;



