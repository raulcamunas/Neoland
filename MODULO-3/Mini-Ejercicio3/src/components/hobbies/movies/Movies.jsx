import './movies.css'
import { HOBBIES } from '../Hobbies';

export const Movies = () => {
    
        return (
            <div className= "movies">
                <h1>Películas</h1>
                <div id="Gallery">
                    {HOBBIES.movies.map((movies) => {
                        return (
                            <div className="movies-card" key="">
                                <h2>{movies.name}</h2>
                                <p>Tipo: {movies.type}</p>
                                <p>Género: {movies.genre}</p>
                                <p>Voto: {movies.vote}</p>
                            </div>
                        )
                    },)}
                </div>
            </div>
        )
}