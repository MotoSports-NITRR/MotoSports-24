import '../globalStyles.css'
import React from 'react';
import carImgOne from '../assets/images/finalizedCarImg/homeCarOne.png'
import CountUp from 'react-countup';
import SpeedBanner from './speedBanner/speedBanner';

function Home() {
    return (
        <>
            <main className='flex flex-col justify-between items-center bg-modestBrown'>
                <div id='introDiv' className="w-85vw flex flex-col justify-between items-center lg:flex-row lg:justify-evenly lg:items-center box-border lg:top-32">
                    <div id='introTextDiv' className='flex flex-col justify-evenly items-center px-6 xsm:px-10 sm:py-2 w-375px xsm:w-450px sm:w-550px md:w-675px lg:w-400px 1.5lg:px-6 1.5lg:py-6 1.5lg:w-475px xl:w-625px 2xl:w-700px h-500'>
                        <div id='introHeading' className='text-4xl sm:text-5xl xl:text-6xl font-albulaHeavy text-blackbean'>Official <br />
                            <span className="text-tawny">Motosports Club</span> of <br />
                            <span className="text-tawny">NIT, Raipur</span>
                            <p className='text-base sm:text-xl font-poppins font-medium mt-4 text-mutedBlack'>Unleashing Adrenaline: The Heart-Pounding World of Motorsport!</p>
                        </div>

                        <div id='introStatDiv' className='flex justify-between items-start w-full lg:mr-7 xl:mr-16'>
                            <div id='statBlockOne' className=' flex flex-col justify-between items-center w-150'>
                                <p className='font-poppins font-bold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl text-brown'>
                                    <CountUp start={0} end={85} duration={4} delay={0}></CountUp>
                                    <span>+</span>
                                </p>
                                <p className='font-poppins text-base sm:text-xl text-blackbean text-center'>team members</p>
                            </div>
                            <div id='statBlockTwo' className=' flex flex-col justify-between items-center w-150'>
                                <p className='font-poppins font-bold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl text-brown'>
                                    <CountUp start={0} end={1000} duration={3} delay={0}></CountUp>
                                    <span>+</span>
                                </p>
                                <p className='font-poppins text-base sm:text-xl text-blackbean text-center'>hours of hardwork</p>
                            </div>
                            <div id='statBlockThree' className='flex flex-col justify-between items-center w-150'>
                                <p className='font-poppins font-bold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl text-brown'>
                                    <CountUp start={0} end={10} duration={3.5} delay={0}></CountUp>
                                    <span>+</span>
                                </p>
                                <p className='font-poppins text-base sm:text-xl text-blackbean text-center'>years of experience</p>
                            </div>
                        </div>
                    </div>

                    <img src={carImgOne} alt="Motosport Car Image One" className='px-2 py-2 w-500px lg:w-475px xl:w-550px 2xl:w-675px 1.6xl:w-700px xl:px-5 xl:py-5' />
                </div>

                <div id='speedBannerHolder' className='mt-0 md:-mt-20'>
                    <SpeedBanner />
                </div>
            </main>
        </>
    )
}
  
export default Home



