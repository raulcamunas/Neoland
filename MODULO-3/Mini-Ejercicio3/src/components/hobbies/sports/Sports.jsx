import './sports.css'
import { HOBBIES } from '../Hobbies';

export const Sports = () => {

    return (
        <div className= "sports">
            <h1>Deportes</h1>
            <div id="Gallery">
                {HOBBIES.sports.map((sports) => {
                    return (
                        <div className="sports-card" key="">
                            <h2>{sports.name}</h2>
                            <p>Indoor: {sports.indoor ? "Si" : "No"}</p>
                            <p>Equipo favorito: {sports.favoriteTeam}</p>
                        </div>
                    )
                },)}
            </div>
        </div>
    )

}