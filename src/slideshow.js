import Slide from './slide'
import StartSlide from './startSlide'
import { useEffect, useState } from "react";
import { findDOMNode } from 'react-dom';

export default function SlideShow(){
    const [start, setStart] = useState(true)
    const [currentFilm, setCurrentFilm] = useState(0)
    const [films, setFilms]=useState([]);
    const getFilms=()=>{
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
            console.log(myJson);
            setFilms(myJson)
            // let start = myJson[0]
            // return start
        });
    }
    
    useEffect(() =>{
        getFilms()
    },[])

    const startPresentation = (film, index) => {
        console.log("Lets Begin", film)
        setStart(film[0])
        console.log(currentFilm)
        handleCurrentFilm(film)
    }

    const handleCurrentFilm = (film) =>{
        console.log('Selected Film ', film)
        setCurrentFilm(film)
        console.log(`this is the ${currentFilm}`)
        
    }
    return(<div>
    <h1>Ghibli React Project</h1>
    <div id='screen'>

    {start ? 
    (<div>
    <h2>Click The Button to begin the Presentation</h2>
        <button onClick={(film, index) => startPresentation(film, 0)}> Start Presentation Function</button></div>): (
        films.map((film, index) => (
          <StartSlide film ={film} key ={index}/>
        ))
        
    )}

    {currentFilm ? (<Slide film={currentFilm} key={currentFilm.key}/>) : ("")}
    
    {/* { currentFilm ? (
        <Slide film={currentFilm} key={currentFilm.key}/>) : (
        data.map((film, index) => (
            <div className= "film" onClick={() => handleCurrentFilm(film)}>
        <Slide film ={film} key ={index}/>
        </div>
        ))
    )} */}

    </div></div>)
}

