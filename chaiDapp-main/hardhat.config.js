require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

//get the goerli url and private key from environmentvariables
const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
//export hardhat config object
module.exports = {
  solidity: "0.8.17",
  //define the networks hardhat should connect to 
  networks: {
    //define configuration of goerli test network
    goerli: {
      //specify network url  and account that shd be used
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
