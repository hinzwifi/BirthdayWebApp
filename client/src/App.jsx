import {  useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Auth from './components/Auth'
import ThemePick from './components/ThemePick'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AuthProfile from './components/AuthProfile'

function App() {
 const [authPerson, setauthPerson] = useState(true)
  
  return (
    <>
       {authPerson ? <AuthProfile />  : <Auth />  }
     
    </>
  )
}

export default App
