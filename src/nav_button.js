const handleClick = (event) => {
    console.log(event.target)
}

export default function NavButton(){
    return (
        <div>
        <button onClick= {(e) => handleClick(e)}>Go Back</button>
        <button onClick= {(e) => handleClick(e)}> Next </button>
        <button onClick= {(e) => handleClick(e)}> Start Over</button>
        <button onClick= {(e) => handleClick(e)}> Jump to Slide *INPUT BOX*</button>
        </div>
    )
}