import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

function PersonajePorId(){

    const [Personaje, setPersonaje] = useState({})

    let { id } = useParams()
    

    useEffect( () => {
        fetch( `https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => setPersonaje(data))
    },[])

    if (id>=827){
        return (
            <div><h1>"El personaje no existe"</h1><br/>
            <button><Link className='boton' to ='/ListaDePersonajes'> Volver a la lista de personajes</Link></button>
            </div>)
            
    }else{

    return (
        <div>
        <div className='contenedorDetalle'>
            <h3>{Personaje.name}</h3>
        <div className="detallePersonaje">

            <div><img src={`${Personaje.image}`} alt={Personaje.name}/></div>

            <br/> <div className='datosPersonaje'>
            <div><span>Especie: {Personaje.species}</span></div> 
            <br/>
            <div><span>Estado: {Personaje.status}</span></div> 
            <br/>
            <div><span>Tipo: {Personaje.type}</span></div> 
            <br/>
            <div><span>Genero: {Personaje.gender}</span></div> 
            <br/>
            
            </div>
        </div>
       
        </div> 
        
        <button  className='boton'><Link className='boton' to ='/ListaDePersonajes'> Volver a la lista de personajes</Link></button>
        </div>
    )
    }
}
export default PersonajePorId;


          