const { network } = require("hardhat");

const deployFunc = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts(); // renamed to avoid conflict
  const chainId = network.config.chainId;
};
