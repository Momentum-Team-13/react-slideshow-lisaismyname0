import Slide from './slide'
import { useEffect, useState } from "react";

export default function SlideShow(props){
    const {films} = props

    const [currentFilm, setCurrentFilm] = useState(films[0])
    const [currentFilmIndex, setCurrentFilmIndex]=useState(0);
    
    useEffect(() =>{
        setCurrentFilm(films[currentFilmIndex])
    },[films, currentFilmIndex])

    const handleClick = (event) => {
        console.log(event.target)
        }

    return (
        <>
            <p> <Slide film={currentFilm}/></p>
    <div>{currentFilmIndex}
    <button onClick= {(e) => handleClick(e)}>Go Back</button>
    <button onClick= {(e) => handleClick(e)}> Next </button>
    <button onClick={setCurrentFilmIndex(0)}> Start Over</button>
    <button onClick= {(e) => handleClick(e)}> Jump to Slide *INPUT BOX*</button>
    </div>
        </>
    )}



//     const startPresentation = (film, index) => {
//         console.log("Lets Begin", film)
//         setStart()
//         console.log(currentFilm)
//         handleCurrentFilm(film)
//     }

//     const handleCurrentFilm = (film) =>{
//         console.log('Selected Film ', film)
//         setCurrentFilm(film)
//         console.log(`this is the ${currentFilm}`)
        
//     }
//     return(<div>
//     <h1>Ghibli React Project</h1>
//     <div id='screen'>

//     {start ? 
//     (<div>
//     <h2>Click The Button to begin the Presentation</h2>
//         <button onClick={(film, index) => startPresentation(film)}> Start Presentation Function</button></div>): (
//         films.map((film, index) => (
//           <Slide film ={film} key ={index}/>
//         ))
        
//     )}

//     {/* {currentFilm ? (<Slide film={currentFilm} key={currentFilm.key}/>) : ("")} */}
    
//     {/* { currentFilm ? (
//         <Slide film={currentFilm} key={currentFilm.key}/>) : (
//         data.map((film, index) => (
//             <div className= "film" onClick={() => handleCurrentFilm(film)}>
//         <Slide film ={film} key ={index}/>
//         </div>
//         ))
//     )} */}

//     </div></div>)
// }

