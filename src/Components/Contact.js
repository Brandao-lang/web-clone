import React from 'react'
import '../Styles/Contact.css'

export default function Contact () {
    return (
        <div className="contact-main">
            <div className="contact-title">
                <h1>CONTACT US</h1>
                <span>lorem ipsum  dolor hekt asf</span>
            </div>
            <div className='form-container'>  
                <form>
                    <div className='inner-container'>
                        <div className='user-info'>
                            <input type="text" placeholder='Your Name *'/>
                            <br/>
                            <input type="text" placeholder='Your Email *'/>
                            <br/>
                            <input type="text" placeholder='Your Phone *'/>
                        </div>
                        <div className='text-box'>
                            <textarea placeholder='Your Message *'/>
                        </div>
                    </div>
                    <button className="contact-btn">SEND MESSAGE</button>
                </form>
            </div>  
        </div>
    )
}