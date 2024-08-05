import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect } from 'react';
import TagCloud from "TagCloud";
import './about.css';


function Imagecard() {
  return (
    <div className='w-11/12 m-auto'>
      <div className='resp -mt-10 flex justify-evenly'>
        <div className='resp mt-20 flex justify-center items-center flex-wrap'>
          {dataimg.map((d) => (
            <div
              key={d.name}
              style={{ backgroundImage: `url(${d.img})` }}
              className='hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] w-80 text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'
            >
              <div className="lol h-[110px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-0">
                <div>
                  <div className='diss text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
                    {d.name}
                  </div>
                  <div className='diss text-white text-xl font-bold flex justify-center items-center gap-4'>
                    {d.desig}
                  </div>
                </div>
                <div className='diss2 flex justify-between items-center gap-4'>
                  <a href={d.insta} className='py-1 -mt-14'>
                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                  </a>
                  <a href={d.linkedin} className='py-1 -mt-14'>
                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-11/12 m-auto'>
        <div className='resp mt-10 flex justify-evenly'>
          {data2img.map((d) => (
            <div
              key={d.name}
              style={{ backgroundImage: `url(${d.img})` }}
              className='hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] w-80 text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'
            >
              <div className="lol h-[110px] w-full absolute bottom-0 bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-0">
                <div>
                  <div className='diss text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
                    {d.name}
                  </div>
                  <div className='diss text-white text-xl font-bold flex justify-center items-center gap-4'>
                    {d.desig}
                  </div>
                </div>
                <div className='diss2 flex justify-between items-center gap-4'>
                  <a href={d.insta} className='py-1 -mt-14'>
                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                  </a>
                  <a href={d.linkedin} className='py-1 -mt-14'>
                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Description() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-10 py-6'>
      <h1 className='ebaja2 ebaja text-5xl font-semibold text-amber-900 mb-8'>Who Are We</h1>
      <p className='w-4/5 text-gray-600 mb-12'>
        <span className="text-red-700 block mb-48"> 
          Motorsports is a dynamic and innovative club dedicated to pushing the boundaries of automotive technology and competitive racing. Our club has a track record of excellence, actively participating in a range of competitions where we showcase our skills and passion for motorsports.
          Through our commitment to excellence and state-of-the-art technologies, we have established ourselves as leaders within the Indian automotive sector. NIT Raipur Motorsports provides a platform for students to pursue their passions and demonstrate their abilities on a broader stage. Join us and experience the thrill of Motorsports at NIT Raipur!
        </span>
      </p>

      <h1 className='ebaja2 ebaja text-5xl font-semibold text-amber-900 mb-16'>What Do We Do</h1>
      <p className='w-4/5 text-gray-600'>
        <span className="text-red-700 block mb-40"> 
          We, at NIT Raipur Motorsports, are a dedicated team of over 85 members who devote our time and expertise to creating robust and durable cars that outperform the competition. Our club is actively involved in two prestigious races eBaja and Formula Bharat, where we showcase our innovation, engineering prowess, and teamwork.
          Through rigorous testing, meticulous design processes, and a relentless pursuit of excellence, we push the boundaries of what’s possible in the realm of Motorsports. Join us on this exciting journey of innovation and competition!
        </span>
      </p>
    </div>
  )
}




//Timeline
const Timeline=({events})=>{
    return (
        <>
            <div className="flex ">
                    {/* <div className="flex">
                        <img src=".\src\components\formulabharat\pics\fbcar.png" alt="" className='img'/>
                    </div> */}
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
<div className="flex justify-center mt-10 space-x-4">
        <button 
          className='px-6 py-3 text-amber-800 bg-gray-200 hover:bg-gray-300 rounded-md' 
          onClick={() => navigateTo('/formulaBharat')}
        >
          Know more about Formula Bharat
        </button>
        <button 
          className='px-6 py-3 text-amber-800 bg-gray-200 hover:bg-gray-300 rounded-md' 
          onClick={() => navigateTo('/eBaja')}
        >
          Know more about e-Baja
        </button>
</div>
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

                    <div className="flex"><img src=".\src\components\formulabharat\pics\formulacar.PNG" alt="" className='img2'/></div>
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
        "KTM 390",
        "43 bsp",
        "9500 RPM",
        "Torque",
        "Acceleration",
        "R13",
        "140 km/h",
        "AISI 1018",
        "Brakes",
        "Phase 1",
        "FB",
        "Formula-1",
        "f-bharat",
        "Chassis",
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
        <div className='resp -mt-10 flex justify-center items-center flex-wrap'>
        {data.map((d) => (
        <div  key={d.name}  style={{backgroundImage: `url(${d.img})`}} 
        className='hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] w-80 text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
        <div className="lol h-[110px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-0">
            <div className=''>
                <div className='diss text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
                    {d.name}
                </div>
                <div className='diss text-white text-xl font-bold flex justify-center items-center gap-4'>
                    {d.desig}
                </div>
            </div>

            <div className='diss2 flex justify-between items-center gap-4'>
                <a href={d.insta} className='py-1 -mt-14'>
                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                </a>

                <a href={d.linkedin} className='py-1 -mt-14'>
                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                </a>
            </div>
        </div>
      </div>
    ))}
  </div>
  <div className='w-11/12 m-auto'>
  <div className='resp mt-10 flex justify-evenly'>
    {data3.map((d) => (
    <div key={d.name} style={{backgroundImage: `url(${d.img})`}} 
    className='hover:shadow-2xl card h-[320px] w-[238px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
    <div className="lol h-[80px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-end items-center transition-opacity duration-300 group-hover:bg-opacity-0">
          <div className='flex flex-col justify-center items-center'>
            <div className='diss text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
              {d.name}
            </div>
            <div className='diss text-gray-50 font-bold flex justify-center items-center gap-4'>
              {d.desig}
            </div>
          </div>
          <div className='diss2 flex justify-between items-center gap-4'>
            <a href={d.insta} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faInstagram} />
            </a>
            <a href={d.linkedin} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
  )
}

//CVpowertrain

function Cvpowertrain() {
  return (
    <div className='w-3/4 m-auto'>
        <div className='resp -mt-10 flex justify-evenly'>
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
    <div className='resp -mt-10 flex justify-evenly'>
    {dataev.map((d) => (
    <div  key={d.name}  style={{backgroundImage: `url(${d.img})`}} 
    className='hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] w-80 text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
    <div className="lol h-[110px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-0">
        <div className=''>
            <div className='diss text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
                {d.name}
            </div>
            <div className='diss text-white text-xl font-bold flex justify-center items-center gap-4'>
                {d.desig}
            </div>
        </div>

        <div className='diss2 flex justify-between items-center gap-4'>
            <a href={d.insta} className='py-1 -mt-14'>
                <FontAwesomeIcon className='icon' icon={faInstagram} />
            </a>

            <a href={d.linkedin} className='py-1 -mt-14'>
                <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </a>
        </div>
    </div>
  </div>
))}
</div>
<div className='w-11/12 m-auto'>
  <div className='resp mt-10 flex justify-evenly'>
    {data2ev.map((d) => (
    <div key={d.name} style={{backgroundImage: `url(${d.img})`}} 
    className='hover:shadow-2xl card h-[320px] w-[238px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
    <div className="lol h-[80px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-end items-center transition-opacity duration-300 group-hover:bg-opacity-0">
          <div className='flex flex-col justify-center items-center'>
            <div className='diss text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
              {d.name}
            </div>
            <div className='diss text-gray-50 font-bold flex justify-center items-center gap-4'>
              {d.desig}
            </div>
          </div>
          <div className='diss2 flex justify-between items-center gap-4'>
            <a href={d.insta} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faInstagram} />
            </a>
            <a href={d.linkedin} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
  )
}



//Steering

function Steering() {
  return (
    <div className='w-11/12 m-auto'>
        <div className='resp -mt-10 flex justify-center items-center flex-wrap'>
        {datasteer.map((d) => (
        <div  key={d.name}  style={{backgroundImage: `url(${d.img})`}} 
        className='hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] w-80 text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
        <div className="lol h-[110px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-0">
            <div className=''>
                <div className='diss text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
                    {d.name}
                </div>
                <div className='diss text-white text-xl font-bold flex justify-center items-center gap-4'>
                    {d.desig}
                </div>
            </div>

            <div className='diss2 flex justify-between items-center gap-4'>
                <a href={d.insta} className='py-1 -mt-14'>
                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                </a>

                <a href={d.linkedin} className='py-1 -mt-14'>
                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                </a>
            </div>
        </div>
      </div>
    ))}
  </div>
  <div className='w-11/12 m-auto'>
  <div className='resp mt-10 flex justify-evenly'>
    {data2steer.map((d) => (
    <div key={d.name} style={{backgroundImage: `url(${d.img})`}} 
    className='hover:shadow-2xl card h-[320px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
    <div className="lol h-[80px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-end items-center transition-opacity duration-300 group-hover:bg-opacity-0">
          <div className='flex flex-col justify-center items-center'>
            <div className='diss text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
              {d.name}
            </div>
            <div className='diss text-gray-50 font-bold flex justify-center items-center gap-4'>
              {d.desig}
            </div>
          </div>
          <div className='diss2 flex justify-between items-center gap-4'>
            <a href={d.insta} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faInstagram} />
            </a>
            <a href={d.linkedin} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
  )
}

//Frames

function Frames() {
  return (
    <div className='w-11/12 m-auto'>
    <div className='resp -mt-10 flex justify-center items-center flex-wrap'>
    {datafr.map((d) => (
    <div  key={d.name}  style={{backgroundImage: `url(${d.img})`}} 
    className='hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] w-80 text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
    <div className="lol h-[110px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-0 ">
        <div className=''>
            <div className='diss text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
                {d.name}
            </div>
            <div className='diss text-white text-xl font-bold flex justify-center items-center gap-4'>
                {d.desig}
            </div>
        </div>

        <div className='diss2 flex justify-between items-center gap-4'>
            <a href={d.insta} className='py-1 -mt-14'>
                <FontAwesomeIcon className='icon' icon={faInstagram} />
            </a>

            <a href={d.linkedin} className='py-1 -mt-14'>
                <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </a>
        </div>
    </div>
  </div>
))}
</div>
<div className='w-11/12 m-auto'>
  <div className='resp mt-10 flex justify-evenly'>
    {data2fr.map((d) => (
    <div key={d.name} style={{backgroundImage: `url(${d.img})`}} 
    className='hover:shadow-2xl card h-[320px] w-[238px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
    <div className="lol h-[80px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-end items-center transition-opacity duration-300 group-hover:bg-opacity-0">
          <div className='flex flex-col justify-center items-center'>
            <div className='diss text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
              {d.name}
            </div>
            <div className='diss text-gray-50 font-bold flex justify-center items-center gap-4'>
              {d.desig}
            </div>
          </div>
          <div className='diss2 flex justify-between items-center gap-4'>
            <a href={d.insta} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faInstagram} />
            </a>
            <a href={d.linkedin} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

//Suspension

function Suspension() {
  return (
    <div className='w-11/12 m-auto'>
    <div className='resp -mt-10 flex justify-center items-center flex-wrap'>
        {datasus.map((d) => (
            <div key={d.name} style={{ backgroundImage: `url(${d.img})` }}
                className='hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] w-80 text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
                <div className="lol h-[110px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-0">
                    <div className=''>
                        <div className='diss text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
                            {d.name}
                        </div>
                        <div className='diss text-white text-xl font-bold flex justify-center items-center gap-4'>
                            {d.desig}
                        </div>
                    </div>

                    <div className='diss2 flex justify-between items-center gap-4'>
                        <a href={d.insta} className='py-1 -mt-14'>
                            <FontAwesomeIcon className='icon' icon={faInstagram} />
                        </a>

                        <a href={d.linkedin} className='py-1 -mt-14'>
                            <FontAwesomeIcon className='icon' icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <div className='w-11/12 m-auto'>
  <div className='resp mt-10 flex justify-evenly'>
    {data2sus.map((d) => (
    <div key={d.name} style={{backgroundImage: `url(${d.img})`}} 
    className='hover:shadow-2xl card h-[320px] w-[238px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
    <div className="lol h-[80px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-end items-center transition-opacity duration-300 group-hover:bg-opacity-0">
          <div className='flex flex-col justify-center items-center'>
            <div className='diss text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
              {d.name}
            </div>
            <div className='diss text-gray-50 font-bold flex justify-center items-center gap-4'>
              {d.desig}
            </div>
          </div>
          <div className='diss2 flex justify-between items-center gap-4'>
            <a href={d.insta} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faInstagram} />
            </a>
            <a href={d.linkedin} className='py-1 -mt-14'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
  ))}
</div>
</div>
</div>
  )
}

//Mentor

function Mentor() {
  return (
    <div className='w-11/12 m-auto'>
        <div className='resp mt-10 flex justify-between'>
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
        <div className='resp mt-32 flex justify-evenly'>
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
        <div className="resp -mt-20 flex justify-around">
            <div><h1 className='text-4xl my-10 exe'>Brakes</h1>
                <ul>
                    <li>Milind Kumawat</li>
                    <li>Krishna Agarwal</li>
                    <li>Tanmay Gupta</li>
                </ul>
            </div>
            <div><h1 className='hi text-4xl my-10 exe'>Powertrain</h1>
                <ul>
                    <li>Nityanand Shukla</li>
                    <li>S Shruti</li>
                    <li>Pranay Shrivastava</li>
                    <li>M Sharath Kumar</li>
                </ul>
            </div>
            <div><h1 className='text-4xl my-10 exe'>Frames</h1>
                <ul>
                    <li>Sachin Kumar Sahu</li>
                    <li>Harsh Shrivastava</li>
                    <li>KV Rajiv Kumar</li>
                    <li>Malvika Krishna</li>
                </ul>
            </div>
        </div>
        <div className="resp flex justify-evenly my-10">
            <div><h1 className='text-4xl my-10 exe'>Steering</h1>
                <ul>
                    <li>Sankalp Gupta</li>
                    <li>Priyansh Yadav</li>
                    <li>Shraddha Agrawal</li>
                </ul>
            </div>
            <div><h1 className='text-4xl my-10 exe'>Suspension</h1>
                <ul>
                    <li>Saral Pandey</li>
                    <li>Vanshika Jaiswal</li>
                    <li>Saksham Tikariha</li>
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
                    {/* <TextShpere /> */}
                    <Description />
                </div>

                <Timeline events={events} />
{/* 
                <h1 className='head text-6xl flex justify-center items-center pb-28 pt-36'>OUR CAR</h1>
                <Ourcar events={info}/> */}

                {/* <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>MEET OUR TEAM</h1> */}
                {/* <Imagecard /> */}

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Web Development</h1>
                <Frames />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Sponsorship</h1>
                <Suspension />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Documentation</h1>
                <Steering />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Design</h1>
                <Evpowertrain />

                {/* <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Brakes</h1>
                <Brakes />
                
                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36 my-10'>Executives</h1>
                <Executives/> */}
            </div>
        </main>
    </>
  )
}

export default App;

//Timeline-1 Data about Phases
let events = [
  {
    heading: "STEP 1",
    subHeading: "Alumni Meet",
    description: "NIT RAIPUR has a vast alumni network and conducts an alumni meet every year in which more than 300+ alumni holding senior positions in various companies visit our campus. We conduct a car showcasing event during the meet and also have an interactive session with them.",
    image: "event1.jpg",
    direction: "left",
  },
  {
    heading: "STEP 2",
    subHeading: "Workshops at AAVARTAN",
    description: "We conduct workshops and mini-events related to automobiles in AAVARTAN (tech fest).",
    image: "event2.jpg",
    direction: "right",
  },
  {
    heading: "STEP 3",
    subHeading: "Vehicle Showcasing at ECLECTIKA",
    description: "Showcasing our VEHICLE and giving the experience of driving in ECLECTIKA, Central India’s largest fest having a footfall of more than 30k+.",
    image: "event3.jpg",
    direction: "left",
  },
  {
    heading: "STEP 4",
    subHeading: "Road Shows",
    description: "Various road shows in front of our college main building are conducted by showcasing our vehicle, attracting a total of more than 1.5k+ local crowd and students along with the faculties.",
    image: "event4.jpg",
    direction: "right",
  },
  {
    heading: "STEP 5",
    subHeading: "Workshops Throughout the Year",
    description: "Our club regularly conducts workshops throughout the year in NIT Raipur and nearby colleges.",
    image: "event5.jpg",
    direction: "left",
  },
];

//Timeline-2 Data about Car made by the club

let info = [
  {
      subHeading : "KTM 390 (2013)",
      heading: "Engine",
      direction: "left"

  },
  {
      subHeading : "140 km/h",
      heading: "Top Speed",
      direction: "right"

  },
  {
      subHeading : "43 bsp at 9500 rpm",
      heading: "Power",
      direction: "left"

  },
  {
    subHeading : "AISI 1018",
    heading: "Material of chassis",
    direction: "right"

  },
  {
    subHeading : "250 kg",
    heading: "Weight",
    direction: "left"
  },
  {
    subHeading : "R13",
    heading: "Tyres",
    direction: "right"

},
  
]

const data=[
  {
      name:"Arpit Yadav",
      desig:"Domain Head",
      img:"./src/components/formulabharat/pics/arpit.jpeg",
      insta:"https://www.instagram.com/_._arpittttt._?igsh=MXZsN2Z1c2ZqMjdoZw%3D%3D&utm_source=qr",
      linkedin:"https://www.linkedin.com/in/arpit-yadav-28946b26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  
]
const data3 = [
  {
      name:"Shambhavi",
      desig:"Member",
      img:"./src/components/formulabharat/pics/shambhavi.JPG",
      insta:"https://www.instagram.com/heyy__shambhavi__?igsh=ZHV1YjRha2dybDVmc:\Users\spars\Downloads\shambhavi.JPG",
      linkedin:"https://www.linkedin.com/in/shambhavi-sam-67574624b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Kolagani Sathvik",
      desig:"Member",
      img:"./src/components/formulabharat/pics/kolagani.jpg",
      insta:"https://www.instagram.com/s_a_t_h_v_i_k____v?igsh=MW1sZThjdDNweWc5bA==",
      linkedin:"https://www.linkedin.com/in/kolagani-sathvik-355717259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }

]

//EVpowertrain

const dataev=[
  {
    name: "Mridul Bansal",
    desig: "Head",
    img: "./src/components/about/about/MridulBansal.jpeg",
    insta: "https://www.instagram.com/mridszx?igsh=MWE0MXUyc29iZnc2dQ==",
    linkedin: "https://www.linkedin.com/in/mridul-bansal-915b00261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
]

const data2ev=[
  {
    name: "Pratibha ",
    desig: "Member",
    img: "./src/components/about/about/PratibhaSikheriya.jpg",
    insta: "https://www.instagram.com/chikki_.19/",
    linkedin: "https://www.linkedin.com/in/pratibha-sikheriya-b8142a279/"
  },
  {
    name: "Megha Rathi",
    desig: "Member",
    img: "./src/components/about/about/MeghaRathi.jpg",
    insta: "#",
    linkedin: "#"
  },
  {
    name: "Anshul Wasnik",
    desig: "Member",
    img: "./src/components/about/about/AnshulWasnik.jpg",
    insta: "#",
    linkedin: "https://www.linkedin.com/in/anshul-wasnik-69455a25b/"
  },
  {
    name: "Aman Sharma",
    desig: "Member",
    img: "./src/components/about/about/AmanSharma.jpg",
    insta: "https://www.instagram.com/ittz__aman_",
    linkedin: "https://in.linkedin.com/in/aman-sharma-874a7b252"
  }
]

//Steering

const datasteer=[
  {
    name: "Rahul Singh",
    desig: "Head",
    img: "./src/components/about/about/RahulKumarSingh.jpeg",
    insta: "#",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-singh-b88636231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]

const data2steer=[
  {
    name: "Prakarsh Gupta",
    desig: "Member",
    img: "./src/components/about/about/PrakarshGupta.jpg",
    insta: "https://www.instagram.com/prakarshgupta_21",
    linkedin: "https://www.linkedin.com/in/prakarsh-gupta-a75b67279/"
  },
  {
    name: "Gaurab Kumar",
    desig: "Head",
    img: "./src/components/about/about/GaurabKumar.jpeg",
    insta: "#",
    linkedin: "https://linkedin.com/in/gaurav-kumar-b76122251/"
  },
  {
    name: "Vighnesh Gupta",
    desig: "Member",
    img: "./src/components/about/about/VighneshGupta.jpg",
    insta: "https://www.instagram.com/vigh.nesh_._",
    linkedin: "https://www.linkedin.com/in/vighnesh-gupta-1329b92a5/"
  }
]

//Frames

const datafr=[
  {
    name: "Sparsh Jaggi",
    desig: "Head",
    img: "./src/components/about/about/SparshJaggi.jpeg",
    insta: "https://www.instagram.com/sparshjaggi?igsh=ZHVpeHNwN2txcnZm&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/sparsh-jaggi-1aa263257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  }]

const data2fr=[
  {
    name: "Aman Kumar",
    desig: "Member",
    img: "./src/components/about/about/AmanKumar.JPG",
    insta: "https://www.instagram.com/amanwhoooo",
    linkedin: "https://www.linkedin.com/in/amankumar25"
  },
  {
    name: "Anshdeep",
    desig: "Member",
    img: "./src/components/about/about/Anshdeepshrivastava.jpg.jpg",
    insta: "#",
    linkedin: "#"
  },
  {
    name: "Leora",
    desig: "Member",
    img: "./src/components/about/about/LeoraSaharia.jpg",
    insta: "https://www.instagram.com/leorasaharia/",
    linkedin: "https://www.linkedin.com/in/leora-saharia-9403681a7/"
  },
  {
    name: "Vivek Verma",
    desig: "Member",
    img: "./src/components/about/about/VivekVerma.jpeg",
    insta: "https://www.instagram.com/m_i_vivek/",
    linkedin: "https://www.linkedin.com/in/vivek-verma-b7701929a/"
  },
  {
    name: "Ayush Mishra",
    desig: "Member",
    img: "./src/components/about/about/AyushMishra.jpg",
    insta: "#",
    linkedin: "https://www.linkedin.com/in/ayushmishra-profile"
  }
]

//Suspension

const datasus=[
  {
    name: "Rishi Singh",
    desig: "Head",
    img: "./src/components/about/about/RishiSinghRajput.jpg",
    insta: "https://www.instagram.com/shiri_singha/?igsh=MXNlZTY0d3JoNjA0Ng%3D%3D",
    linkedin: "https://www.linkedin.com/in/rishi-singh-aa5387264?trk=contact-info"
  },
  {
    name: "Ritik Pathak",
    desig: "Head",
    img: "./src/components/about/about/RitikPathak.jpg",
    insta: "https://www.instagram.com/ritik_gear?igsh=bDYzbW5zaGpuaWds",
    linkedin: "https://www.linkedin.com/in/ritik-pathak-31b865247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]
const data2sus=[
  {
    name: "Ashish Jangid",
    desig: "Member",
    img: "./src/components/about/about/AshishJangid.jpg",
    insta: "https://www.instagram.com/ashish_ramchandra1224",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-jangid-a39534293/"
  },
  {
    name: "Rishabh Bhati",
    desig: "Member",
    img: "./src/components/about/about/RishabhBhati.jpg",
    insta: "#",
    linkedin: "https://www.linkedin.com/in/rishabh-bhati-16276a26b/"
  },{
    name: "Shikha Yadav",
    desig: "Member",
    img: "./src/components/about/about/ShikhaYadav.jpg",
    insta: "https://www.instagram.com/ahkihs_19",
    linkedin: "https://www.linkedin.com/in/shikha-yadav-3830902b1/"
  },
  {
    name: "Astha Jaiswal",
    desig: "Member",
    img: "./src/components/about/about/AsthaJaiswal.jpg",
    insta: "https://www.instagram.com/_astha_jaiswal",
    linkedin: "https://www.linkedin.com/in/astha-jaiswal-10b7b528a/"
  },
  {
    name: "Ritika Jain",
    desig: "Member",
    img: "./src/components/about/about/RitikaJain.jpg",
    insta: "#",
    linkedin: "#"
  },
  {
    name: "Kundan Rathi",
    desig: "Member",
    img: "./src/components/about/about/KundanRathi.jpg",
    insta: "https://www.instagram.com/kundan_rathi.11",
    linkedin: "https://www.linkedin.com/in/kundan-rathi-99a896287/"
  }
]

//Caps

const dataimg = [
  
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
    name: 'Om Prakash',
    desig: 'Team Manager',
    img: "./src/components/formulabharat/pics/om.jpg",
    insta: 'https://www.instagram.com/_.axelx_?igsh=eHo5M3J3YXdrNXJw',
    linkedin: "https://www.linkedin.com/in/om-prakash-sahoo-60bb46257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

  }
]
const data2img = 
[
    {
        key: '4',
        name: 'Rishi Singh',
        desig: 'Treasurer',
        img: "./src/components/formulabharat/pics/rishi.jpg",
        insta: 'https://www.instagram.com/shiri_singha?igsh=MXNlZTY0d3JoNjA0Ng==',
        linkedin: "https://www.linkedin.com/in/rishi-singh-aa5387264?trk=contact-info"
  
    }
  ]