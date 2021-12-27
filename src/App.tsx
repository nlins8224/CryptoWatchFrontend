import React from 'react';
import './styles/App.less';
import './database/firebase';
import { LiveCoinsReceiver } from './components/LiveCoins/LiveCoinsReceiver';

function App() {
  return (
    <div className="App">
        <div className="App-body">
            <LiveCoinsReceiver />
        </div>
    </div>
  );
}

export default App;
