# DATUM Node

This is Node Software for starting DATUM Oracle on your new EVM chain. It will track events and transfer data between the 2 chains acting as a messenger bridge.

## Guide

### Deploying the Contracts

```bash
cd Oracle-Contract
```

- Set the env Variables

```bash
cp .env.example .env
```

- Add `RPC_URL` for your chain and `PRIVATE_KEY` of the wallet containing funds to deploy the contracts.

If you are running OpStack Rollup , refer [here](https://stack.optimism.io/docs/build/getting-started/#use-your-rollup)

- Deploy the contracts

```bash
npx hardhat run scripts/deploy.js --network custom
```

It will log the Contract Addresses , Copy and Save it somewhere

Example message could be :

```bash
Deploying the Price Oracle V1 ...
Price Oracle V1 deployed at 0xfc6bf8AFB880c6159E7ec617BdEaFA077F4e72E3
Deploying the VRF Oracle V2 ...
VRF Oracle V2 deployed at 0x19285929B6B47386298082e6BC7e9B0a184BE0fB
Deploying the Optimistic Oracle V2 ...
Optimistic Oracle V2 deployed at 0x42F5d36Cb22f7ABB5b98eBe022AEe15F2621a20e
Deploying the Optimistic Oracle V3 ...
Optimistic Oracle V2 deployed at 0x3A6e2395Ca765Ea4443a7929316232B5E5390111
Deploying the API Oracle ...
API Oracle deployed at 0x37ba116Aa1aEdd1bCbFE4866F916FCA7B1272907
```

### Configuring the Node

Now we need to configure these Contract Address inside `/Constants` directory

- Navigate to `Constants/data.js`

- Here we need to add the Contract Addresses for the respsective deployed Contracts

```bash

const APIOracleContractAddress = `0x25d5298617C53cA2E4f4BAB91Ee3D4FF37Ac05F6`;
const OptimisticOracleV2ContractAddress = `0x3CBb6Dbe62CB2D2Daa2019B44d5D19C46AB9Dc45`;
const OptimisticOracleV3ContractAddress = `0xa197690c527C4015e557185E42997d65348fD377`;
const PriceOracleContractAddress = `0x9eDf5612D5108dD5BcCb2da086a2C52ef58b03a0`;
const VRFOracleV2ContractAddress = `0x48749fde6370FBfc9a45C5EFB559253D72B7Cd53`;

```

- Next is to setup `env` variables in root directory

```bash
cp .env.example .env
```

- Set `BRIDGE_PRIVATE_KEY` as the private key of the Oracle Node interacting with the contracts , Ensure there is enough funds for gas.

- Set `ORIGIN_RPC_URL` as the URL from Alchemy for goerli Testnet , you can get one from [here](https://dashboard.alchemy.com/)

- Set `DEST_RPC_URL` as the RPC URL of your new chain , where you want to add the Oracle

Now Configuration is done , Head over to run the Node

### Running the Node

Navigate back to the root directory of the node Project

And to run the node :

```bash
npm run dev
```

This will start the node and you will logs in the console , listening for the events , similar to this

```bash
Listening to OOV2 events ...
listening for requestData event ...
listening for settle Request event
listening for settle Request event in CONSUMER ...
Listening to OOV3 events ...
listening to assert truth event
listening to assert truth event
listening for settle request event
Listening to Price Oracle Events ...
listening for requestPrice event ...
Listening to VRF Oracle Events ...
listening to request randomness event
listening to request sent event
listeneing to request fulfil event
Listening to API Oracle Events ...
```

If you want to run Specific Node for Specific Oracles only , you can change that in `server.js`

### Conclusion

In these 3 Simple Steps , We can run add oracle to a new EVM chain and run a DATUM Oracle Node in under 10 mins

For any other issues , you can raise an issue request on [github](https://github.com/Dhruv-2003/Datum-Node/issues/new/choose)
