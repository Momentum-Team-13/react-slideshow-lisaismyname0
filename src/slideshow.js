import Film from './film'
import * as FILMS from './ghibli-data.json'

console.log(FILMS)

export default function SlideShow(){
    return (
        <div>
        <Film/>
        {/* {films.map((film, index) => (
            <Film film = {film} key = {index}/>
        ))} */}
        </div>
    )
}
