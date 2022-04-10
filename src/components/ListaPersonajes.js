import React ,{useEffect, useState} from 'react';


function ListaDePersonajes(){
    const [personajes,setPersonajes]= useState([]);
    const [pagina, setPagina]= useState(2);
    

    useEffect(() => {
        fetch ('https://rickandmortyapi.com/api/character/')
        .then (response => response.json())
        .then(data => {
            setPersonajes(data.results) 
        })
        .catch(error => console.error(error))
    }, [])

    const SiguientePagina =() => {
         setPagina(pagina +1);

        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        .then (response => response.json())
        .then (data => {
            setPersonajes(data.results)
        })
        .catch(error => console.log(error));
    }

    const AnteriorPagina =() => {
         setPagina(pagina-1);
        

        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        .then (response => response.json())
        .then (data => {
            setPersonajes(data.results)
        })
        .catch(error => console.log(error));
    }

    return(
        <div className='contenedorGeneral'>
            <h2>
                Lista de personajes de Rick Y Morty 
            </h2>
            
            <ul>
                {
                    personajes.map ((personaje, i)=>{
                        return (
                            <li className='contenedorIndividual' key = {i}>
                                 
                                <h3>
                                    <a href={`/PersonajeId/${personaje.id}`}>{personaje.name}</a>
                                </h3>
                                    <a href={`/PersonajeId/${personaje.id}`}> <img src={personaje.image} alt="imagenpersonaje" width="200"/></a>
                            </li>
                        )
                    })
                }
                
            </ul>
            <button className='boton' onClick={AnteriorPagina}>Anterior página</button>
            
            <button className='boton' onClick={SiguientePagina}>Siguiente página</button>

            
        </div>
    )
}

export default ListaDePersonajes;