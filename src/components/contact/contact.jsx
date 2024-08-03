import "../globalStyles.css";
import gravity from '../assets/logos/sponsors/gravityWorkshop.png';
import car from '../assets/logos/sponsors/carShringar.jpg';
import gulf from '../assets/logos/sponsors/gulf.png';
import solidworks from '../assets/logos/sponsors/solidworks.png';
import ansys from '../assets/logos/sponsors/ansys.png';
import lotus from '../assets/logos/sponsors/lotus.png';
import ContactUs from './contact-us';

function Contact() {
  return (
    <>
    <div style={{width: "100%",
  backgroundImage:"linear-gradient(var(--dustyWhite),var(--black-bean))"}} className=''>
      <div className=" flex flex-col items-center md:py-28 md:px-40  py-28">
        <div className=" ">
          <img  className=" md:h-52 px-4" src={gravity}></img>
        </div>
        <div className=" w-full gap-4 flex justify-center font-albulaHeavy">
          <p>T i t l e</p><p>S p o n s o r</p>
        </div>
        <p style={{ maxWidth: "800px" }} className=" font-albula text-center text-lg pt-6 sm:px-14 px-4">The primary objective of this workshop is to provide bespoke car customization based on customer requirements. Our comprehensive services include mechanical work, air conditioning maintenance, dent and paint repair, electrical work, and a variety of modifications. We are dedicated to delivering high-quality, personalized solutions to ensure each vehicle meets the unique preferences and standards of our clients.</p>
      </div>

      <div className='flex flex-col text-center mb-10'>
        <p className='font-albulaHeavy  sm:text-5xl text-3xl'>Gold Sponsor</p>
        <div className=" flex md:flex-row flex-col md:justify-evenly items-center py-8 gap-5">
          <div className="sm:pt-10 pt-0">
            <img width={"360px"} src={car} alt="Car Shringar" className="w-80" />
            <p className="text-2xl font-poppins font-bold">Car Shringar</p>
          </div>
          <div className="">
            <img src={gulf} alt="Gulf Oil" className=" h-48" />
            <p className="text-2xl font-poppins font-bold">Gulf Oil</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col text-center justify-center gap-8 pt-10'>
        <p className='font-albulaHeavy sm:text-5xl text-3xl'>Software Partners</p>
        <div className="flex md:flex-col flex-col gap-8">
          <div className='flex flex-col md:flex-row items-center justify-evenly gap-10'>
            <div className="">
              <img width={"500px"} src={solidworks} alt="Solidworks" className=" px-4" />
              <p className="text-2xl font-poppins font-bold">Solidworks</p>
            </div>
            <div className="">
              <img width={"500px"} src={ansys} alt="Ansys" className="" />
              <p className="text-2xl font-poppins font-bold ">Ansys</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 ">
            <img width={"200px"} src={lotus} alt="Lotus" className=" size-60 md:size-36" />
            <p className="text-2xl font-poppins font-bold">Lotus</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center mt-24 pb-40 items-center">
        <p style={{ color: "var(--black)" }} className=" sm:text-5xl text-3xl font-albulaHeavy px-4">Message To Sponsors</p>
        <p style={{ maxWidth: "800px", color: "var(--dustyWhite)" }} className="font-albula text-center sm:text-lg pt-6 sm:px-12 text-md px-4">At the Motorsports Club of NIT Raipur, we are driven by passion, innovation, and excellence in automotive engineering. Our team comprises talented and dedicated students who consistently push the boundaries of design and performance. By sponsoring us, you will be aligning your brand with future leaders in technology and engineering, gaining visibility at national and international competitions. Your support will not only help us enhance our vehicle designs and performance but also foster the development of critical skills in our members. Together, we can pave the way for groundbreaking advancements in motorsports. Join us in this exhilarating journey and be a part of our success story.</p>
        <p style={{ color: "White" }} className=" py-4 text-3xl font-semibold ">Download our Brochure</p>
        <a href="https://drive.google.com/file/d/1O17bcGZmEcvGEGEfKBwF5a0UOLpJmiGm/view?pli=1"><button className=" py-3 px-5 text-lg font-bold bg-tawny hover:bg-gray-500" style={{backgroundColor: "var(--tawny)"}}>Download</button></a>
      </div>
      
      <ContactUs />
    </div>
    </>
  )
}

export default Contact;
