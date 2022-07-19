import Slide from './slide'
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
        console.log(currentFilm)
        return(
            <Slide film={film1}/>
        )
    }
    return(<div>
        <h1>Ghibli React Project</h1>
        <div id='screen'>
        {start ? 
    (<div>
    <h2>Click The Button to begin the Presentation</h2>
        <button onClick={() => startPresentation()}> Start Presentation Function</button></div>): (
        data.map((film, index) => (
          <Slide film ={data} key ={index}/> ))

        )}
        {currentFilm ? (<Slide film={currentFilm} key={currentFilm.key}/>) : ("")}

        {!data ? <Slide films={data}/> :<p> Loading...</p>}

    </div></div>)
}
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

