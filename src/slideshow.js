import Slide from './slide'
import { useEffect, useState } from "react";

export default function SlideShow(){
    const [currentFilm, setCurrentFilm] = useState(0)
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

    const handleCurrentFilm = (film) =>{
        console.log('Selected Film ', film)
        setCurrentFilm(film)
    }
    return(<div>
    <h1>Ghibli React Project</h1>
    <div id='screen'>
    {!currentFilm ? (
        data.map((film, index) => (
        <div>
        <h1> Click to Begin Presentation</h1>
        <button onClick={() => handleCurrentFilm(film)}> Let's Begin</button>
        </div>
        ))
    ) : (data.map((film, index) => (
        <div>
            <Slide film={film} index={0}/>
        </div>
    )))}
{/*     
    { currentFilm ? (
        <Slide film={currentFilm} key={currentFilm.key}/>) : (
        data.map((film, index) => (
            <div className= "film" onClick={() => handleCurrentFilm(film)}>
        <Slide film ={film} key ={index}/>
        </div>
        ))
    )} */}

    </div></div>)
}
