import React from 'react'
import '../Styles/About.css'

export default function About () {
    return (
        <div className="about-top">
            <ul className='about-list'>
                <li>
                <p><img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/1.jpg" alt="images"/><h2>2009-2011</h2> <h2>Our Humble Beginnings</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium!</p>
                </li>
                <div className='vl'></div>
                <li style={{textAlign: "left"}}>
                <p><img style={{float: "left", marginRight: '5%', marginLeft: '37%'}} className='about-alt' src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/1.jpg" alt="images"/><h2>March 2011</h2> <h2>An Agency is Born</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </li>
                <div className='vl'></div>
                <li>
                <p><img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/1.jpg" alt="images"/><h2>December 2015</h2> <h2>Transition to Full Service</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium!</p>
                </li>
                <div className='vl'></div>
                <li style={{textAlign: "left"}}>
                <p><img style={{float: "left", marginRight: '5%', marginLeft: '37%'}} className='about-alt' src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/1.jpg" alt="images"/><h2>July 2020</h2> <h2>Phase Two Expansion</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium!</p>
                </li>
                <br/>
                <br/>
                <br/>
            </ul>
        </div>
    )
}