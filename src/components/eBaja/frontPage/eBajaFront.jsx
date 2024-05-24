import { Outlet } from 'react-router-dom'
import '../../globalStyles.css'
import './eBajaFront.css'
import InitializeHeader from '../initialContentHeader/initialHeader'

function EBajaFront() {

    return (
        <>
            <Outlet />
            <div className="eBajaPage">
                <div className="saeIndia" id='saeee'>
                    <div className="saeCover">
                        <div className="sae initialheader">
                            <InitializeHeader header='SAE INIDA' />
                        </div>
                        <div className="frontContent">
                            <span className='mx-10'> <span className='ml-20'> SAEINDIA is an affiliate society of SAE International,</span>registered as an Indian non-profit engineering and scientific society dedicated to the advancement of the mobility community in India.</span>
                        </div>
                    </div>
                    <div className="contentExpansion">
                        <div className="saeContent">
                            <p>
                                As an individual member driven society of mobility practitioners, SAEINDIA comprises members associated with transforming the transportation industry - which includes engineers, executives from the industry, government officials, academics and students. Principal emphasis is placed on industries such as automotive, aerospace and commercial vehicles. SAEINDIA promotes and undertakes initiatives for knowledge dissemination and advancement in mobility technologies catering to land, sae, air and space. Out of many student centered events, BAJA SAEINDIA is one of the grandest event falling under the umbrella of SAEINDIA.
                            </p>
                        </div>
                        <div className="imageSpace">
                            <img src="/ebaja-bg.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bajasae ">
                    <div className="baja intialheader">
                        <InitializeHeader header='BAJA 2024 SAEINDIA' />
                    </div>
                    <div className="content">
                        <div className="objective">
                            <h1 className='font-medium text-xl'>Objective</h1>
                            <p>
                                The primary objective of BAJA SAEINDIA has always been to develop an understanding in the fresh and curious minds about entering the industrial reign. The purpose is to help the undergraduates enlarge their spectrum in technical and practical approaches, to trigger the prefrontal cortex and increase problem-solving and planning skills, enhance the managing capability, along with core technical knowledge.
                                <p>
                                    The philosophy hasn’t changed since the event’s birth back in 2007 – the teams still need to build a simple all-terrain vehicle for recreation purposes that are aesthetically and ergonomically sound while still being a fun and durable machine in real-world conditions. This year, the evaluation process of BAJA SAEINDIA is threefold, students have to clear the Virtual Baja preliminary round showcasing their model design, followed by a virtual dynamic event which includes their virtual finalized model, and the physical event, with on-track buggy performance evaluation.
                                </p>
                                The buggies are evaluated on various factors such as cost, aesthetics, and the quality of the fabrication, as part of the static evaluation. The business event is further conducted, which exhibits the creativity level and business approach of the teams. There are also many dynamic tests such as acceleration, Braking, maneuverability over all-terrain, to evaluate the manufactured ATV. But none of these tests are more grueling than the endurance race where the drivers and buggies are pushed to their limits till a winner emerges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EBajaFront