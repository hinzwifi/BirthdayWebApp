import React from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import {BsFillPaletteFill} from 'react-icons/bs'
function ThemePick() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
      }, [])
    return (
        <>
            {/* <select className="select select-bordered w-full max-w-xs" data-choose-theme>
                <option disabled=""  value="">Default</option>
                <option value="dark">🌑Dark</option>
                <option value="forest">🌲Forest</option>
                <option value="light">🌅Light</option>
            </select>
             */}

            <div className=" dropdown md:dropdown-start dropdown-hover dropdown-end hidden lg:block">
            <div tabindex="0" class="m-1 btn"><BsFillPaletteFill /></div> 
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-200  rounded-box w-52 text-base-content" data-choose-theme>
                <li>
                <a className='hover:bg-red-300  ' data-set-theme="dark" data-act-class="ACTIVECLASS">🌑 Dark</a>
                </li> 
                <li>
                <a className='hover:bg-red-300' data-set-theme="forest" data-act-class="ACTIVECLASS">🌲 Forest</a>
                </li> 
                <li>
                <a className='hover:bg-red-300' data-set-theme="light" data-act-class="ACTIVECLASS">🌅 Light</a>
                </li>
                <li>
                <a className='hover:bg-red-300' data-set-theme="halloween" data-act-class="ACTIVECLASS">👻 halloween</a>
                </li>
            </ul>
            </div>
        </>
    )
}

export default ThemePick
