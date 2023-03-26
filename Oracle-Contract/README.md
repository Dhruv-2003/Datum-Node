# Client Side Contract deployer

This is a hardhat folder with the Client Side Contracts to be deployed on the new Chain you wanna build your Oracle on.

1. Set the env Variables

```bash
cp .env.example .env
```

2. Add `RPC_URL` for your chain and `PRIVATE_KEY` of the wallet containing funds to deploy the contracts.

If you are running OpStack Rollup , refer [here](https://stack.optimism.io/docs/build/getting-started/#use-your-rollup)

3. Deploy the contracts

```bash
npx hardhat run scripts/deploy.js
```

The Contract Addresses should be saved in the `Constants/data.js` file
