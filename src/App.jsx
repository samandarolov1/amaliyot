import './App.css'
import Navbar from './pages/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/Contact/Contact'
import Service from './pages/service/Service'
import Delivery from './pages/delivery/Delivery'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Discount from './pages/discount/Discount'
import Catalogs from './pages/catalogs/Catalogs'
import Basket from './pages/basket/Basket'

function App() {


  return (
    <>
      <div className="specialNavDiv"></div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='basket' element={<Basket />} />
        <Route path='service' element={<Service />} />
        <Route path='delivery' element={<Delivery />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='discount' element={<Discount />} />
        <Route path='catalogs' element={<Catalogs />} />
      </Routes>
    </>
  )
}

export default App
