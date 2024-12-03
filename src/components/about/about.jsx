import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect } from 'react';
import TagCloud from "TagCloud";
import './about.css';
import Timeline from "../eBaja-FB-essentials/timeline/timeline"
import MemberCard from '../eBaja-FB-essentials/memberCard/memberCard';
import Team from '../eBaja-FB-essentials/team/team';
// import team from "./nonTechTeam.json"
import DomainComp from '../eBaja-FB-essentials/team/domain/domain';
import webTeam from "./webDevTeam.json"
import spons from "./sponsTeam.json"
import desnTm from "./designTeam.json"
import doc from "./docTeam.json"

function Description() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-10 py-6 text-lg'>
      <h1 className='ebaja2 ebaja text-5xl font-semibold text-amber-900 mb-8'>Who Are We</h1>
      <p className='w-4/5 text-gray-600 mb-12'>
        <span className="text-red-700 block mb-48">
          Motosports is a dynamic and innovative club dedicated to pushing the boundaries of automotive technology and competitive racing. Our club has a track record of excellence, actively participating in a range of competitions where we showcase our skills and passion for motosports.
          Through our commitment to excellence and state-of-the-art technologies, we have established ourselves as leaders within the Indian automotive sector. NIT Raipur motosports provides a platform for students to pursue their passions and demonstrate their abilities on a broader stage. Join us and experience the thrill of motosports at NIT Raipur!
        </span>
      </p>

      <h1 className='ebaja2 ebaja text-5xl font-semibold text-amber-900 mb-8'>What Do We Do</h1>
      <p className='w-4/5 text-gray-600'>
        <span className="text-red-700 block mb-40">
          We, at NIT Raipur motosports, are a dedicated team of over 85 members who devote our time and expertise to creating robust and durable cars that outperform the competition. Our club is actively involved in two prestigious races eBaja and Formula Bharat, where we showcase our innovation, engineering prowess, and teamwork.
          Through rigorous testing, meticulous design processes, and a relentless pursuit of excellence, we push the boundaries of what’s possible in the realm of motosports. Join us on this exciting journey of innovation and competition!
        </span>
      </p>
    </div>
  )
}

function App() {
  const sponsHead = [
    {
      "name": "Rishi Singh",
      "desig": "Head",
      "img": "./src/components/about/about/RishiSinghRajput.jpg",
      "insta": "https://www.instagram.com/shiri_singha/?igsh=MXNlZTY0d3JoNjA0Ng%3D%3D",
      "linkedin": "https://www.linkedin.com/in/rishi-singh-aa5387264?trk=contact-info"
    },
    {
      "name": "Ritik Pathak",
      "desig": "Head",
      "img": "./src/components/about/about/RitikPathak.jpg",
      "insta": "https://www.instagram.com/ritik_gear?igsh=bDYzbW5zaGpuaWds",
      "linkedin": "https://www.linkedin.com/in/ritik-pathak-31b865247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ]

  return (
    <>
      <main className=' aboutPage flex flex-col justify-between items-center bg-modestBrown'>
        <div id='introDiv' className="w-85vw">
          <div className="ebaja2 flex justify-evenly">
            <Description />
          </div>

          <div className="flex justify-center">
            <Timeline events={events} />
          </div>

          <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Web Development</h1>
          <DomainComp data={webTeam} />

          <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Sponsorship</h1>
          <div className='sponsHead resp -mt-10 flex justify-center items-center flex-wrap'>
            {
              sponsHead.map((d) => (
                <MemberCard {...d} />
              ))
            }
          </div>
          <DomainComp data={spons} />

          <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Documentation</h1>
          <DomainComp data={doc} />

          <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Design</h1>
          <DomainComp data={desnTm} />
        </div>
      </main>
    </>
  )
}

export default App;

//Timeline-1 Data about Phases
const events = [
  {
    heading: "STEP 1",
    subHeading: "Alumni Meet",
    description: "NIT RAIPUR has a vast alumni network and conducts an alumni meet every year in which more than 300+ alumni holding senior positions in various companies visit our campus. We conduct a car showcasing event during the meet and also have an interactive session with them.",
    imgSrc: "./src/components/about/about/event1.jpg",
    direction: "left",
  },
  {
    heading: "STEP 2",
    subHeading: "Workshops at AAVARTAN",
    description: "We conduct workshops and mini-events related to automobiles in AAVARTAN (tech fest).",
    imgSrc: "./src/components/about/about/event2.jpg",
    direction: "right",
  },
  {
    heading: "STEP 3",
    subHeading: "Vehicle Showcasing at ECLECTIKA",
    description: "Showcasing our VEHICLE and giving the experience of driving in ECLECTIKA, Central India’s largest fest having a footfall of more than 30k+.",
    imgSrc: "./src/components/about/about/event3.jpg",
    direction: "left",
  },
  {
    heading: "STEP 4",
    subHeading: "Road Shows",
    description: "Various road shows in front of our college main building are conducted by showcasing our vehicle, attracting a total of more than 1.5k+ local crowd and students along with the faculties.",
    imgSrc: "./src/components/about/about/event4.jpg",
    direction: "right",
  },
  {
    heading: "STEP 5",
    subHeading: "Workshops Throughout the Year",
    description: "Our club regularly conducts workshops throughout the year in NIT Raipur and nearby colleges.",
    imgSrc: "./src/components/about/about/event5.jpg",
    direction: "left",
  },
];
