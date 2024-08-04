import "../globalStyles.css";
// import gravity from '../assets/logos/sponsors/gravityWorkshop.png';
import car from '../assets/logos/sponsors/carShringar.jpg';
import gulf from '../assets/logos/sponsors/gulf.png';
// import solidworks from '../assets/logos/sponsors/solidworks.png';
import gravity from '../assets/logos/sponsors/gravityWorkshopSVG.svg';
import solidworks from '../assets/logos/sponsors/solidworksSVG.svg';
import ansys from '../assets/logos/sponsors/ansys.png';
import lotus from '../assets/logos/sponsors/lotus.png';
import ContactForm from './contactForm';

function Contact() {
  return (
    <>
    <div style={{width: "100%",
      backgroundColor:"var(--modestbrown)"}} className=''>
      <div className=" flex flex-col items-center md:py-28 md:px-40  py-28">
        <div className=" ">
          <img  className=" md:h-52 px-4" src={gravity}></img>
        </div>
        <div style={{color:"rgb(27,117,172"}} className=" w-full flex justify-center font-albulaHeavy text-4xl text-deepTawny">
          Gravity Workshop
        </div>
        <div className=" w-full  text-2xl flex justify-center font-albulaHeavy">
          <p>Title Sponsor</p>
        </div>

        <p style={{ maxWidth: "800px" }} className=" font-albula text-lg text-[#5d3a33] text-center pt-6 sm:px-14 px-4">The primary objective of this workshop is to provide bespoke car customization based on customer requirements. Our comprehensive services include mechanical work, air conditioning maintenance, dent and paint repair, electrical work, and a variety of modifications. We are dedicated to delivering high-quality, personalized solutions to ensure each vehicle meets the unique preferences and standards of our clients.</p>
      </div>

      <div className='flex flex-col text-center mb-10'>
        <p className='font-albulaHeavy  sm:text-4xl text-3xl'>Gold Sponsor</p>
        <div className=" flex md:flex-row flex-col md:justify-evenly items-center py-8 gap-5">
          <div className="">
            <img src={car} alt="Car Shringar" className="h-40" />
            <p className="text-2xl pt-5 font-albulaHeavy">Car Shringar</p>
          </div>
          <div className="">
            <img  src={gulf} alt="Gulf Oil" className="h-40" />
            <p className="text-2xl pt-5 font-albulaHeavy">Gulf Oil</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col text-center justify-center gap-8 pt-10'>
        <p className='font-albulaHeavy sm:text-4xl text-3xl'>Software Partners</p>
        <div className="flex md:flex-col flex-col gap-8">
          <div className='flex flex-col md:flex-row items-center justify-evenly gap-10'>
            <div className="">
              <img width={"500px"} src={solidworks} alt="Solidworks" className=" px-4 " />
              <p className="text-2xl font-albulaHeavy">Solidworks</p>
            </div>
            <div className="">
              <img width={"500px"} src={ansys} alt="Ansys" className="" />
              <p className="text-2xl font-albulaHeavy ">Ansys</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img width={"200px"} src={lotus} alt="Lotus" className=" size-60 md:size-36" />
            <p className="text-2xl font-albulaHeavy">Lotus</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center mt-24 pb-40 items-center">
        <p style={{ color: "var(--black)" }} className=" sm:text-5xl text-3xl font-albulaHeavy px-4">Message To Sponsors</p>
        <p style={{ maxWidth: "800px" }} className=" font-albula text-lg text-[#5d3a33] text-center sm:text-lg pt-6 sm:px-12 text-md px-4">At the Motorsports Club of NIT Raipur, we are driven by passion, innovation, and excellence in automotive engineering. Our team comprises talented and dedicated students who consistently push the boundaries of design and performance. By sponsoring us, you will be aligning your brand with future leaders in technology and engineering, gaining visibility at national and international competitions. Your support will not only help us enhance our vehicle designs and performance but also foster the development of critical skills in our members. Together, we can pave the way for groundbreaking advancements in motorsports. Join us in this exhilarating journey and be a part of our success story.</p>
        <p style={{ color: "var(rgb(106, 42, 0))" }} className=" py-4 text-3xl font-semibold ">Download our Brochure</p>
        <a href="https://drive.google.com/file/d/1O17bcGZmEcvGEGEfKBwF5a0UOLpJmiGm/view?pli=1"><button className=" py-3 px-5 text-lg font-bold bg-tawny hover:bg-orange-600">Download</button></a>
      </div>
      
      <ContactForm />
    </div>
    </>
  )
}

export default Contact;
