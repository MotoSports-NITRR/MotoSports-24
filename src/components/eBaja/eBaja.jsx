import './eBajaStyles.css'
import React, { Fragment } from 'react'
import TagCloud from "TagCloud";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import TextShpere from '../eBaja-FB-essentials/textSphere/textSpehere';
import Ourcar from '../eBaja-FB-essentials/car-perfoma/car-perfoma';
import Phases from '../eBaja-FB-essentials/phases/phases';
import phases from "./phases.json"
import Team from '../eBaja-FB-essentials/team/team';
import team from './team.json'
import FrontLiner from '../eBaja-FB-essentials/team/frontLiners/frontLiner';
import frontLinersData from './frontLiners.json'
import Executives from '../eBaja-FB-essentials/team/executive/executive';
import executives from './executive.json'

function Description() {
  return (
    <div className=' desc flex flex-col justify-center items-center h-800'>
      <h1 className='ebaja2 ebaja ml-10 text-amber-800 mb-20'>EBAJA</h1>
      <p className='w-4/5 ml-10 desc text-gray-600'>
        <span className="text-red-700"> The primary objective of BAJA SAEINDIA </span>
        has always been to develop an understanding in the fresh and curious minds about entering the industrial reign. The purpose is to help the
        <span className="text-red-700"> Undergraduates </span>
        enlarge their spectrum in technical and practical approaches, to trigger the prefrontal cortex and increase problem-solving and planning skills, enhance the managing capability, along with core technical knowledge.
        The philosophy hasn’t changed since the event’s birth back in <span className="text-red-700"> 2007 </span>- the teams still need to build a simple all-terrain vehicle for recreation purposes that are aesthetically and ergonomically sound while still being a fun and durable machine in real-world. The evaluation process of <span className="text-red-700"> BAJA SAEINDIA </span> is threefold, students have to clear the Virtual Baja preliminary round showcasing
        their model design, followed by a virtual dynamic event which includes their virtual finalized model, and the physical event, with <span className="text-red-700"> on-track buggy performance </span> evaluation.


      </p>
    </div>

  )
}

function App() {
  const info = [
    {
      subHeading: "7.4 KW",
      heading: "Motor Nominal / Peak Power",
      direction: "left"

    },
    {
      subHeading: "59.13 Nm",
      heading: "Nominal Torque / Peak Torque",
      direction: "right"

    },
    {
      subHeading: "4200",
      heading: "Moto Max RPM",
      direction: "left"

    },
    {
      subHeading: "50.25",
      heading: "Max Speed",
      direction: "right"

    },
    {
      subHeading: "3.02",
      heading: "Max Acceleration",
      direction: "left"
    },
    {
      subHeading: "39 KM",
      heading: "Vehicle Range",
      direction: "right"

    },

  ]

  const texts = [
    "Power",
    "50.25",
    "7.4 KW",
    "4200 RPM",
    "Torque",
    "Acceleration",
    "RPM",
    "39 KM",
    "Range",
    "Brakes",
    "Phase 1",
    "E-Baja",
    "Formula-1",
    "t-bharat",
    "ATV",
  ];

  return (
    <>
      <main className='ebajaPage flex flex-col justify-between items-center bg-modestBrown'>
        <div id='introDiv' className="w-85vw">
          <div className="fbFront flex justify-evenly items-center">
            <Description />
            <TextShpere texts={texts} />
          </div>

          <Phases events={phases} img=".\src\components\eBaja\pics\atv.png" alt="" className='img2' />

          <h1 className='head text-6xl flex justify-center items-center pb-28 pt-36'>OUR CAR</h1>
          <Ourcar events={info} img=".\src\components\eBaja\pics\ebajacar2.png" />

          <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>MEET OUR TEAM</h1>
          <FrontLiner caps={frontLinersData} />

          <div className="FB_Team eBaja_Team">
            <Team {...team} />
          </div>

          <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36 my-10'>Executives</h1>
          <Executives {...executives} />
        </div>
      </main>
    </>
  )
}

export default App
