import Slide from './slide'
import StartSlide from './startSlide'
import { useEffect, useState } from "react";

export default function SlideShow(films){
    const [start, setStart] = useState(true)
    const [jumpTo, setJumpTo] = useState("")
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
        let nextFilm = films[nextFilmIndex]
        return (
            nextFilmIndex,
            nextFilm,
            <Slide film={nextFilm}/>
        )
    }

    const goBack = () => {
        let films = data
        let lastFilmIndex = currentFilmIndex - 1
        console.log(lastFilmIndex)
        console.log(films[lastFilmIndex])
        let lastFilm = films[lastFilmIndex]
        return (
            lastFilmIndex,
            lastFilm,
            <Slide film={lastFilm}/>
        )
    }


    const jumpToSlide = (event) => {
        event.preventDefault()
        let films = data
        console.log(data)
        setJumpTo()
        // let films = data
        // let i = jumpToSlide()
        // let desiredFilmIndex = currentFilmIndex + i
        // console.log(desiredFilmIndex)
    }


const handleClick = (event) =>{
    setJumpTo(event.target.value)
    event.preventDefault()
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


<button onClick= {(e) => goBack(e)}>Go Back</button>
<button onClick= {(e) => nextSlide()}> Next </button>
<button onClick= {(e) => startPresentation(e)}> Start Over</button>
<form>
<label> Jump to Slide:
<input type="text" name= "Jump to" value={jumpTo} onChange={handleClick}/> 
</label>
<input type ="submit" value ="submit" onClick={jumpToSlide}/>
</form>
{/* <button onClick= {(e) => handleClick(e)}> Jump to Slide</button> */}

        

    </div></div>)
}