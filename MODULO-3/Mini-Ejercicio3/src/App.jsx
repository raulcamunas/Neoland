import './App.css'
import { Videogames } from './components/hobbies/videogames/Videogame'
import { SongHeard } from './components/hobbies/songheard/SongHeard'
import { Sports } from './components/hobbies/sports/Sports'
import { Movies } from './components/hobbies/movies/Movies'

function App() {

  return (
    <>
      <Videogames />
      <SongHeard />
      <Sports />
      <Movies />
    </>
  )
}

export default App
