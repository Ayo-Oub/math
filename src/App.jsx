
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Test from './pages/Test'

function App() {
 

  return (
    <Routes>
      <Route path='/math' element={<Home />} />
      <Route path='/test' element={<Test />} />
    </Routes>
  )
}

export default App
