import {useParams, useNavigate} from "react-router-dom";
import platos from "../data/platos";
import "../App.css";

function DetalleProducto(){
  const { id } = useParams();
  const navigate = useNavigate();
  const plato = platos.find((p) => p.id === parseInt(id));

  if (!plato){
    return <p>Plato no encontrado</p>;
  }

  return(
    <div className="detalle-container">
      <h2 className="titulo-seccion">{plato.nombre}</h2>
      <img src={plato.imagen} alt={plato.nombre} className="detalle-img" />
      <p className="detalle-descripcion">{plato.descripcion}</p>
      <p className="detalle-precio">${plato.precio}</p>

      <button onClick={() => navigate(-1)} className="boton-volver">
        Volver al menu principal
      </button>
    </div>
  );
}
export default DetalleProducto;