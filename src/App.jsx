import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Foet from './screen/Foet'
import Fod from './screen/Fod'
import Home from './components/Home'
import Logi from './components/Logi'

function App() {

  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Logi />} />
        <Route path='/home' element={<Home />} />
        <Route path='/foet' element={<Foet />} />
        <Route path='/fod' element={<Fod />} />
      </Routes>
    </>
  )
}

export default App
