
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Index } from './pages/Index'
import { PanelAdmin } from './pages/Admin/PanelAdmin'
import { Login } from './pages/Login'
import { PanelRecepcionista } from './pages/Recepcionista/PanelRecepcionista'
import { ReservasClientes } from './components/cliente/ReservasClientes'
import { HabitacionesCliente } from './components/personalAseo/HabitacionesCliente'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Navigate to="/" />} />{/* Redirecciona a la pagina principal si no encuentra la ruta */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PanelAdmin />} />
        <Route path='/recepcionista' element={<PanelRecepcionista />} />
        <Route path='/reserva' element={<ReservasClientes />} />
        <Route path='/aseo' element={<HabitacionesCliente />} />
        
      </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
