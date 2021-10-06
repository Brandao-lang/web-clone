import React from 'react'
import Portfolio from './Portfolio';
import { portfolioObj } from '../Data/portfolioItems';

export default function Projects (props) {
  
  const portfolioCards = portfolioObj.map((card, index) => <Portfolio key={index} src={card.src} title={card.title} text={card.text} />)
    
  return (
        <div className="portfolio-section">
        <div className="section-title">
          {props.titleCards[1]}
        </div>
        <div className="p-cards">
          {portfolioCards}
        </div>
       </div> 
    )
  }