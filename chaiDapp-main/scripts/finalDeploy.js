const hre = require("hardhat");

//asynchronous function called main
async function main() {
  //get the contract factory for the chai contract
  const chai = await hre.ethers.getContractFactory("chai");
  //deploy the chai contract and get an instance of it 
  const contract = await chai.deploy(); //instance of contract
//wait for contract to be deployed
  await contract.deployed();
  //then log the address of the deployed contract
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
