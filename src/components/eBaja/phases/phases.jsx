import { lazy, React, useRef, useState, useEffect } from 'react'
import './phases.css'
import InitializeHeader from '../initialContentHeader/initialHeader'
import phaseList from '../eBajaPhases.json'
const Phase = lazy(() => import('./phase/phase'))

function Phases() {
        

    return (
        <>
            <div className="phases">
                <div className="baja headerPhase" >
                    <InitializeHeader header='PHASES' color='#fff' bdColor="#ff4e4e" className='fixed top-32' />
                </div>
                <div className="content">
                    {phaseList.map((phase, index) => (<Phase {...phase} />))}
                </div>
            </div>
        </>
    )
}

export default Phases;