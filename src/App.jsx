import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Artist from './pages/Artist'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/artist" element={<Artist />} />
      <Route path="/artist/:id" element={<Artist />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
