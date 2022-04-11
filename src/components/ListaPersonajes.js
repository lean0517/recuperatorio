import React ,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom'


function ListaDePersonajes(){
    const [personajes,setPersonajes]= useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [pagina, setPagina]= useState();
    
  
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
            setPagina  (data.info) 
        })
        .catch(error => console.error(error))
    }, [])
  
    const filtrar=(terminoDeBusqueda)=>{
       
        fetch (`https://rickandmortyapi.com/api/character?name=${terminoDeBusqueda}`)
        .then (response => response.json())
        .then(data => {
            setPersonajes(data.results)
            setPagina  (data.info)
            
        })
  
      
      
         
    }
    if(personajes==undefined){
      return (
        <div><h1>"El personaje no existe"</h1><br/>
        <Link to ='/'> Volver al Home</Link>
        </div>
        )
       
    }else{
      let SiguientePagina = ()=>{
          
          return(
                 fetch (pagina.next)
                 .then (response => response.json())
                  .then(data => {
                      setPersonajes(data.results)
                       setPagina  (data.info)
            
        })
              )
      }
  
      let PaginaAnterior = ()=>{
          
          return(
                 fetch (pagina.prev)
                 .then (response => response.json())
                  .then(data => {
                      setPersonajes(data.results)
                       setPagina  (data.info)
            
        })
              )
      }
    
    return(
      <div className='contenedorGeneral'>
          <h2>
              Lista de Personajes de Rick y Morty 
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
           
          <button className='boton' onClick={PaginaAnterior}>Pagina Anterior</button>    
          <button className='boton' onClick={SiguientePagina}>Siguiente página</button>
          
      </div>
  )}
            }
export default ListaDePersonajes;