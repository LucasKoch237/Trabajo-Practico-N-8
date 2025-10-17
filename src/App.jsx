import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Detalle from './pages/Detalle'
import NotFound from './pages/NotFound'
import './App.css';


function App(){
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App