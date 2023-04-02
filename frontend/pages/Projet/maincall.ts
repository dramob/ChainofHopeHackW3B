// main.ts
import { App } from './mint';
import { App2 } from './don';
import recipient  from './index';
import transferAmount from './index';
import address from './index';
const addr=address.toString();
const receiver=recipient.toString()
const RPC_URL = "https://ghostnet.ecadinfra.com";
const ACCOUNT_TO_CHECK = address;
const COUNTER_CONTRACT = "KT1Q1pSzQFARaDgsmGs9f6vUUFSRx2zNXBKc";
const mintaddress='KT1QmxPiDY1rYyfQUE249P4NDeHHWhTbGjT8';
const AMOUNT = parseFloat(transferAmount.toString());
const INCREMENT = 5;
//new App(RPC_URL).mint(addr,AMOUNT, mintaddress);
//new App2(RPC_URL).sendTz(receiver, AMOUNT);

