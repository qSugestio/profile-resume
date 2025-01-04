import { useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'
import Info from './components/Info/Info'
import PPModal from './components/PPModal/PPModal'
import Socials from './components/Socials/Socials'
function App() {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <main>
      <Canvas />
      <div className='container'>
        <Info />
        <Socials onOpen={() => setModalOpen(true)} />
      </div>
      {isModalOpen ? <PPModal onClose={() => setModalOpen(false)} /> : <></>}
    </main>
  )
}

export default App
