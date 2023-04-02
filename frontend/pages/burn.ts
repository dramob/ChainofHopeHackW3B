import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import { connectWallet } from '../utils/wallet';

export class App3 {
    private tezos: TezosToolkit;
    private rpcUrl: string;

    constructor(rpcUrl: string) {
        this.tezos = new TezosToolkit(rpcUrl);
       // this.tezos.setWalletProvider(await connectWallet());
    }

    public async burn(recipient: string, mintAmount: string, contract: string) {
        this.tezos.setWalletProvider(await  (await connectWallet()).wallet)
        /* tslint:disable-next-line */
        const address3=(await connectWallet()).address;
        
        this.tezos.wallet
            .at(contract)
            .then((contract) => {
                console.log(contract.methods.burn);
                console.log(`Burning ${mintAmount} tokens for ${recipient}...`);
                
                return contract.methods.burn( mintAmount ,address3 ).send();
            })
            .then((op) => {
                console.log(`Awaiting for ${op.opHash} to be confirmed...`);
                return op.confirmation(3).then(() => op.opHash);
            })
            .then((hash) => console.log(`Operation injected: https://hangzhounet.smartpy.io/${hash}`))
            .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));
    }
}