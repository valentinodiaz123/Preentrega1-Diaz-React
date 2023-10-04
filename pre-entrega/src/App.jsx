import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './containers/itemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting= "Bienvendio a nuestro ecommerce, gracias por venir!"/>
    </>
  )
}

export default App
