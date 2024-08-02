import './eBajaStyles.css'
import React, { Fragment } from 'react'
import TagCloud from "TagCloud";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Imagecard() {
  return (
    <div className='w-11/12 m-auto'>
        <div className='resp mt-20 flex justify-around'>
            {dataimg.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className={`hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] text-black rounded-xl flex flex-wrap justify-center items-end`}>
                    <div className="lol h-fit w-80 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss lol text-amber-400 text-3xl font-bold gap-4 py-1 '>
                            {d.name}
                        </div>

                        <div className='diss lol text-white text-xl font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                        </div>

                        <div className='diss2 lol flex justify-center items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'>
                                <FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon>
                            </a>
                            
                            <a href={d.linkedin} className='lol py04'>
                                <FontAwesomeIcon className='lol icon' icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

//Descrition
function Description() {
  return (
    <div className='flex flex-col justify-center h-800'>
        <h1 className='ebaja2 ebaja ml-10 text-amber-800 mb-20'>EBAJA</h1>
        <p className='w-4/5 ml-10 desc text-gray-600'>
            <span className="text-red-700"> The primary objective of BAJA SAEINDIA </span>
            has always been to develop an understanding in the fresh and curious minds about entering the industrial reign. The purpose is to help the 
            <span className="text-red-700"> Undergraduates </span>
            enlarge their spectrum in technical and practical approaches, to trigger the prefrontal cortex and increase problem-solving and planning skills, enhance the managing capability, along with core technical knowledge.
        </p>
    </div>

  )
}

//Timeline
const Timeline=({events})=>{
    return (
        <>
            <div className="flex ">
                    <div className="flex">
                        <img src=".\src\components\eBaja\pics\atv.png" alt="" className='img'/>
                    </div>
                    <div className="flex flex-col gap-y-3 w-full my-4">

                    <Circle />
                    {events.map((event,key) => {
                        return <Fragment key={key}>
                            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                                {event.direction === 'left' ? (
                                    <EventCard heading={event.heading} subHeading={event.subHeading} description={event.description} />
                                ) : (
                                    <div></div>
                                )}

                                <Pillar/>

                                {event.direction === 'right' ? (
                                    <EventCard heading={event.heading} subHeading={event.subHeading} description={event.description} />
                                ) : (
                                    <div></div>
                                )}
                            </div>

                            {key <(events.length - 1) && <Circle/>}
                            </Fragment>
                    })}
                    <Circle />
                </div>
            </div>  
        </>
    )
}

const Circle = ()=>{
    return(
        <div className='bg-gradient-to-r from-amber-400 to-amber-900 rounded-full w-4 h-4 bg-blue-500 mx-auto'></div>
    )
}

const Pillar = ()=>{
    return(
        <div className='bg-gradient-to-b from-amber-400 to-amber-900 rounded-t-full rounded-b-full w-2 h-full bg-amber-500 mx-auto'></div>
    )
}


const EventCard = ({heading,subHeading,description})=>{
    return (
        <div className='lol transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4'>
            <div className='lo2 lol font-bold text-lg border-b'> {heading} </div>
            <div className='lol text-sm font-black w-52'> {subHeading} </div>
            <div className='lol text-sm text-gray-700 w-52'> {description} </div>
        </div>
    )
}

//Ourcar
function Ourcar({events}) {
    return (
        <div>
            <div className="flex ">
                <div className="flex flex-col gap-y-3 w-full my-4">
                    <Circle />

                    {events.map((event,key) => {
                        return <Fragment key={key}>
                            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                                {event.direction === 'left' ? (
                                    <EventCard heading={event.heading} subHeading={event.subHeading} description={event.description} />
                                ) : (
                                    <div></div>
                                )}

                                <Pillar/>

                                {event.direction === 'right' ? (
                                    <EventCard heading={event.heading} subHeading={event.subHeading} description={event.description} />
                                ) : (
                                    <div></div>
                                )}
                                
                            </div>

                            {key <(events.length - 1) && <Circle/>}
                        </Fragment>
                    })}

                        <Circle />
                    </div>

                    <div className="flex"><img src=".\src\components\eBaja\pics\ebajacar2.png" alt="" className='img2'/></div>
                </div>
        </div>
    )
}

//Textsphere
const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
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

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div
      
      
      className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

//Brakes

function Brakes() {
  return (
    <div className='w-11/12 m-auto'>
        <div className='resp mt-20 flex justify-around'>
            {data.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className={`hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] text-black rounded-xl flex flex-wrap justify-center items-end`}>
                    <div className="lol h-fit w-80 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss lol text-amber-400 text-3xl font-bold gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-white text-xl font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-center items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='lol icon' icon={faLinkedin} /></a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
        <div className='resp mt-32 flex justify-around'>
            {data3.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className='hover:shadow-2xl card h-[320px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-wrap justify-center items-end'>
                    <div className=" lol h-fit w-64 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss text lol text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-gray-50 font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-between items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='icon lol' icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
    </div>
  )
}

//CVpowertrain

function Cvpowertrain() {
  return (
    <div className='w-3/4 m-auto'>
        <div className='resp mt-32 flex justify-evenly'>
            {datacv.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className='hover:shadow-2xl card h-[320px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-wrap justify-center items-end'>
                    <div className=" lol h-fit w-64 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss text lol text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-gray-50  font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-between items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='icon lol' icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
    </div>
  )
}

//EVPowertrain

function Evpowertrain() {
  return (
    <div className='w-11/12 m-auto'>
      <div className='resp mt-20 flex justify-around'>
          {dataev.map((d) => (
              <div style={{backgroundImage: `url(${d.img})`}} className={`hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] text-black rounded-xl flex flex-wrap justify-center items-end`}>
                  <div className="lol h-fit w-80 rounded-xl flex flex-col justify-center items-center">
                      <div className='diss lol text-amber-400 text-3xl font-bold gap-4 py-1 '>
                          {d.name}
                          
                      </div>
                      <div className='diss lol text-white text-xl font-bold flex justify-center items-center gap-4  '>
                          {d.desig}
                          
                      </div>
                      <div className='diss2 lol flex justify-center items-center gap-4 p-4 '>
                          <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='lol icon' icon={faLinkedin} /></a>
                      </div>
                  </div>
          

              </div>
          ))}
      </div>
      <div className='resp mt-32 flex justify-around'>
          {data2ev.map((d) => (
              <div style={{backgroundImage: `url(${d.img})`}} className='hover:shadow-2xl card h-[320px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-wrap justify-center items-end'>
                  <div className=" lol h-fit w-64 rounded-xl flex flex-col justify-center items-center">
                      <div className='diss text lol text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1 '>
                          {d.name}
                          
                      </div>
                      <div className='diss lol text-gray-50 text-xl font-bold flex justify-center items-center gap-4  '>
                          {d.desig}
                          
                      </div>
                      <div className='diss2 lol flex justify-between items-center gap-4 p-4 '>
                          <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='icon lol' icon={faLinkedin} />
                          </a>
                      </div>
                  </div>
          

              </div>
          ))}
      </div>
  </div>
  )
}

//Steering

function Steering() {
  return (
    <div className='w-11/12 m-auto'>
        <div className='resp mt-18 flex justify-around'>
            {datasteer.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className={`hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] text-black rounded-xl flex flex-wrap justify-center items-end`}>
                    <div className="lol h-fit w-80 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss lol text-amber-400 text-3xl font-bold gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-white text-xl font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-center items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='lol icon' icon={faLinkedin} /></a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
        <div className='resp mt-32 flex justify-between'>
            {data2steer.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className='hover:shadow-2xl card h-[320px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-wrap justify-center items-end'>
                    <div className=" lol h-fit w-64 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss text lol text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-gray-50  font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-between items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='icon lol' icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
    </div>
  )
}

//Frames

function Frames() {
  return (
    <div className='w-11/12 m-auto'>
        <div className='resp mt-20 flex justify-around'>
            {datafr.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className={`hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] text-black rounded-xl flex flex-wrap justify-center items-end`}>
                    <div className="lol h-fit w-80 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss lol text-amber-400 text-3xl font-bold gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-white text-xl font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-center items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='lol icon' icon={faLinkedin} /></a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
        <div className='resp mt-32 flex justify-between'>
            {data2fr.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className='hover:shadow-2xl card h-[320px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-wrap justify-center items-end'>
                    <div className=" lol h-fit w-64 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss text lol text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-gray-50  font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-between items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='icon lol' icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
    </div>
  )
}

//Suspension

function Suspension() {
  return (
    <div className='w-11/12 m-auto'>
        <div className='resp mt-20 flex justify-around'>
            {datasus.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className={`hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] text-black rounded-xl flex flex-wrap justify-center items-end`}>
                    <div className="lol h-fit w-80 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss lol text-amber-400 text-3xl font-bold gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-white text-xl font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-center items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='lol icon' icon={faLinkedin} /></a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
        <div className='resp mt-32 flex justify-evenly'>
            {data2sus.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className='hover:shadow-2xl card h-[320px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-wrap justify-center items-end'>
                    <div className=" lol h-fit w-64 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss text lol text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-gray-50 text-xl font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-between items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='icon lol' icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
    </div>
  )
}

//Mentor

function Mentor() {
  return (
    <div className='w-11/12 m-auto'>
        <div className='resp mt-20 flex justify-between'>
            {datamen.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className={`hover:shadow-2xl card  bg-no-repeat bg-cover bg-center h-[380px] text-black rounded-xl flex flex-wrap justify-center items-end`}>
                    <div className="lol h-fit w-80 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss lol text-amber-400 text-3xl font-bold gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-white text-xl font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-center items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='lol icon' icon={faLinkedin} /></a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
        <div className='resp mt-32 flex justify-between'>
            {data2men.map((d) => (
                <div style={{backgroundImage: `url(${d.img})`}} className='hover:shadow-2xl card h-[380px] text-black rounded-xl flex flex-wrap justify-center items-end'>
                    <div className=" lol h-fit w-80 rounded-xl flex flex-col justify-center items-center">
                        <div className='diss text lol text-3xl text-amber-300 font-bold flex justify-center items-center gap-4 py-1 '>
                            {d.name}
                            
                        </div>
                        <div className='diss lol text-gray-50 text-xl font-bold flex justify-center items-center gap-4  '>
                            {d.desig}
                            
                        </div>
                        <div className='diss2 lol flex justify-between items-center gap-4 p-4 '>
                            <a href={d.insta} className='lol py-1'><FontAwesomeIcon className='lol icon' icon={faInstagram}></FontAwesomeIcon></a><a href={d.linkedin} className='lol py04'><FontAwesomeIcon className='icon lol' icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
            

                </div>
            ))}
        </div>
    </div>
    
  )
}

//Executive

function Executives() {
  return (
    <>
        <div className="resp flex justify-around">
            <div><h1 className='text-4xl my-10 exe'>Brakes</h1>
                <ul>
                    <li>Luv Singh Saluja</li>
                    <li>Shantanu Gouraha</li>
                    <li>Siddharth Sharma</li>
                </ul>
            </div>
            <div><h1 className='hi text-4xl my-10 exe'>Electrical Powertrain</h1>
                <ul>
                    <li>Amurtya Rai</li>
                    <li>Prince Kumar Singh</li>
                    <li>Aman Kumar Sharma</li>
                    <li>Aarya Shastri</li>
                </ul>
            </div>
            <div><h1 className='text-4xl my-10 exe'>Frames</h1>
                <ul>
                    <li>Satwik Gupta</li>
                    <li>Neeraj Kumar Verma</li>
                    <li>Goli Sri Vardhan</li>
                </ul>
            </div>
        </div>
        <div className="resp flex justify-evenly my-10">
            <div><h1 className='text-4xl my-10 exe'>Steering</h1>
                <ul>
                    <li>Manish Agrawal</li>
                    <li>A.sathvik</li>
                    <li>Ritika jain</li>
                </ul>
            </div>
            <div><h1 className='text-4xl my-10 exe'>Suspension</h1>
                <ul>
                    <li>T.Srihitha Hasini</li>
                    <li>Abhishek Yadav</li>
                    <li>Sakshi Roy</li>
                </ul>
            </div>
            
        </div>
        

    </>
    
  )
}

function App() {


  return (
    <>
        <main className='flex flex-col justify-between items-center bg-modestBrown'>
            <div id='introDiv' className="w-85vw">
                <div className="ebaja2 flex justify-evenly">
                    <Description />
                    <TextShpere />
                </div>

                <Timeline events={events} />

                <h1 className='head text-6xl flex justify-center items-center pb-28 pt-36'>OUR CAR</h1>
                <Ourcar events={info}/>

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>MEET OUR TEAM</h1>
                <Imagecard />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Frames</h1>
                <Frames />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Suspension</h1>
                <Suspension />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Steering</h1>
                <Steering />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>EV PowerTrain</h1>
                <Evpowertrain />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Brakes</h1>
                <Brakes />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>OUR MENTORS</h1>
                <Mentor />
                
                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36 my-10'>Executives</h1>
                <Executives/>
            </div>
        </main>
    </>
  )
}

export default App

//Timeline-1 Data about Phases
let events = [
  {
      heading : "PHASE 1",
      subHeading: "Preliminary Round, BAJA SAEINDIA 2025",
      description: "The first leg of the event is Phase 1 Preliminary round which is scheduled for July 2024; it focuses on the rudimentary virtual presentation of the teams All Terrain Vehicle (ATV)",
      direction: "left"

  },
  {
      heading : "PHASE 2",
      subHeading: "Virtual BAJA SAEINDIA 2025",
      description: "The second leg of the event i.e., Virtual round which has two division first incorporate Virtual dynamic event with the help of Simulation based model",
      direction: "right"

  },
  {
      heading : "PHASE 3",
      subHeading: "Physical Round, BAJA SAEINDIA 2025",
      description: "The final leg of the event is Phase 3, the Physical round, which is conducted physically in Jan 2025 for mBaja and hBaja and in March 2025 for eBaja for 5 days",
      direction: "left"

  },
  
]

//Timeline-2 Data about Car made by the club

let info = [
  {
      subHeading : "7.4 KW",
      heading: "Motor Nominal / Peak Power",
      direction: "left"

  },
  {
      subHeading : "59.13 Nm",
      heading: "Nominal Torque / Peak Torque",
      direction: "right"

  },
  {
      subHeading : "4200",
      heading: "Moto Max RPM",
      direction: "left"

  },
  {
    subHeading : "50.25",
    heading: "Max Speed",
    direction: "right"

  },
  {
    subHeading : "3.02",
    heading: "Max Acceleration",
    direction: "left"
  },
  {
    subHeading : "39 KM",
    heading: "Vehicle Range",
    direction: "right"

},
  
]

const data=[
  {
      name:"K. S. S. Karthik",
      desig:"Domain Head",
      img:"./src/components/eBaja/pics/karthik.JPG",
      insta:"https://www.instagram.com/karthik_sai712",
      linkedin:""
  },
  
]
const data3 = [
  {

      name:"Sanchit Singh",
      desig:"Member",
      img:"./src/components/eBaja/pics/treasurer.jpg",
      insta:"https://www.instagram.com/singhsanchit42?igsh=bDJ4YW1iNnFxY3Z0",
      linkedin:"https://www.linkedin.com/in/sanchit-singh-011924266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Gaurab Ray",
      desig:"Member",
      img:"./src/components/eBaja/pics/vice.JPEG",
      insta:"https://www.instagram.com/24raygaurab?igsh=bmU0MnptdmwxdXFo",
      linkedin:"https://www.linkedin.com/in/gaurab-ray-504a8526b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Mridul Bansal",
      desig:"Member",
      img:"./src/components/eBaja/pics/mridul.jpeg",
      insta:"",
      linkedin:""
  }

]

const datacv=[
  {
      name:"Ajay Kashyap",
      desig:"Vice Captain",
      img:"./src/components/eBaja/pics/vice3.jpg",
      insta:"",
      linkedin:"https://www.linkedin.com/in/ajaykashyap92025?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Vaishnavi Padole",
      desig:"Member",
      img:"./src/components/eBaja/pics/vaishnavi.jpg",
      insta:"",
      linkedin:"https://www.linkedin.com/in/vaishnavi-padole-b41ab0250"
  }
]

//EVpowertrain

const dataev=[
  {
      name:"Sarvagya Jain",
      desig:"Domain Head",
      img:"./src/components/eBaja/pics/sarvagya.jpg",
      insta:"https://www.instagram.com/sarvagyajain2105?igsh=MWE1NmM0bnhoYTVqbw==",
      linkedin:"https://www.linkedin.com/in/sarvagya-jain-7159b2254/"
  }
  
]

const data2ev=[
  {
      name:"Balpreet",
      desig:"Member",
      img:"./src/components/eBaja/pics/balpreet.jpg",
      insta:"https://www.instagram.com/balpreet_singh_10?igsh=MTkyNTN3c3NtZmZpNA==",
      linkedin:"http://www.linkedin.com/in/balpreet-singh-gill-72374925b"
  },
  {
      name:"Shivansh",
      desig:"Member",
      img:"./src/components/eBaja/pics/shivansh.jpg",
      insta:"https://www.instagram.com/shivansh_chowhan?igsh=MWxteTRhaTdkNmlicA==",
      linkedin:"https://www.linkedin.com/in/shivansh-chowhan-b0b372239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]

//Steering

const datasteer=[
  {
      name:"Nimesh Kashyap",
      desig:"Domain Head",
      img:"./src/components/eBaja/pics/nimesh.jpeg",
      insta:"",
      linkedin:"https://www.linkedin.com/in/nimesh-kumar-kashyap-1b0196261/"
  },
]

const data2steer=[
  {
      name:"Astha Soni",
      desig:"Member",
      img:"./src/components/eBaja/pics/astha.jpg",
      insta:"https://www.instagram.com/princyprincy_astha?utm_source=qr&igsh=MW5lZWtxemtvOXJ0aA==",
      linkedin:"https://www.linkedin.com/in/astha-soni-47a5682a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Chirantan",
      desig:"Member",
      img:"./src/components/eBaja/pics/chirantan.jpg",
      insta:"https://www.instagram.com/___dev__sharma__?igsh=MTlmdXA2NmFrdjQy",
      linkedin:"https://www.linkedin.com/in/chirantan-dev-sharma-42b6252ab"
  },
  {
      name:"Utkarsh Nashine",
      desig:"Member",
      img:"./src/components/eBaja/pics/chirantan.jpg",
      insta:"",
      linkedin:""
  }

]

//Frames

const datafr=[
  {
      name:"Pratyush Shastri",
      desig:"Domain Head",
      img:"./src/components/eBaja/pics/pratyush.jpg",
      insta:"https://www.instagram.com/prat_1220?igsh=MTJ5OXNlc21vMWsxMA==",
      linkedin:"https://www.linkedin.com/in/pratyush-shastri"
  }
]

const data2fr=[
  {
      name:"Dhruv Dutta",
      desig:"Member",
      img:"./src/components/eBaja/pics/dhruv.jpg",
      insta:"https://www.instagram.com/dhruv_d64?igsh=bmVzNjEwNGJkYzFy",
      linkedin:"https://www.linkedin.com/in/dhruv-kumar-dutta-914019293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
  
      name:"Pratik Vats",
      desig:"Member",
      img:"./src/components/eBaja/pics/pratik.jpeg",
      insta:"https://www.linkedin.com/in/pratik-vats-a354ab294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      linkedin:"https://www.linkedin.com/in/pratik-vats-a354ab294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Shantanu N K",
      desig:"Member",
      img:"./src/components/eBaja/pics/shantanu.png",
      insta:"https://www.instagram.com/skc40/",
      linkedin:"https://www.linkedin.com/in/shantanu-n-k-choudhury/"
  }
]

//Suspension

const datasus=[
  {
      name:"Ritik Pathak",
      desig:"Domain Head",
      img:"./src/components/eBaja/pics/ritik.jpg",
      insta:"https://www.instagram.com/ritik_gear?igsh=bDYzbW5zaGpuaWds",
      linkedin:"https://www.linkedin.com/in/ritik-pathak-31b865247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]
const data2sus=[
  {
      name:"Yatharth",
      desig:"Member",
      img:"./src/components/eBaja/pics/yatharth.png",
      insta:"https://www.instagram.com/yatharth__verma?igsh=dnJ6emRzbzNjNng3",
      linkedin:"https://www.linkedin.com/in/yatharth-verma-b75a58201/"
  },
  {
      name:"Argha",
      desig:"Member",
      img:"./src/components/eBaja/pics/argha.JPG",
      insta:"https://www.instagram.com/argha_choudhary?igsh=MWU0N3N6NmExazFpbw==",
      linkedin:"https://www.linkedin.com/in/argha-choudhary-b36191258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]

//Mentor

const datamen=[
  {
      name:"Shaili Mishra",
      desig:"Mentor",
      img:"./src/components/eBaja/pics/shaili.JPG",
      insta:"https://www.instagram.com/shailimishra22?utm_source=qr&igsh=cXBjOHg2eG94c2Vp",
      linkedin:"https://www.linkedin.com/in/shaili-mishra-358b2322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Bhupendra Singh",
      desig:"Mentor",
      img:"./src/components/eBaja/pics/bhupendra.JPG",
      insta:"https://www.instagram.com/bhupendra.s.p?igsh=MTA1ZnV1b2ZvYmpmdg==",
      linkedin:"https://www.linkedin.com/in/bhupendra-singh-patel-666212233"
  },
  {
      name:"Ekant Sahu",
      desig:"Mentor",
      img:"./src/components/eBaja/pics/ekant.jpeg",
      insta:"https://www.instagram.com/_.lonely_coder._?igsh=aDNpYXY5ZGM3ZDhv",
      linkedin:"https://www.linkedin.com/in/ekant-sahu/"
  }
]
const data2men=[
  {
      name:"Harsh",
      desig:"Mentor",
      img:"./src/components/eBaja/pics/harsh.JPG",
      insta:"https://www.instagram.com/",
      linkedin:"https://www.linkedin.com/feed/"
  },
  {
      name:"Piyush Kumar",
      desig:"Mentor",
      img:"./src/components/eBaja/pics/piyush.JPEG",
      insta:"https://www.instagram.com/p.i.y.y.u.s.h_kmr?igsh=MWF4ZHl6eGp0ZTkyeQ==",
      linkedin:"https://www.linkedin.com/in/piyush-kumar-796513297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Bhavnesh Rai",
      desig:"Mentor",
      img:"./src/components/eBaja/pics/bhavnesh.JPG",
      insta:"https://www.instagram.com/bhavnesh.rai?igsh=bXJpaWc3cXU2c3h4",
      linkedin:"http://linkedin.com/in/bhavnesh-rai-4b4712273"
  }
]

//Caps

const dataimg = [
  {
      name:"Abhiroop Sharma",
      desig:"Captain",
      img:"./src/components/formulabharat/pics/abhiroop.jpg",
      insta:"https://www.instagram.com/iam_sharmaji7?igsh=MTdpem9uZWpveXZ3cQ==",
      linkedin:"https://www.linkedin.com/in/abhiroop-sharma-75a46926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      key: '2',
      name: 'Ajay Kashyap',
      desig: 'Vice-Captain',
      img: "./src/components/formulabharat/pics/ajay.jpg",
      insta: '',
      linkedin: 'https://www.linkedin.com/in/ajaykashyap92025?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'

  },
  {
    key: '3',
    name: 'Om Prakash Sahoo',
    desig: 'Team Manager',
    img: "./src/components/formulabharat/pics/om.jpg",
    insta: 'https://www.instagram.com/_.axelx_?igsh=eHo5M3J3YXdrNXJw',
    linkedin: "https://www.linkedin.com/in/om-prakash-sahoo-60bb46257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

  },
  {
      key: '4',
      name: 'Rishi Singh Rajput',
      desig: 'Treasurer',
      img: "./src/components/formulabharat/pics/rishi.jpg",
      insta: 'https://www.instagram.com/shiri_singha?igsh=MXNlZTY0d3JoNjA0Ng==',
      linkedin: "https://www.linkedin.com/in/rishi-singh-aa5387264?trk=contact-info"

  }
]