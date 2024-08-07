import React, { Fragment, useEffect, useState } from 'react';

import Timeline from '../timeline/timeline';
//Ourcar
function Ourcar({events, img}) {

    return (
        <div className="flex car-perfoma" >
            <Timeline events={events} />
            <div className="flex justify-center items-center" style={{ width: '50%', height: 'auto' }}>
                <img src={img} alt="" className='img2' />
            </div>
        </div>
    )
}

export default Ourcar;