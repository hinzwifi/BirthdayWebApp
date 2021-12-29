import React from 'react'
import Navbar from './Navbar'
import {FiPlus} from 'react-icons/fi'
import ApiTrial from './ApiTrial'
import { Link } from 'react-router-dom'

function Home() {
    
    return (
        <>
            <Navbar />
            
            <ApiTrial />
            <Link to="/add" className='btn btn-circle btn-secondary  fixed bottom-5  right-5 '>
                <FiPlus />
            </Link>
         </>
    )
}

export default Home
