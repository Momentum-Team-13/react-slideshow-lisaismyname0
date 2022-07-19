import { useEffect, useState } from "react";

export default function Slide(){
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
      <div id="screen">
  {data.map((film, index) => <p key ={index}>{index} {film.title}</p>)}
      </div>)
  }
