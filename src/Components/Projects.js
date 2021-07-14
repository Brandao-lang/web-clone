import React from 'react'

export default function Projects (props) {
    return (
        <div className="portfolio-section">
        <div className="section-title">
          {props.titleCards[1]}
        </div>
        <div className="p-cards">
          {props.portfolioCards}
        </div>
       </div> 
    )
}