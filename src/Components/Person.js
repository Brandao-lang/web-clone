import React from "react";

export default function Person (props) {
    return (
        <div className="person-js">
            <img className='person-img' src={props.img} alt="person"></img>
            <h2>{props.name}</h2>
            <span>{props.role}</span>
            <br/>
            <img className='social-media' src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png" alt="Twitter"></img>
            <img className='social-media' src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png" alt="Facebook"></img>
            <img className='social-media' src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png" alt="Linkden"></img>
        </div>
        
    )
}