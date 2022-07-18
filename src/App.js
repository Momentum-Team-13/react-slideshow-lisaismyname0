import './App.css'
import * as data from './ghibli-data.json'
import SlideShow from './slideshow'
import NavButton from './nav_button'

function App() {
  return(
    <div className="">
      <h1>Studio Ghibli React App</h1>
      <SlideShow/>
      <NavButton/>
    </div>)
}

export default App
