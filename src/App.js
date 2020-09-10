
import React, {useEffect, useState} from "react";
import axios from 'axios'
import Posts from './components/Posts'
import {listOfDates} from './components/key'
import "./App.css";


function App() {
  const [data, setData] = useState('N/A')
  const [count, setCount] = useState(0)

  //a function for click events(component Time Machine)
  const changeDate = () => {

    count === (listOfDates.length-1) ? setCount(0) : setCount(count + 1)

  }

  useEffect( () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${listOfDates[count]}`)
      .then(response => {
        setData(response.data)
      })
      .catch(() => {
        console.log('FAILED TO GET DATA')
      })
  }, [count])
  // fetch data ONLY once after fetch data using useEffect() with empty square bracket argument.

  return (

    <div className="App">

      <Posts object={data} change={changeDate}/> {/* container of every post from given data */}

    </div>

  )
}

export default App;
