import React from 'react';
import ReactDOM from 'react-dom';

interface WalletProps {
  balance: number;
}

const Wallet: React.FC<WalletProps> = ({ balance }) => {
  return <div>Your wallet balance is {balance}</div>;
};

ReactDOM.render(
  <Wallet balance={1000} />,
  document.getElementById('root')
);
