import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Certificados from './components/Certificados/Certificados';

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
    </>
  )
}

export default App
