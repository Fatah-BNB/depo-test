import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect, useState} from "react"

function App() {
  const [prediction, setPrediction] = useState('')
	const connect = () => {
		axios.post("http://localhost:5001/predict_interaction").then(response => {setPrediction("PREDICTED")})
		.catch(error => {setPrediction("UNABLE TO PREDICT")})
	}
	useEffect(() => {
		connect()
	}, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RESULTS: {prediction}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
