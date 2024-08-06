import React, { Fragment, useEffect, useState } from 'react';

import EventCard from "../eventCard/eventCard"
import Timeline from '../timeline/timeline';
//Ourcar
function Ourcar() {

    const events = [
        {
            subHeading: "KTM 390 (2013)",
            heading: "Engine",
            direction: "left"

        },
        {
            subHeading: "140 km/h",
            heading: "Top Speed",
            direction: "right"

        },
        {
            subHeading: "43 bsp at 9500 rpm",
            heading: "Power",
            direction: "left"

        },
        {
            subHeading: "AISI 1018",
            heading: "Material of chassis",
            direction: "right"

        },
        {
            subHeading: "250 kg",
            heading: "Weight",
            direction: "left"
        },
        {
            subHeading: "R13",
            heading: "Tyres",
            direction: "right"

        },

    ]

    return (
        <div>
            <div className="flex" >
                <Timeline events={events} />
                <div className="flex" style={{ width: '50%', height: 'auto' }}>
                    <img src=".\src\components\formulabharat\pics\formulacar.PNG" alt="" className='img2' />
                </div>
            </div>
        </div>
    )
}

export default Ourcar;