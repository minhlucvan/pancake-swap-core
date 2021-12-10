var PancakeERC20 = artifacts.require('PancakeERC20');
var PancakeFactory = artifacts.require('PancakeFactory');

module.exports = async function(deployer) {
    const owner = '0x14a6a97De17A291510d0F596261145652D08B03A';
    console.log("deploy PancakeERC20");
    await deployer.deploy(PancakeERC20);

    console.log("deploy PancakeFactory", owner);
    await deployer.deploy(PancakeFactory, owner);
    // Additional contracts can be deployed here
};