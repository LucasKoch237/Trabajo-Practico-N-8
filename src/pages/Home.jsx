import {useNavigate} from 'react-router-dom'

function Home(){
  const navigate = useNavigate()

  const irAPlatos = () => {
    navigate('/productos')
  }

  return(
    <div className="page">
      <h1>Carta principal</h1>
      <p>Bienvenido a nuestra tienda de delivery online.</p>
      <button onClick={irAPlatos}>Ver platos</button>
    </div>
  )
}
export default Home