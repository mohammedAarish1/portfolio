import React, { useEffect, useState } from 'react'
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";


function ThemeBtn() {
    const [themeMode, setThemeMode] = useState('dark')

    const handleOnChange = (e) => {
        const checkedStatus = e.currentTarget.checked
        if (checkedStatus) {
            setThemeMode('light')
        } else {
            setThemeMode('dark')
        }
        console.log(checkedStatus);
    }
    useEffect(() => {
        const mainElement = document.querySelector('body')
        mainElement.classList.remove("light", "dark")
        mainElement.classList.add(themeMode)
    }, [themeMode])



    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleOnChange}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>

            </label>
        </div>
    );
}

export default ThemeBtn
