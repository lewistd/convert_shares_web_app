import logo from './logo.svg';
import './App.css';
import Slider from 'react-input-slider';
import React from 'react';
import {
  Unstable_NumberInput as BaseNumberInput,
  numberInputClasses
} from '@mui/base/Unstable_NumberInput';
import { NumberInput } from '@mui/base/Unstable_NumberInput/NumberInput';

function App() {
  const [baseVal, setBaseVal] = React.useState(10000);
  const [altVal, setAltVal] = React.useState(1000);
  const [baseShares, setBaseShares] = React.useState(100);
  const [baseRisk, setBaseRisk] = React.useState(30);
  const [altRisk, setAltRisk] = React.useState(50);
  const [altShares, setAltShares] = React.useState();
  const [value, setValue] = React.useState();

  const calculateAltShares = () => {
    let baseRiskAmount = baseVal * (baseRisk/100);
    let altRiskAmount = altVal * (altRisk/100);
    console.log('bra: ' + baseRiskAmount + ' ara: ' + altRiskAmount);
    let alternateShares = Math.ceil(altRiskAmount*baseShares/baseRiskAmount);
    console.log('alt shares: ', alternateShares);
    setAltShares(alternateShares);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Convert Shares</h1>
      
        <span><input type='tel' style={{textAlign: 'center'}} size={4} value={baseVal} onChange={(e) => {setBaseVal(Number(e.target.value))}}/> Base Account Value (USDT)</span>
        <span><input type='tel' style={{textAlign: 'center'}} size={1} value={baseRisk} onChange={(e) => {setBaseRisk(Number(e.target.value))}}/> {/*<Slider axis='x' x={baseRisk} onChange={({x}) => {setBaseRisk(x); calculateAltShares()}}/>*/}
        Base Account Risk %</span>
        <span><input type='tel' style={{textAlign: 'center'}} size={1} value={baseShares} onChange={(e) => {setBaseShares(Number(e.target.value))}}/> Base Account Shares</span>
        <br/>
        <span><input type='tel' style={{textAlign: 'center'}} size={4} value={altVal} onChange={(e) => {setAltVal(Number(e.target.value))}}/> Alt Account Value (USDT)</span>
        <span><input type='tel' style={{textAlign: 'center'}} size={1} value={altRisk} onChange={(e) => {setAltRisk(Number(e.target.value))}}/> Alt Account Risk %</span>
        <button style={{ margin: '5px' }} onClick={calculateAltShares}>Calculate</button>
        <br/>
        <h3 style={{ margin: '5px', padding: '3px', borderStyle: 'solid', width: '75px'}}>{altShares ? altShares : '-'}</h3>
        {/* <input type='tel' style={{textAlign: 'center'}} size={1} value={altShares}/> */}
        <span>Alt Account Shares</span>

      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
