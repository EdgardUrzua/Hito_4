import { useState } from 'react'
import './App.css'
import  Navbar  from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
//import RegisterPage from './components/RegisterPage'
//import LoginPage from './components/LoginPage'
//import Cart from './components/Cart'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Header></Header> 
     <Home></Home> 
    {/*<RegisterPage></RegisterPage>*/} 
    {/*<LoginPage></LoginPage>*/}
    {/*<Cart />*/}
    <Footer></Footer>
    </>
  )
}

export default App;
