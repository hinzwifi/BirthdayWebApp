import {  useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Auth from './components/Auth'

import Home from './components/Home'
import AuthProfile from './components/AuthProfile'

import {Routes, Route} from 'react-router-dom'
import Error404 from './components/Error404'
import Signup from './components/Signup'
import PasswordRecover from './components/PasswordRecover'
function App() {
 const [authPerson, setauthPerson] = useState(true)
  
  return (
    <>
    <Routes>
        <Route exact path="/" element={authPerson ? <Home />  : <Auth />  } />
        <Route path="/add" element={<AuthProfile />} />
        <Route path="/profile" element={<AuthProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*"  element={<Error404 />}/>
        <Route path="/passrecover"  element={<PasswordRecover />}/>
      </Routes>
      
     
    </>
  )
}

export default App
