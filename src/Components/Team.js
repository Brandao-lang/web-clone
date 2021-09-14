import React from 'react'
import Person from './Person';
import { peopleObj } from '../Data/people';
import '../Styles/Team.css'

export default function Team () {

    const peopleCards = peopleObj.map((person) => <Person img={person.img} name={person.name} role={person.role} />)

    return(
        <div className="team-js">
            {peopleCards}
        </div>
    )
}