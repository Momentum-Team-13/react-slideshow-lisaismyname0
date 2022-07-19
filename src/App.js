import './App.css'
import SlideShow from './slideshow'
// import NavButton from './nav_button'
import React, {useState, useEffect} from 'react';

export default function App() {
  const [data, setData] = useState(null);
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
        // console.log(response)
        return response.json();
    })
    .then(function(myJson){
        setData(myJson)
    });
}

useEffect(() =>{
    getData()
},[])

return(
  <div>
  <div>Slideshow </div>
  {data ? <SlideShow films={data}/> : <p>Loading...</p>}
  </div>
)}

      // <SlideShow/>
      // <NavButton/>