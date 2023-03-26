// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require("fs");
const path = require("path");
const fsPromise = require("fs").promises;

let deployementData = [];

async function deployPriceOracle() {
  console.log("Deploying the Price Oracle V1 ...");
  const PriceOracle = await hre.ethers.getContractFactory("PriceOracleV1");
  const priceOracle = await PriceOracle.deploy();

  await priceOracle.deployed();

  deployementData.push({ PriceOracleV1: priceOracle.address });

  console.log(`Price Oracle V1 deployed at ${priceOracle.address}`);
}

async function deployVRFOracle() {
  console.log("Deploying the VRF Oracle V2 ...");
  const VRFOracle = await hre.ethers.getContractFactory("VRFOracleV2");
  const vrfOracle = await VRFOracle.deploy();

  await vrfOracle.deployed();

  deployementData.push({ VRFOracleV2: vrfOracle.address });

  console.log(`VRF Oracle V2 deployed at ${vrfOracle.address}`);
}

async function deployOptimisticOracleV2() {
  console.log("Deploying the Optimistic Oracle V2 ...");
  const OptimisticOracleV2 = await hre.ethers.getContractFactory(
    "OptimisticOracleV2"
  );
  const ooV2 = await OptimisticOracleV2.deploy();

  await ooV2.deployed();

  deployementData.push({ OptimisticOracleV2: ooV2.address });

  console.log(`Optimistic Oracle V2 deployed at ${ooV2.address}`);
}

async function deployOptimisticOracleV3() {
  console.log("Deploying the Optimistic Oracle V3 ...");
  const OptimisticOracleV3 = await hre.ethers.getContractFactory(
    "OptimisticOracleV3"
  );
  const ooV3 = await OptimisticOracleV3.deploy();

  await ooV3.deployed();

  deployementData.push({ OptimisticOracleV3: ooV3.address });

  console.log(`Optimistic Oracle V2 deployed at ${ooV3.address}`);
}

async function deployAPIOracle() {
  console.log("Deploying the API Oracle ...");
  const APIOracle = await hre.ethers.getContractFactory("APIOracle");
  const apiOracle = await APIOracle.deploy();

  await apiOracle.deployed();

  deployementData.push({ APIOracle: apiOracle.address });

  console.log(`API Oracle deployed at ${apiOracle.address}`);
}

async function main() {
  // price Oracle
  await deployPriceOracle();

  // VRF Oracle
  await deployVRFOracle();

  // OOV2
  await deployOptimisticOracleV2();

  // OOV3
  await deployOptimisticOracleV3();

  // API Oracle
  await deployAPIOracle();

  console.log("All Contracts deployed , Storing Data ...");

  console.log(deployementData);
  // Storing the deployed info in the
  // await fsPromise.appendFile(
  //   path.join(__dirname, "..", "Constants", "data.js"),
  //   deployementData
  // );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
