import React, { useState } from 'react'
import '../Styles/Popup.css'

export default function Popup () {
    const [popUpClass, setPopUpClass] = useState('pop-up')

    function closeHandler() {
        setPopUpClass('close')
    }

    return (
        <div className={popUpClass}>
        <div className='pop-up-content'>
           <p>Hello, welcome to my css/react demonstration! This page is purely for design purposes and does not have any functionality, responsive mobile views are a work in progress,</p>
          <span>thank you for visiting!</span>
          <br/>
          <button onClick={closeHandler}>continue</button>
        </div>
      </div>
    )
}