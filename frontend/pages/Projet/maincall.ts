// main.ts
import { App } from './mint';
import { App2 } from './don';
import recipient  from './index';
import transferAmount from './index';
import address from './index';
const RPC_URL = "https://ghostnet.ecadinfra.com";
const ACCOUNT_TO_CHECK = address;
const COUNTER_CONTRACT = "KT1Q1pSzQFARaDgsmGs9f6vUUFSRx2zNXBKc";
const mintaddress='KT1QmxPiDY1rYyfQUE249P4NDeHHWhTbGjT8';
const AMOUNT = 10;
const INCREMENT = 5;

new App2(RPC_URL).sendTz(recipient,transferAmount);
new App(RPC_URL).mint(address,transferAmount, mintaddress);
