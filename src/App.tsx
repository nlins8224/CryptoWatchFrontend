import React from 'react';
import './styles/App.less';
import './database/firebase';
import {Routing} from "./components/Routing/Routing";

const App = () => {
  return (
      <div className="App-body">
          <Routing/>
      </div>
  );
}

export default App;
