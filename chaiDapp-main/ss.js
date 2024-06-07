/**const buyChai will be a async function
 * it will collect info like name and of type text 
 * placeholder will be enter your name 
 * 
 * 
 * 
 * 
 * 
 */



/**
read data you can read balance of an address:

async function readBalance(address){

    const balance = await contract.balanceOf(address);
    console.log(address)

}

const addressToRead = ""
readBalance(addressToRead).catch(error)

*/

/**
 * how to write to blockchain
 * 
 * by sending a transaction 
 * 
 * async function sendEther(){
 *  recipient = "0x1234567890"
 * amountInEther = 1 //amount to send
 * 
 * tx = {
 * to, recipient,
 * value 
 * gasprice gaslimit
 * };
 * 
* const transaction = sendTransaction(tx) from wallet

const receipt = await transaction.wait()// wait for it to be confirmed


 * 
 * 
 * }
 * 
 * 
 * 
 * deploy - npx hardhat run --network goerli scripts/finalDeploy.js
 * 
 * 
 * import usestate useefffect from react
 * import ethers
 * bridge - api 
 * contract inside src folder
 * 
 * const [state,setstate] = usestate({
 * provider:null,
 * signer:null,
 * contract:null
 * })
 * 
 * useEffect(()=>{
 * const connectWallet= async()=>{
 *  const contractAddress = "0x1234567890"
 *  const contractABI = abi.abi
 * try{
 *  const {ethereum}    = window
 *  injects object called ethereum
 * 
 *  if(ethereum) 
 * const account = await ethereum.request({method:"eth_requestAccounts", })
 * 
 *  const provider = new ethers.providers.Web3Provider(ethereum)
 * 
 * const signer = provider.getSigner()
 * 
 * const contract = new ethers.Contract(contractAddress,contractABI,signer)
 * 
 * setState(provider,signer,contract)
 * 
 * 
 * }
 * 
 * })
 * 
 * 
*/



/**
 * buy.js
 * 
 * const buy()=>{
 * 
 * 
 * }export defualt buy
 * 
 * ----------------
 * 
 * const memos()=>{
 * 
 * 
 * }export defulat memos
 * 
 */




/**
 * provider - to read data in blockchain
 * will use ethers library to make provider
 * we have used mainnet
 * 
 * 
 * query block chain = async()=>{
 *  //we want to know which block is being created 
 *  const blockNumber = await provider.getBlockNumber()
 *  console.log("Current block number: ", blockNumber)
 *  const balance = await provider.getBalance("0x1234567890")
 * console.log("Balance: ", balance) // this is in big Number object
 * //need to convert this into readable format 
 * 
 * balanceEther = ethers.utils.formatEther(balance)
 * 
 * console.log("Balance in ether: ", balanceEther)
 * 
 * const balanceWei = ethers.utils.parseEther(balanceEther)
 * console.log("Balance in wei: ", balanceWei) //wapas into bigNumber
 * 
 *  //we can verify this using etherscan 
 * //16025096 a new block created
 * 
 * two operations read (provider and infura) and write(signer and metamask) 
 * 
 * contract wallet{
 *  string public name = "wallet"
 * uint num;
 * 
 * function setValue(uint _num)
 * 
 * setValue
 * getValue
 * sendEthContract
 * contractBalance
 * sendEthUser(_user)
 * accountBalance(_address)
 *      
 * }
 * 
 * 
 * }
 */

/***
 * Smart Interaction 
 * import ethers
 * provider = "gorli"
 * 
 * walletAddress = "0x1234567890"
 * walletAbi = paste it
 * 
 * const contractInteraction = async()=>{
 * const walletContract = new ethers.Contract(walletAddress,walletAbi,provider)
 * to read smart contract
 * 
 * 
 * }
 * 
 * write operation me dikkat ane wali hai
 * signer and metamask
 * 
 * 
 * setVal 
 * you need a wallet so that you can sign transactions
 * (behind the scene hota hai cryptographically)
 * 
 * we install react
 * npm i create-react-app
 * npx create-react-app client
 * 
 * only nodejs required for block chain interaction
 * but we need react for frontend and blockchain
 * we didn't need metamask for reading 
 * no private key nothing 
 * we made a provider and we can read data
 * no paisa needed
 * 
 * then we do npm start
 * 
 * then we import useEffect in react 
 * 
 * then we also import ethers
 * 
 * useEffect writeContract 
 * provider windows.eth
 * provider send (ethaccoutns
 * signer = provider.getSigner(
 * contract 
 * then set value as 2
 * 
 * 
 * then we call write contract
 * 
 * 
 * 
 * 
 * 
 * metamask injects code into browser
 * 
 * how will this communicate with blockchain
 * 
 * how will we tunnel 
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