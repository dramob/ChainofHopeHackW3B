import { TezosToolkit } from '@taquito/taquito';
const Tezos = new TezosToolkit('https://ghostnet.ecadinfra.com');
import  {addressReceiver,transferAmount} from '../pages/Projet/index';
async  function sendTransaction(){
  render(`Fetching a private key...`);
  try {
    const response = await fetch('https://api.tez.ie/keys/ghostnet/', {
      method: 'POST',
      headers: { Authorization: 'Bearer taquito-example' },
    });
    const privateKey = await response.text();
    render(`Importing the private key...`);
    await importKey(Tezos, privateKey);

    render(`Transfering ${transferAmount} ꜩ to ${addressReceiver}...`);
    const op = await Tezos.contract.transfer({ to: addressReceiver, amount: transferAmount });
    render(`Waiting for ${op.hash} to be confirmed...`);
    await op.confirmation(1);
    const hash = op.hash;
    render(`Operation injected: https://ghost.tzstats.com/${hash}`);
  } catch (error) {
    render(`Error: ${JSON.stringify(error, null, 2)}`);
  }
}