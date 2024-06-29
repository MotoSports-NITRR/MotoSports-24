import scrollSpeed from 'react-scroll'
import '../globalStyles.css'
import './formulaBharat.css'

import InitializeHeader from '../eBaja/initialContentHeader/initialHeader'
import The_Team from '../eBaja/the_team/the_team'
import domainHeads from './domain-head-fb.json'
import otherMembers from './member-fb.json'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function FormulaBharat() {

    let fbBolt = '#000'
    const location = useLocation().pathname;
    useEffect(() => {
        if (location == '/formulaBharat') {

        }
    })


    return (
        <>
            <div className="formulaBharatPage" scrollSpeed={1}>
                <div className="formulavideoContent">
                    <div className="formulaVideo">
                        <video src="/nismodesktop.mp4" autoPlay loop></video>
                    </div>
                    <div className="path">
                        <svg width="27" height="41" viewBox="0 0 27 41" fill="none" role="none" class="slide">
                            <path class="path-1" d="M1 1L13.5001 14.3334L26.0002 1" stroke="#fff" stroke-width="1"></path>
                            <path class="path-2" d="M1 14.3339L13.5001 27.6673L26.0002 14.3339" stroke="#fff" stroke-width="1"></path>
                            <path class="path-3" d="M1 27.6663L13.5001 40.9998L26.0002 27.6663" stroke="#fff" stroke-width="1"></path>
                        </svg>
                    </div>
                    <div className="frontHeadingContent">
                        <h1 style={{ color: 'white', fontWeight: '700' }} className='text-5xl'>
                            <span className='' style={{ color: fbBolt, fontWeight: '700' }}>F</span>ORMULA
                            <span style={{ color: fbBolt, fontWeight: '700' }}> B</span>HARAT
                        </h1>
                    </div>
                </div>
                <div className="fbcontent">
                    <div className="teamContainer">
                        <InitializeHeader header='THE TEAM' color='white' bdColor='white' />
                        <div className="team">
                            <div className="domainHeadsIcon">
                                <The_Team domainHead={domainHeads} otherMembers={otherMembers} element="teamContainer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormulaBharat