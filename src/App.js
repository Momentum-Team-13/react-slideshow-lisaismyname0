import './App.css'
import SlideShow from './slideshow'
import NavButton from './nav_button'
import { useEffect, useState } from "react";

function App() {
  const [data, setData]=useState([]);
  const getData=()=>{
      fetch("https://ghibliapi.herokuapp.com/films/"
      ,{
          headers : {
              'Content-Type':'application/json',
              'Accept': 'application/json'
          }
      }
      )
      .then(function(response){
          console.log(response)
          return response.json();
      })
      .then(function(myJson){
          console.log(myJson);
          setData(myJson)
      });
  }
  
  useEffect(() =>{
      getData()
  },[])
  return(
    <div className="App">
      <h1>Studio Ghibli Slideshow</h1>

      <SlideShow/>
      <NavButton/>
    </div>)
}

export default App
