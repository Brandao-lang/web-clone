import React from 'react'
import '../Styles/Header.css'

export default function Header () {
    return (
        <div className="header-container">
           <div className="nav-bar">
            <img src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ" alt="company logo"></img>
            <ul>
               <li>
                   SERVICES
               </li>
               <li>
                   PORTFOLIO
               </li>
               <li>
                  ABOUT
               </li>
               <li>
                   TEAM
               </li>
               <li>
                   CONTACT
               </li>
            </ul>
           </div> 
           <div className="header-main">
                <h2 className="greeting-one">Welcome To Our Studio!</h2>
                <h1 className="greeting-two">IT'S NICE TO MEET YOU</h1>
                <button className="header-btn">TELL ME MORE</button>
           </div>
        </div>
    )
}