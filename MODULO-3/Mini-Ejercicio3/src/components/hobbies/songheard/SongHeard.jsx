import './songheard.css'
import { HOBBIES } from '../Hobbies';

export const SongHeard = () => {
    return (
        <div className= "songheard">
            <h1>Canciones escuchadas</h1>
            <div id="Gallery">
                {HOBBIES.songsHeard.map((songsHeard) => {
                    return (
                        <div className="songheard-card" key="">
                            <h2>{songsHeard}</h2>
                            
                        </div>
                    )
                },)}
            </div>
        </div>
    )
}
