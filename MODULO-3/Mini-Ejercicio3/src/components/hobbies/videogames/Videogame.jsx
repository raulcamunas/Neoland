import './videogame.css';
import { HOBBIES } from '../Hobbies';

export const Videogames = () => {

    return (
        <div className="videogame">
            <h1>Videojuegos</h1>
            <div id="Gallery">
                {HOBBIES.videogame.map((videogame) => {
                    return (
                        <div className="videogame-card" key="">
                            <h2>{videogame.title}</h2>
                            <p>Genre: {videogame.genre}</p>
                            <p>Platform: {videogame.platform}</p>
                            <p>Multiplayer: {videogame.multiplayer ? "Yes" : "No"}</p>
                        </div>
                    )
                },)}
            </div>
        </div>
    )       
}