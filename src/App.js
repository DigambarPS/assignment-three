import { useEffect, useState } from 'react'
import Web3 from "web3"
import './App.css';

function App() {
const[account, setAccount] = useState();
const[balance, setBalance] = useState();

const web3 = new Web3(Web3.givenProvider);

useEffect(()=>{loadAcc();},[])
useEffect(()=>{loadBalance();},[account])

async function loadAcc(){
  const accounts = await web3.eth.requestAccounts();
  setAccount(accounts[0]);
}

async function loadBalance(){
  const balance = await web3.eth.getBalance(account);
  setBalance(balance);
}

  return (
    <div className="App">
      <header className="App-header">
      <h2>Decentralised App</h2>
        <div className="card">
          <h3>Account Details</h3>
          <hr/>
          {/* <img src=""/> */}
          <h4> Your Account : {account} </h4>
          <h4> Your Balance : {(balance/1e18).toFixed(6)} ETH </h4>
       </div>
      </header>
    </div>
  );
}
export default App;