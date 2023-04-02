// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';

export class App2 {
    private tezos: TezosToolkit;
    private rpcUrl: string;

    constructor(rpcUrl: string) {
        this.rpcUrl = rpcUrl
        this.tezos = new TezosToolkit(rpcUrl);
        this.tezos.setSignerProvider(new InMemorySigner('YOUR_PRIVATE_KEY'))
    }

    public sendTz(address: string, amount: number) {
        console.log(`Transfering ${amount} ꜩ to ${address}...`);

        this.tezos.contract.transfer({ to: address, amount: amount })
            .then(op => {
                console.log(`Waiting for ${op.hash} to be confirmed...`);
                return op.confirmation(1).then(() => op.hash);
            })
            .then(hash => console.log(`${hash}`))
            .catch(error => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));
    }
}