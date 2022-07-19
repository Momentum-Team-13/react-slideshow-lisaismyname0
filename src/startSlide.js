export default function StartSlide({film, index}){
    return(
    <div id ="slide">
    <div id= 'photo'>
    <img src={film.image} alt="Movie Poster"/>
    </div>
    <div id="text_info">
    <h1>
    {film.original_title} -
    ({film.title})</h1>
    <h2> Released in {film.release_date} </h2>
    <p>{film.description}</p>
    </div>
    </div>)
}