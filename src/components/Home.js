import {Link} from 'react-router-dom'
function Home (){
    return (
    <div>
    <h2>Hola, soy el home de Rick y Morty
    </h2>

    <Link to ='/ListaDePersonajes'> Todos los Persononajes</Link>
    
    </div>

)}

export default Home;
