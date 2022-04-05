import React ,{useEffect, useState} from 'react';


function ListaDePersonajes(){
    const [personajes,setPersonajes]= useState([]);
    const [pagina, setPagina]= useState(2)

    useEffect(() => {
        fetch ('https://rickandmortyapi.com/api/character/')
        .then (response => response.json())
        .then(data => {
            setPersonajes(data.results) 
        })
        .catch(error => console.error(error))
    }, [])

    const CargarPagina =async() => {
        await setPagina(pagina +1);

        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        .then (response => response.json())
        .then (data => {
            setPersonajes(data.results)
        })
        .catch(error => console.log(error));
    }

    return(
        <div>
            <h2>
                Lista de personajes de Rick Y Morty
            </h2>
            <ul>
                {
                    personajes.map ((personaje, i)=>{
                        return (
                            <li key = {i}>
                                 
                                <h3>
                                    <a href={`/PersonajeId/${personaje.id}`}>{personaje.name}</a>
                                </h3>
                                    <img src={personaje.image} alt="imagenpersonaje" width="200"/>
                            </li>
                        )
                    })
                }
                <button onClick={CargarPagina}>Siguiente pagina</button>
            </ul>
        </div>
    )
}

export default ListaDePersonajes;