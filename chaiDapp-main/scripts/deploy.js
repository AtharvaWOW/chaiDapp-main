const hre = require("hardhat");
async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
  //hre to format the bignumber ir balancebigint into  a string that represents its value in ether

  //ethers is a library used for interacting with ethereum blockchain
}
//require is used to import modules from node js, we import hard hat module
//async function returns a promise 
//await is used to wait for a promise to resolve or reject 

async function cosoleBalances(addresses) {
  let counter = 0;
  
  for (const address of addresses) {
    console.log(`Address ${counter} balance:`, await getBalances(address));
    counter++;
  }
}


//define an async function that logs in details of various memos

async function consoleMemos(memos) {
  //loop over each memo in the memos array
  for (const memo of memos) {
    //extract timestamp, name, sender address and message fro memo 
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;
    console.log(
      `At ${timestamp},name ${name},address ${from},message ${message}`
    );
  }
}

async function main() {
  //destructure the first four signers from the HardHat runtime environment(hre)
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  //this way we get first 4 signers of the hardhat runtime environment 
  //get the contract factory for the chai contract
  const chai = await hre.ethers.getContractFactory("chai");
  //deploy the chai contract
  const contract = await chai.deploy(); //instance of contract

  //wait for it to be deployed
  await contract.deployed();
  //log the address of the deployed contract
  console.log("Address of contract:", contract.address);

  //define an array of addresses from where the chai will be bought 
  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  console.log("Before buying chai");
  //then display the balances of the addresses before buying the chai
  await cosoleBalances(addresses);

  //then we write the amount to be used for buying chai 
  const amount = { value: hre.ethers.utils.parseEther("1") };
  //hre is development environment for ethereum software 
  //ethers is a library used to interact with ethereum blockchain

  //parseEther is a function that takes string and retursn a big number that represents the value in ether

  //so a bigNumber to 1 wei that is the smallest unit of ethererum transaction 

  //buy chai from first address
  await contract.connect(from1).buyChai("from1", "Very nice chai", amount);

  //buy chai from second address
  await contract.connect(from2).buyChai("from2", "Very nice course", amount);

  await contract
    .connect(from3)
    .buyChai("from3", "Very nice information", amount);

  console.log("After buying chai");

  //now after buying chai display the balances of the addresses
  await cosoleBalances(addresses);

  //get the memos from the contract
  const memos = await contract.getMemos();
  //then display the memos
  consoleMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


/**
 * provider is the primary way of interacting with the blockchain, we can query the blockchain , send transactions and listen to events
 * 
 * getBlockNumber - returns latest block number 
 * 
 * getGasPrice
 * 
 * getBalance
 * 
 * getTransaction(hash) - get details of specified transaction 
 * 
 * sendTransaction(transaction) - send a transaction to the blockchain
 * 
 * call(transaction) - execute a message call transaction
 * 
 * on(eventName, listener) - listen to events
 * 
 * ---------------------
 * 
 * then we go over to wallet 
 * 
 * with wallet we manage private keys and signing transactions 
 * 
 * createRandom - creates a random new wallet
 * 
 * fromMnemonic - creates a wallet from a mnemonic
 * 
 * from privateKey - creates a wallet from a private key
 * 
 * signTransaction - signs a transaction
 * 
 * sendTransaction - sends a transaction
 * 
 * signMessage - signs a message
 * 
 * we sign transactions to prove senders authentication , anyone can use your public key to verify that you signed the transaction
 * 
 * integrity - a signed transaction cannot be altered without invalidating the signature
 * 
 * this ensures transaction details such as recipient amount and gas price cannot be tampererd with , maintaing its integrity 
 * 
 * 
 * sender cannot deny transaction 
 * 
 * 
 * 
 * for example 
 * 
 * tx = {to, value, gasprice(it is the amount of ethereum i am willing to pay for each unit of gas ), gaslimit(it refers to the maximum amount of gas you are willing to spend on transaction), nonce(unique number associated with a transaction) }
 * 
 * const signedTx = await wallet.signTransaction(tx)
 * [sign the transaction then next send it]
 * 
 * const txResponse = await provider.sendTransaction(signedTx)
 * 
 * then wait for receipt 
 * 
 * 
 * -----------
 * 
 * contract - this is a model to interact with smart contracts
 * 
 * new contract - creates a new contract instance
 * 
 * contract.on - listens to events
 * 
 * -----------
 * 
 * utils - this is a collection of utility functions
 * 
 * parseUnits - converts a value to the smallest unit of ether
 * 
 * 
 * BigNumber - this is a class that represents large numbers
 * 
 * bignumber.add - adds a value to the bigNumber 
 * 
 * bignumber.sub - subtracts a value from the bigNumber
 * 
 * bignumber.mul - multiplies a value with the bigNumber
 * 
 * bignumber.div - divides a value with the bigNumber
 * 
 * 
 * toNumber - converts it ti a js number 
 * 
 * 
 * ---------------------
 * 
 * how to do payment
 * 
 * install ether js
 * conenct to provider - to ineteract with eth network
 * 
 * connect to a wallet - to manage your private keys and sign transactions 
 * 
 * send a transaction - to send a transaction to the blockchain
 * 
 * 
 * ---------------------
 * 
 * connect to a provider 
 * 
 * then connect a wallet // we need a wallet to send payements 
 * 
 * const privateKey = "0x1234567890"
 * const wallet = new ethers.Wallet(privateKey, provider)
 * 
 * 
 * ---
 * then send a transaction 
 * 
 * async function sendPayment(){
 *  recipient = "0x1234567890"
 * amountinEther = 1 //amount to send
 * 
 * 
 * const tx = {
 * to: recipient,
 * value: ethers.utils.parseEther(amountinEther)
 * 
 * }
 * 
 * 
 * const transaction = await wallet.sendTransaction(tx)
 * 
 * console.log(transaction)
 * 
 * const receipt = await transaction.wait()
 * console.log(receipt)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */