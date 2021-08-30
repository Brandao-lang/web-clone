import React from 'react'
import { serviceObj } from '../Data/serviceData'
import Services from './Services';

export default function ServiceCards (props) {
  const serviceCards = serviceObj.map((card) => <Services src={card.src} title={card.title} text={card.text}/>)
    return (
        <div className="cards">
        {serviceCards}
      </div>
    )
}