import React ,{useEffect, useState} from 'react';

function BuscarPersonaje(){
  const [personajes,setPersonajes]= useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina]= useState(1);
  

  const valorIngresado=e =>{
      setBusqueda(e.target.value)
      filtrar(e.target.value)
      e.preventDefault();
  }

 

  useEffect(() => {
      fetch ('https://rickandmortyapi.com/api/character/')
      .then (response => response.json())
      .then(data => {
          setPersonajes(data.results) 
      })
      .catch(error => console.error(error))
  }, [])

  const filtrar=(terminoDeBusqueda)=>{
      
      fetch (`https://rickandmortyapi.com/api/character?name=${terminoDeBusqueda}`)
      .then (response => response.json())
      .then(data => {
          setPersonajes(data.results) 
      })
       
  }
  if(personajes==undefined){
    return (
      <div><h1>"El personaje no existe"</h1></div>)
  }else{
  
  
  return(
    <div className='contenedorGeneral'>
        <h2>
            Busqueda de Personajes 
        </h2>
        <div>
            <input 
            className='barraBusqueda'
            value={busqueda}
            placeholder="Busqueda por nombre o ID"
            onChange={valorIngresado}
            />
            <button 
            className='botonDeBusqueda'>Buscar
                
            </button>
            
        </div>
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
            
        
    </div>
)}
          }
export default BuscarPersonaje