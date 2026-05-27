import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Certificados from './components/Certificados/Certificados';
import Proyectos from './components/Proyectos/Proyectos';
import Servicios from './components/Servicios/Servicios';
import Contactos from './components/Contactos/Contactos';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <Banner/>
      <Perfil/>
      <Habilidades/>
      <Certificados/>
      <Proyectos/>
      <Servicios/>
      <Contactos/>
      <Footer/>
    </>
  )
}

export default App
