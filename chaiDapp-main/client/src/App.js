import abi from "./contract/chai.json";
//abi is application binary interface
import { useState, useEffect } from "react";
import { ethers } from "ethers";
//ethers library for interacting with ethereum blockchain
//then we import buy and memos from components
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import chai from "./chai.png";
import "./App.css";



function App() {
  //then we initialize state for provider signer and contract, all set to null
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  //then we initialize account to none 
  const [account, setAccount] = useState("None");
  //then we use useeffect to run code after component mounts
  useEffect(() => {
    //then we write a asynchronous function to connect to the wallet
    const connectWallet = async () => {
      //then we define contract address and ABI
      const contractAddress = "0x46436dcb1b29b111a00bb61f5475b420ef1104eb";
      const contractABI = abi.abi;
      //try block to tackle errors
      try {
        //get ethereum object from glowbal window object
        const { ethereum } = window;
//if provider exists
        if (ethereum) {
          //request access to users ethereum accounts
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
//if user changes their active ethereum chain reload page 
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
//if user changes their active ethereum account reload page 

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
//create a ethereum provider and signer
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          //create a  new ethers contract using contract address and contract ABI
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(state);
  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <img src={chai} className="img-fluid" alt=".." width="100%" />
      <p
        class="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px" }}
      >
        <small>Connected Account - {account}</small>
      </p>
      <div className="container">
        <Buy state={state} />
        <Memos state={state} />
      </div>
    </div>
  );
}

export default App;
