import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect } from 'react';
import TagCloud from "TagCloud";
import './fbStyles.css';

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


//Descrition
function Description() {
  return (
    <div className='flex flex-col justify-center h-800'>
        <h1 className='ebaja2 ebaja ml-10 text-amber-800 mb-20'>Formula Bharat</h1>
        <p className='w-4/5 ml-10 desc text-gray-600'>
            <span className="text-red-700"> Formula Bharat is an Indian Formula Student-style </span>
            engineering design competition in which students from colleges and universities all over the country, compete with a life-size formula-style vehicle in areas of engineering design, overall cost, marketability and dynamic performance. The series replicates the global student Formula series hosted in around 
            <span className="text-red-700"> 11 countries  </span> per year.
            The purpose of this competition is to encourage students to gain hands-on practical experience, while applying engineering theories studied in the classroom. In addition, students learn the art of management and teamwork, which are essential skills required in the 
            <span className="text-red-700"> real world. </span> These student teams are required to build a new vehicle from scratch year-after-year and seek sponsorship and donations by their own means to fund the project.
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
                        <img src=".\src\components\formulabharat\pics\fbcar.png" alt="" className='img'/>
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
                    <TextShpere />
                    <Description />
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

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>PowerTrain</h1>
                <Evpowertrain />

                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>Brakes</h1>
                <Brakes />
                
                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36 my-10'>Executives</h1>
                <Executives/>
            </div>
        </main>
    </>
  )
}

export default App;

//Timeline-1 Data about Phases
let events = [
  {
      heading : "PHASE 1",
      subHeading: "Quiz Session, Formula Bharat 2025",
      description: "The first leg of the event is Phase 1-Quiz Session which examines participant teams on the basis of the Rule Book and assigns Car number based on ranking",
      direction: "left"

  },
  {
      heading : "PHASE 2",
      subHeading: "Static Events",
      description: "The second leg is based on Static Events which involve presenting Vehicle Design Reports, a Business Presentation, and Cost and Manufacturing Reports.",
      direction: "right"

  },
  {
      heading : "PHASE 3",
      subHeading: "Physical Round, BAJA SAEINDIA 2025",
      description: "The final leg of the event is Phase 3, the Physical round, which include Technical Inspection, Skidpad, Acceleration, Autocross, and Endurance. ",







      direction: "left"

  },
  
]

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
        name:"Ajay Kashyap",
        desig:"Domain Head",
        img:"./src/components/eBaja/pics/vice3.jpg",
        insta:"",
        linkedin:"https://www.linkedin.com/in/ajaykashyap92025?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
]

const data2ev=[
    {
        name:"Vaishnavi Padole",
        desig:"Member",
        img:"./src/components/formulabharat/pics/vaishnavi.jpg",
        insta:"",
        linkedin:"https://www.linkedin.com/in/vaishnavi-padole-b41ab0250"
    },
  {
      name:"Sachin Choubey",
      desig:"Member",
      img:"./src/components/formulabharat/pics/sachin.jpg",
      insta:"https://www.instagram.com/sachin_choubey11?igsh=MTFtNGkycGM0NmVlYg==",
      linkedin:"https://www.linkedin.com/in/sachin-choubey-bb7558256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]

//Steering

const datasteer=[
  {
      name:"Avish Srivastava",
      desig:"Domain Head",
      img:"./src/components/formulabharat/pics/avish.jpg",
      insta:"https://www.instagram.com/avish_jarvis_potter?igsh=a2F0dXplMG0wc3V4",
      linkedin:"https://www.linkedin.com/in/avish-kumar-shrivastava-0702ajp"
  },
]

const data2steer=[
  {
      name:"Devanshu Satapathy",
      desig:"Member",
      img:"./src/components/formulabharat/pics/devanshu.jpg",
      insta:"https://www.instagram.com/dicctator.rr?igsh=MTlja2R5dW02eHJmYg==",
      linkedin:"https://www.linkedin.com/in/devanshu-satapathy-72323a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Honumant Nethanj",
      desig:"Member",
      img:"./src/components/formulabharat/pics/honumant.jpeg",
      insta:"https://www.instagram.com/honumant_25?igsh=OGF5M3Zvemc3cmt5",
      linkedin:"https://www.linkedin.com/me?trk=p_mwlite_me_notifications-secondary_nav"
  }
]

//Frames

const datafr=[
  {
      name:"Om Prakash",
      desig:"Domain Head",
      img:"./src/components/formulabharat/pics/om.jpg",
      insta: 'https://www.instagram.com/_.axelx_?igsh=eHo5M3J3YXdrNXJw',
    linkedin: "https://www.linkedin.com/in/om-prakash-sahoo-60bb46257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]

const data2fr=[
  {
      name:"Abhiroop",
      desig:"Member",
      img:"./src/components/formulabharat/pics/abhiroop.jpg",
      insta:"https://www.instagram.com/iam_sharmaji7?igsh=MTdpem9uZWpveXZ3cQ==",
      linkedin:"https://www.linkedin.com/in/abhiroop-sharma-75a46926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
  
      name:"Anisha Sharma",
      desig:"Member",
      img:"./src/components/formulabharat/pics/anisha.jpg",
      insta:"",
      linkedin:"https://www.linkedin.com/in/anisha-sharma29?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
      name:"Navneet Kumar",
      desig:"Member",
      img:"./src/components/formulabharat/pics/navneet.jpg",
      insta:"https://www.instagram.com/navneet_one8/",
      linkedin:"https://www.linkedin.com/in/navneet-kumar-pandey-b8036828a"
  }
]

//Suspension

const datasus=[
  {
      name:"Divek Daheriya",
      desig:"Domain Head",
      img:"./src/components/formulabharat/pics/divek.jpg",
      insta:"https://www.instagram.com/diveksinghdahariya?igsh=MTRlNWUwdjdyajAydw==",
      linkedin:"https://www.linkedin.com/in/divek-dahariya-886371180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]
const data2sus=[
  {
      name:"Rishi Singh",
      desig:"Member",
      img:"./src/components/formulabharat/pics/rishi.jpg",
      insta: 'https://www.instagram.com/shiri_singha?igsh=MXNlZTY0d3JoNjA0Ng==',
      linkedin: "https://www.linkedin.com/in/rishi-singh-aa5387264?trk=contact-info"
  },
  {
      name:"Deepak Shukla",
      desig:"Member",
      img:"./src/components/formulabharat/pics/deepak.jpg",
      insta:"https://www.instagram.com/_deepakshukla_04?igsh=NDk1eHYyYmN3ZzIw",
      linkedin:"https://www.linkedin.com/in/deepak-shukla-1b1b4425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]

//Caps

const dataimg = [
  {
      name:"Abhiroop",
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