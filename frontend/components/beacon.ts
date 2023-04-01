import { BeaconWallet } from '@taquito/beacon-wallet'
import { TezosToolkit, OpKind } from '@taquito/taquito'
import { BigNumber } from 'bignumber.js'


const Tezos = new TezosToolkit('https///tezos-node.prod.gke.papers.tech')

export interface ContractStorage {
  countdown_milliseconds: BigNumber
  leader: string
  leadership_start_timestamp: number
}

export interface ColorContractStorage {
  highest_bidder: string
  state: BigNumber
  token_id: BigNumber
}

let globalWallet: BeaconWallet | undefined

const getBeaconInstance = async () => {
  if (!globalWallet) {
    // Create a new BeaconWallet instance. The options will be passed to the DAppClient constructor.
    const wallet = new BeaconWallet({ name: 'wallet' })

    // Setting the wallet as the wallet provider for Taquito.
    Tezos.setWalletProvider(wallet)
    globalWallet = wallet
  }

  return globalWallet
}

export const connectToBeacon = async () => {
  console.log('CONNECTING TO BEACON')
  const wallet = await getBeaconInstance()


  if (await wallet.client.getActiveAccount()) {
    // Check if we already have an account connected, so we can skip requestPermissions.
    return wallet
  }

  // Send permission request to the connected wallet. This will either be the browser extension, or a wallet over the P2P network.
  await wallet.requestPermissions()

  return wallet
}

export const disconnectFromBeacon = async () => {
  const wallet = await getBeaconInstance()
  await wallet.clearActiveAccount()
}
export const getMyAddress = async () => {
    const wallet = await getBeaconInstance()
  
    const activeAccount = await wallet.client.getActiveAccount()

  
    return activeAccount?.address ?? ''}
