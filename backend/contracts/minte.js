import {
    connectWallet,
    getActiveAccount,
    disconnectWallet,
  } from "../../utils/wallet";
const contract = await Tezos.contract.at('KT1QmxPiDY1rYyfQUE249P4NDeHHWhTbGjT8');
const result = await contract.methods.mint({ source: getActiveAccount.address,  amount: donation.amount }).send();