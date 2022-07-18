import { useState, useEffect } from 'react'
import * as data from './ghibli-data.json'


export default function Film(){
    const [error, setError] = useState(null);
    const [isLoaded,setIsLoaded]= useState(false)
    const [currentFilm, setCurrentFilm] = useState([]);
    // empty deps array [] means this useEffect will run once
    useEffect(() =>{
        fetch('ghibli-data.json')
        .then (res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setCurrentFilm(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

if(error){
    return <div>Error: {error.message}</div>;
} else if (!isLoaded){
    return <div> Loading ...</div>;
} else {
    return (
        <div>
            {currentFilm.map(currentFilm => (
                <div key = {currentFilm.url}>
                {currentFilm.name}
                </div>
            ))}
        </div>

    );
}}



//     const getFilms=()=>{
//         fetch('ghibli-data.json',
//         {
//             headers: {
//                 'Content-Type' : 'application/json',
//                 'Accept' :'application/json'
//             }
//         })
//         .then(function(response){
//             console.log(response)
//             return response.json();
//         })
//         .then(function(myJson){
//             console.log(myJson);
//             setCurrentFilm(myJson)
//         });

// }

// return(
//     <div>
//         {currentFilm && currentFilm.length>0 && currentFilm.map((film) => <p>{film.original_name}</p>)}
//     </div>
// );}


// {currentFilm ? ('') : (<div id = 'screen'>
// {FILMS.map((film, index) => (
//     <Film film = {currentFilm} key = {index}/>
// ))}
// <div> Release Year</div>

// <img src='' alt = ''/>
// <div> film description</div>
// </div>) }