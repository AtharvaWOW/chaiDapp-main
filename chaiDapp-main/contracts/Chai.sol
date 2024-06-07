// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
//to specify the compiler version

//then we define a new contract of name chai
//memo is used to define a new data type  
contract chai {
    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }
    //uint - unsigned integer of 256 size
    //adddress is a data type for ethereun address
    //ethereum is a blockchain network

//address payable , you can send ether to addresses of this type using transfer function
    Memo[] memos;
    address payable owner;
    //owner is receiver of ethereum

    constructor() {
        owner = payable(msg.sender);
    }
//msg.sender is a global variable that contains the address of the current client with the contract

//function buy chai takes two arguments 
//payable is a keyword that allows the function to accept ether
//require is a keyword to check for conditions , if conditioon is false then execution of function stops with an error
//transfer sends msg.value ether to the owner
    function buyChai(string memory name, string memory message) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }
//memos .push we add a new memo at the end of an array
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
