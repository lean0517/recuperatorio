import {Link} from 'react-router-dom'

function Home (){
    return (
    <div>
    <h2>Hola, soy el home de Rick y Morty
    </h2>

    <button><Link className='boton' to ='/ListaDePersonajes'> Todos los Persononajes</Link> <br/></button>
 
    
    </div>

)}

export default Home;
