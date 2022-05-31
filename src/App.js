//import logo from './logo.svg';
import './App.css';
//import web3
import web3 from 'web3';
//import state
import {React, useState, useEffect} from 'react';
import Web3 from 'web3';
import img1 from './images/Cortex.gif';

function App() {

useEffect(() => {
  //Local DOM window
  const {ethereum} = window;
  //Prompt user for ethereum window
  let web3 = new Web3(window.ethereum);
});

//Connects to Web3 ethereum
const connectWallet = async() =>{

  await window.ethereum.request({
    method: "wallet_requestPermissions",
    params: [
      {
        eth_accounts: {},
      },
    ],
  });

  //waits for the account address from metamask wallet
  const account = await window.ethereum.request({method: "eth_requestAccounts"});
  //saves the address in local storage
  localStorage.setItem("address", account[0]);

  window.alert("Connected wallet address: " + localStorage.address);
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={img1} className="" alt="img" />
        <h2 className='title'>
        My Eth dApp
        </h2>
       <button onClick={connectWallet} className='btn'>Connect MetaWallet</button>
       <br></br>
      </header>
    </div>
  );
}

// async function sendTransaction() {
//   let params =[{
//     "from": "0x81b7e08f65bdf5648606c89998a9cc8164397647",
//     "to": "0xcC3b4008e4f408d8e1fD92064337dC7faF91dced",
//     "gas": "0x81b7",
//     "gasPrice":"0x9184e72a000",
//     "value":"0x9184e72a",
//     "data":"0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
//   }]
  
//   await window.ethereum.request({method: "eth_sendTransaction", params})
// }

export default App;
