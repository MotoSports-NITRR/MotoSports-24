import React from 'react'
import DomainComp from './domain/domain';


function Team(data) {
    return (
        Object.keys(data).map((key) => (
            <DomainComp data={data[key]} domain={`${key}`} />
        ))
    )
}

export default Team;
