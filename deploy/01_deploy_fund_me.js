const { network } = require("hardhat");
const { deleteDeployments } = require("hardhat-deploy/dist/src/utils");
const { networkConfig } = require("../helper-hardhat-config");

const deployFunc = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts(); // renamed to avoid conflict
  const chainId = network.config.chainId;

  const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [],
    log: true,
  });
};

module.exports.default = deployFunc;
