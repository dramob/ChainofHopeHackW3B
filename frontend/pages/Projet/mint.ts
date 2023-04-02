import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
import { connectWallet } from '../../utils/wallet';

export class App {
    private tezos: TezosToolkit;
    private rpcUrl: string;

    constructor(rpcUrl: string) {
        this.tezos = new TezosToolkit(rpcUrl);
       // this.tezos.setWalletProvider(await connectWallet());
    }

    public async mint(recipient: string, mintAmount: string, contract: string) {
        this.tezos.setWalletProvider(await  connectWallet())
        /* tslint:disable-next-line */
        const address1='tz1dMkZtAF2xP8j2kNukoS9axGoK3RCyjsPj';
        
        this.tezos.wallet
            .at(contract)
            .then((contract) => {
                console.log(contract.methods.mint);
                console.log(`Minting ${mintAmount} tokens for ${recipient}...`);
                
                return contract.methods.mint( mintAmount ,address1 ).send();
            })
            .then((op) => {
                console.log(`Awaiting for ${op.opHash} to be confirmed...`);
                return op.confirmation(3).then(() => op.opHash);
            })
            .then((hash) => console.log(`Operation injected: https://hangzhounet.smartpy.io/${hash}`))
            .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));
    }
}