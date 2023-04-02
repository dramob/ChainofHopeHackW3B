// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import {WalletProvider} from '../../components/Web3Context/Web3context';
import { connectWallet,
    getActiveAccount,
    disconnectWallet}  from '../../utils/wallet';
export class App2 {
    private tezos: TezosToolkit;
    private rpcUrl: string;

    constructor(rpcUrl: string) {
        this.rpcUrl = rpcUrl
        this.tezos = new TezosToolkit(rpcUrl);
        
        
    }

    public async sendTz(address: string, amount: number) {
        this.tezos.setWalletProvider(await  connectWallet())
        console.log(`Transfering ${amount} ꜩ to ${address}...`);

        this.tezos.wallet.transfer({ to: address, amount: amount }).send()
            .then(op => {
                console.log(`Waiting for ${op.opHash} to be confirmed...`);
                return op.confirmation(1).then(() => op.opHash);
            })
            .then(hash => console.log(`${hash}`))
            .catch(error => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));
    }
}