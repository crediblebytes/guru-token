const GuruTokenCrowdsale = artifacts.require("../contracts/GuruTokenCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const START_TIME = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1; // one second in the future
    const END_TIME = START_TIME + (86400 * 20); // 20 days
    const RATE = new web3.BigNumber(1000); // 1000 tokens per wei
    const WALLET = accounts[0];

    deployer.deploy(GuruTokenCrowdsale, START_TIME, END_TIME, RATE, WALLET);
};
