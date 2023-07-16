import { useState } from 'react'
import Heading from './Heading'
import Product from './Product'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './ProductDetails'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<>
        <Heading />
        <Product />
        </> } />
        <Route path='/product/:ProNum' element={<ProductDetails />} />
      </Routes>

    </>
  )
}

export default App
