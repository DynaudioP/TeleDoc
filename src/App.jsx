import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Profilpage from './pages/Profilpage'
import Riwayat from './pages/Riwayat'
import ListdokterPage from './pages/ListdokterPage'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './pages/AdminPage'
import AdminTambahForm from './pages/AdminTambahForm'
import AdminUpdateForm from './pages/AdminUpdateForm'
import Dokterpesan from './pages/Dokterpesan'
import Dokterpembayaran from './pages/Dokterpembayaran'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profil' element={<Profilpage/>}/>
        <Route path='/riwayat' element={<Riwayat/>}/>
        <Route path='/listdokter' element={<ListdokterPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin'>
          <Route index element={<AdminPage/>}/>
          <Route path='tambahform' element={<AdminTambahForm/>}/>
          <Route path='updateform/:id' element={<AdminUpdateForm/>}/>
        </Route>
        <Route path='/dokter/:id' element={<Dokterpesan/>}/>
        <Route path='/pembayaran/:id' element={<Dokterpembayaran/>}/>
        <Route path='/checkout/:id' element={<CheckoutPage/>}/>
      </Routes>
    </div>
  )
}

export default App