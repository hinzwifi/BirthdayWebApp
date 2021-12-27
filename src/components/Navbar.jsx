import React, {useState} from 'react'
import ThemePick from './ThemePick'

function Navbar() {
    const [sideMenu, setsideMenu] = useState(false)
 function mobilemenu(){
    if(!sideMenu){
        setsideMenu(true)
    }
    else{
        setsideMenu(false)
    }
}
    
    return (
        <>
        
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content flex justify-between  ">
            <div className="flex-none  drawer">
                <button onClick={mobilemenu} id="my-drawer-3" className=" btn btn-square btn-ghost block  lg:hidden draw-toggle  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
                    </svg>
                </button>
                
                 
            </div> 
            
            <div className="flex-1 hidden px-2 mx-2 lg:flex">
                <span className="text-lg font-bold">
                        daisyUI
                        
                    </span>
                    
            </div> 
            <div className=''>
            <div className="flex-1 hidden lg:flex">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-ghost" />
                </div>
            </div> 
            <div className="flex-none">
                <button className="btn btn-square btn-ghost hidden lg:flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">             
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
                </svg>
                </button>
            </div> 
            <ThemePick />
            <div className="flex-none">
                <div className="avatar">
                <div className="rounded-full w-10 h-10 m-1">
                    <img src="https://avatars.dicebear.com/api/avataaars/hinzwifi.svg" />
                </div>
                </div>
            </div>
            </div>
        </div>
        
            
        </>
    )
}

export default Navbar
