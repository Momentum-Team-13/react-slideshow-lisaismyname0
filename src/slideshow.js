import Slide from './slide'
import StartSlide from './startSlide'
import { useEffect, useState } from "react";

export default function SlideShow(films){
    const [start, setStart] = useState(true)
    const [currentFilm, setCurrentFilm] = useState(films[0])
    const [data, setData]=useState([]);
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0)
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
        getData()},[])

    useEffect(() => {
        setCurrentFilm(films[currentFilmIndex])
    },[films, currentFilmIndex])

    const startPresentation = () => {
        let film1 = data[0]
        console.log("Lets Begin", film1)
        setStart(film1)
        setCurrentFilm(film1)
        setCurrentFilmIndex(0)
        console.log(currentFilm)
        return(
            currentFilmIndex,
            <StartSlide film={film1}/>
        )
    }

    const nextSlide = () => {
        let films = data
        let nextFilmIndex = currentFilmIndex + 1
        console.log(films[nextFilmIndex])
        let next = films[nextFilmIndex]
        return (
            next
        )
    }


const handleClick = (event) =>{ 
    console.log(event.target)
    }

    return(<div>
        <h1>Ghibli React Project</h1>
        <div id='screenStart'>
            <div>
                <button onClick={() => startPresentation()}> Start Presentation Function</button>
            </div>

        {currentFilm ? (<Slide film={currentFilm} key={currentFilm.key}/>) : ("")}

        {!data ? <Slide films={data}/> : ("")}


<button onClick= {(e) => handleClick(e)}>Go Back</button>
<button onClick= {(e) => nextSlide()}> Next </button>
<button onClick= {(e) => startPresentation(e)}> Start Over</button>
<button onClick= {(e) => handleClick(e)}> Jump to Slide *INPUT BOX*</button>


        

    </div></div>)
}