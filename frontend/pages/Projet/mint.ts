import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';

export class App {
    private tezos: TezosToolkit;
    private rpcUrl: string;

    constructor(rpcUrl: string) {
        this.tezos = new TezosToolkit(rpcUrl);
        this.tezos.setSignerProvider(new InMemorySigner('YOUR_PRIVATE_KEY'));
    }

    public mint(recipient: string, mintAmount: number, contract: string) {
        this.tezos.contract
            .at(contract)
            .then((contract) => {
                console.log(`Minting ${mintAmount} tokens for ${recipient}...`);
                return contract.methods.mint(recipient, mintAmount).send();
            })
            .then((op) => {
                console.log(`Awaiting for ${op.hash} to be confirmed...`);
                return op.confirmation(3).then(() => op.hash);
            })
            .then((hash) => console.log(`Operation injected: https://hangzhounet.smartpy.io/${hash}`))
            .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));
    }
}