import React from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import {BsFillPaletteFill} from 'react-icons/bs'
function ThemePick() {
    useEffect(() => {
        themeChange(false)
        // ๐ false parameter is required for react project
      }, [])
    return (
        <>
            {/* <select className="select select-bordered w-full max-w-xs" data-choose-theme>
                <option disabled=""  value="">Default</option>
                <option value="dark">๐Dark</option>
                <option value="forest">๐ฒForest</option>
                <option value="light">๐Light</option>
            </select>
             */}

            <div className=" dropdown md:dropdown-start dropdown-hover dropdown-end hidden lg:block">
            <div tabindex="0" class="m-1 btn"><BsFillPaletteFill /></div> 
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-200  rounded-box w-52 text-base-content" data-choose-theme>
                <li>
                <a className='hover:bg-red-300  ' data-set-theme="dark" data-act-class="ACTIVECLASS">๐ Dark</a>
                </li> 
                <li>
                <a className='hover:bg-red-300' data-set-theme="forest" data-act-class="ACTIVECLASS">๐ฒ Forest</a>
                </li> 
                <li>
                <a className='hover:bg-red-300' data-set-theme="garden" data-act-class="ACTIVECLASS">๐ Light</a>
                </li>
                <li>
                <a className='hover:bg-red-300' data-set-theme="halloween" data-act-class="ACTIVECLASS">๐ป halloween</a>
                </li>
                <li>
                <a className='hover:bg-red-300' data-set-theme="synthwave" data-act-class="ACTIVECLASS">๐ Synthwave</a>
                </li>
            </ul>
            </div>
        </>
    )
}

export default ThemePick
