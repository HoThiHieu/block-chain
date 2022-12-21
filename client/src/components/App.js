import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function App() {

  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() => {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then(response => response.json())
      .then(json => setWalletInfo(json));
  }, []);

  const { address, balance } = walletInfo;

  return (
    <div className='App'>
      <img className='logo' src={logo} alt="" />
      <br />
      <div>Welcome to the blockchain...</div>
      <br />
      <div><Link to='/blocks'>Blocks</Link></div>
      <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div>
      <div><Link to='/transaction-pool'>Transaction Pool</Link></div>
      <br />
      <div className='WalletInfo'>
        <div>Address: {address}</div>
        <div>Balance: {balance}</div>
      </div>
      <br />
    </div>
  );
}

export default App;