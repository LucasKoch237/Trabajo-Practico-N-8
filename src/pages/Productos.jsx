import {Link} from 'react-router-dom'
import productos from '../data/platos'

function Productos(){
  return(
    <div className="page">
      <h1>Listado de Menu</h1>
      <ul>
        {productos.map(p =>(
          <li key={p.id}>
            <Link to={`/detalle/${p.id}`}>{p.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Productos