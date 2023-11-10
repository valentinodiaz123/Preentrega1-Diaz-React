import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartComponentContext from './context/cartContext'

function App() {

  return (
    <>


      {/* <CartComponentContext> */}

      {/* Aca creo mi componente BrowserRouter, componente proporcionado por la bibloteca react router 

      (hay que instalarlo mediante npm y importarlo a la app)

      Browser Router es u componente que envuelve toda la aplicacion React. Este crea un contexto de enrutamiento en toda la app. Las rutas se definen utilizando el componente route, cada route especifica una URL que debe coincidir con la ruta actual y que componente debe renderizarse cuando se alcanza esa URL, exact se utiliza para asegurarse de que la coincidencia sea exacta, por ejemplo / solo coincidira con la raiz, no con /about, puedo proporcionar enlaces a estas rutas utilizando el componente Link de React Router.

       */}

        <BrowserRouter>


          <NavBar /> 

        {/* La navbar va por encima de las routes generalmente, pero esto depende del diseño, ya que si a esta la utilizamos en todas las rutas, es mejor hacerla global, pero si solamente la utilizamos en rutas especificas, es mejor renderizarla dentro de esa ruta */}

          <Routes>
            
          {/* Creo mis rutas con el browser router, esto me sirve para que en esa ruta en especifico, se renderice el componente el cual le indico.
        
          Y si yo tengo 2 rout que van a la misma url, pero cada uno renderiza elementos distintos, el primer elemento que le indique, es el que va a renderizar, react tiene un enfoque de enrutamiento que maneja las coincidencias de rutas de una forma en la que el primer route que coincida con la misma url, va a renderizar el que este escrito primero en el codigo   */}

            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/category/electronics' element={<ItemListContainer greeting="electronics" />} />
            <Route exact path='/category/jewelery' element={<ItemListContainer greeting="jewelery" />} />
            <Route exact path='/category/womens clothing' element={<ItemListContainer greeting="women's clothing" />} />
            <Route exact path='/category/mens clothing' element={<ItemListContainer greeting="men's clothing" />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />

          </Routes>

        </BrowserRouter>

      {/* </CartComponentContext> */}
    </>
  )
}

export default App

