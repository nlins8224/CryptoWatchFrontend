import React from 'react';
import './App.less';

import './database/firebase';
import { LiveCoinsReceiver } from './components/LiveCoins/LiveCoinsReceiver';

function App() {
  return (
    <div className="root">
      <LiveCoinsReceiver />
    </div>
  );
}

export default App;
