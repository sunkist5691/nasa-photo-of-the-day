import React, {useEffect, useState} from "react";
import axios from 'axios'
import Posts from './components/Posts'
import "./App.css";

function App() {
  const [data, setData] = useState('N/A')
  

  useEffect( () => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-12-25')
      .then(response => {
        setData(response.data)
      })
      .catch(() => {
        console.log('FAILED TO GET DATA')
      })
  }, [])
  // fetch data ONLY once after fetch data using useEffect() with empty square bracket argument.
console.log(data)
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}

      <Posts object={data}/> {/* container of every post from given data */}
    </div>
  );
}

export default App;
