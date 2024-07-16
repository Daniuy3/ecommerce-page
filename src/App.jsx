
import {  useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainGallery from './components/MainGallery'
import Meta from './components/Meta';

function App() {
  
  const [empty, setEmpty] = useState(true)
  const [imgActive, setImgActive] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0)
  
  
  return (
    <div className='container'>
      <Header
        cartQuantity = {cartQuantity}
        empty = {empty} 
        setEmpty={setEmpty}
      />
      <main className='main'>
        <MainGallery
        imgActive = {imgActive}
        setImgActive = {setImgActive}
        />
        <Meta
          cartQuantity = {cartQuantity}
          setCartQuantity = {setCartQuantity}
          setEmpty={setEmpty}
        />
      </main>
    </div>
  )
}

export default App
