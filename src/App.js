import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import FetchImage from './components/FetchImage';

function App() {
const [btn, btnVisible] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        {btn ? <button onClick={()=>btnVisible(!btn)}>Fetch!</button>: <FetchImage/>}
      </header>
    </div>
  );
}

export default App;
