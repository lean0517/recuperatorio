import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function PersonajePorId(){

    const [Personaje, setPersonaje] = useState({})

    let { id } = useParams()

    useEffect( () => {
        fetch( `https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => setPersonaje(data))
    }, [])

    return (
        <div className="card shadow position-top-box">
            <h3>{Personaje.name}</h3>
            <br/>
            <span>Imagen del personaje: </span>
            <br/>
            <div><img src={`${Personaje.image}`} alt={Personaje.name}/></div>
            <br/>
            <div><span>Especie: {Personaje.species}</span></div> <br/>
            <div><span>Estado: {Personaje.status}</span></div> <br/>
            <div><span>Tipo: {Personaje.type}</span></div> <br/>
            <div><span>Genero: {Personaje.gender}</span></div> <br/>
        </div>
    )
   
}
export default PersonajePorId;


          