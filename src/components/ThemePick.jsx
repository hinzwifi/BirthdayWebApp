import React from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function ThemePick() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
      }, [])
    return (
        <>
            <select className="select select-bordered w-full max-w-xs" data-choose-theme>
                <option disabled=""  value="">Default</option>
                <option value="dark">🌑Dark</option>
                <option value="forest">🌲Forest</option>
                <option value="light">🌅Light</option>
            </select>
        </>
    )
}

export default ThemePick
