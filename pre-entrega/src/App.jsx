import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './containers/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>

            <NavBar />

            <Routes>
                <Route exact path='/' element={<ItemListContainer/>} />
                <Route exact path='/category/electronics' element={<ItemListContainer greeting= "electronics"/>} />
                <Route exact path='/category/jewelery' element={<ItemListContainer greeting= "jewelery"/>} />
                <Route exact path='/category/womens clothing' element={<ItemListContainer greeting= "women's clothing"/>} />
                <Route exact path='/category/mens clothing' element={<ItemListContainer greeting= "men's clothing"/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
            </Routes>

      </BrowserRouter>

    </>
  )
}

export default App

