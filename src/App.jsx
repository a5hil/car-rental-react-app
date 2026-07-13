import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AddCar from './Components/AddCar'
// import ViewCars from './Components/ViewCars'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add-car' element={<AddCar />}></Route>
          {/* <Route path='/view-cars' element={<ViewCars />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
