import React from 'react';
import { Link } from 'react-router-dom';

const backgroundStyle = {
  background: 'linear-gradient(to bottom, #fff1de, #2f1000)',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 0,
  padding: '50px 0'
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\' viewBox=\'0 0 100 100\'%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'5\' fill=\'%23cccccc\' fill-opacity=\'0.1\' text-anchor=\'middle\' dominant-baseline=\'central\' font-family=\'Arial\'%3EMotorsports%3C/text%3E%3C/svg%3E")',
  backgroundRepeat: 'repeat',
  opacity: 0.2
};

const teamMembers = {
  sponsorship: [
    { name: "Rishi Singh Rajput", image: "RishiSinghRajput.jpg" },
    { name: "Ashish Jangid", image: "AshishJangid.jpg" },
    { name: "Rishabh Bhati", image: "RishabhBhati.jpg" },
    { name: "Shikha Yadav", image: "ShikhaYadav.jpg" },
    { name: "Astha Jaiswal", image: "AsthaJaiswal.jpg" },
    { name: "Ritika Jain", image: "RitikaJain.jpg" },
    { name: "Kundan Rathi", image: "KundanRathi.jpg" }
  ],
  documentation: [
    { name: "Rahul Kumar Singh (Head)", image: "RahulKumarSingh.jpg" },
    { name: "Gaurab Kumar (Head)", image: "GaurabKumar.jpg" },
    { name: "Prakarsh Gupta", image: "PrakarshGupta.jpg" },
    { name: "Vignesh Gupta", image: "VigneshGupta.jpg" }
  ],
  webDevelopment: [
    { name: "Sparsh Jaggi (Head)", image: "SparshJaggi.jpg" },
    { name: "Aman Kumar", image: "AmanKumar.jpg" },
    { name: "Ayush Mishra", image: "AyushMishra.jpg" },
    { name: "Leora Saharia", image: "LeoraSaharia.jpg" },
    { name: "Vivek Verma", image: "VivekVerma.jpg" }
  ],
  design: [
    { name: "Mridul Bansal (Head)", image: "MridulBansal.jpg" },
    { name: "Pratibha Sikheriya", image: "PratibhaSikheriya.jpg" },
    { name: "Megha Rathi", image: "MeghaRathi.jpg" },
    { name: "Anshul Wasnik", image: "AnshulWasnik.jpg" },
    { name: "Aman Kumar Sharma", image: "AmanKumarSharma.jpg" }
  ]
};

function About() {
  return (
    <>
      <div className="about-page" style={backgroundStyle}>
        <div style={overlayStyle}></div>
        <div className="container mx-auto px-4 relative">
          <section className="who-are-we text-center mb-20">
            <h1 className="font-albulaHeavy text-5xl text-[#23120B] mt-10">WHO ARE WE?</h1>
            <p className="font-albula text-lg text-[#5d3a33] mt-5 mx-auto w-3/5">
              Motorsports is a dynamic and innovative club dedicated to pushing the boundaries of automotive technology and competitive racing. Our club has a track record of excellence, actively participating in a range of competitions where we showcase our skills and passion for motorsports. Through our commitment to excellence and state-of-the-art technologies, we have established ourselves as leaders within the Indian automotive sector. NIT Raipur Motorsports provides a platform for students to pursue their passions and demonstrate their abilities on a broader stage. Join us and experience the thrill of Motorsports at NIT Raipur!
            </p>
          </section>
          
          <section className="what-do-we-do text-center mb-20">
            <h1 className="font-albulaHeavy text-5xl text-[#23120B] mt-10">WHAT DO WE DO?</h1>
            <p className="font-albula text-lg text-[#5d3a33] mt-5 mx-auto w-3/5">
              We, at NIT Raipur Motorsports, are a dedicated team of over 85 members who devote our time and expertise to creating robust and durable cars that outperform the competition. Our club is actively involved in two prestigious races eBaja and Formula Bharat, where we showcase our innovation, engineering prowess, and teamwork. Through rigorous testing, meticulous design processes, and a relentless pursuit of excellence, we push the boundaries of what’s possible in the realm of Motorsports. Join us on this exciting journey of innovation and competition!
            </p>
            <div className="mt-10">
              <Link to="/eBaja" className="btn bg-[#e07b39] text-white py-2 px-4 rounded-full mr-4 hover:bg-[#4a2c2a]">eBaja</Link>
              <Link to="/formulaBharat" className="btn bg-[#e07b39] text-white py-2 px-4 rounded-full mr-4 hover:bg-[#4a2c2a]">f - Bharat</Link>
            </div>
          </section>
          
          <section className="meet-the-team text-center mb-20">
            <h1 className="font-albulaHeavy text-5xl text-[#23120B] mt-10">MEET THE TEAM</h1>
            <div className="team-section mb-10">
              <h2 className="font-albulaHeavy text-3xl text-[#23120B] mt-10">Sponsorship</h2>
              <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
                {teamMembers.sponsorship.map((member, index) => (
                  <div key={index} className="team-member bg-white p-4 rounded-lg shadow-lg">
                    <img src={`/src/components/assets/images/about/${member.image}`} alt={member.name} className="rounded-full w-32 h-32 mx-auto object-cover"/>
                    <h2 className="font-albulaHeavy text-xl mt-4 text-[#4a2c2a]">{member.name}</h2>
                    <p className="font-albula text-sm text-[#23120B]">Role in Sponsorship</p>
                    <div className="social-links mt-4">
                      <a href="#" className="mr-2 text-[#5d3a33]"><i className="fab fa-instagram"></i></a>
                      <a href="#" className="text-[#5d3a33]"><i className="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="team-section mb-10">
              <h2 className="font-albulaHeavy text-3xl text-[#23120B] mt-10">Documentation</h2>
              <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
                {teamMembers.documentation.map((member, index) => (
                  <div key={index} className="team-member bg-white p-4 rounded-lg shadow-lg">
                    <img src={`/src/components/assets/images/about/${member.image}`} alt={member.name} className="rounded-full w-32 h-32 mx-auto object-cover"/>
                    <h2 className="font-albulaHeavy text-xl mt-4 text-[#4a2c2a]">{member.name}</h2>
                    <p className="font-albula text-sm text-[#23120B]">Role in Documentation</p>
                    <div className="social-links mt-4">
                      <a href="#" className="mr-2 text-[#5d3a33]"><i className="fab fa-instagram"></i></a>
                      <a href="#" className="text-[#5d3a33]"><i className="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="team-section mb-10">
              <h2 className="font-albulaHeavy text-3xl text-[#23120B] mt-10">Web Development</h2>
              <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
                {teamMembers.webDevelopment.map((member, index) => (
                  <div key={index} className="team-member bg-white p-4 rounded-lg shadow-lg">
                    <img src={`/src/components/assets/images/about/${member.image}`} alt={member.name} className="rounded-full w-32 h-32 mx-auto object-cover"/>
                    <h2 className="font-albulaHeavy text-xl mt-4 text-[#4a2c2a]">{member.name}</h2>
                    <p className="font-albula text-sm text-[#23120B]">Role in Web Development</p>
                    <div className="social-links mt-4">
                      <a href="#" className="mr-2 text-[#5d3a33]"><i className="fab fa-instagram"></i></a>
                      <a href="#" className="text-[#5d3a33]"><i className="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="team-section mb-10">
              <h2 className="font-albulaHeavy text-3xl text-[#23120B] mt-10">Design</h2>
              <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
                {teamMembers.design.map((member, index) => (
                  <div key={index} className="team-member bg-white p-4 rounded-lg shadow-lg">
                    <img src={`/src/components/assets/images/about/${member.image}`} alt={member.name} className="rounded-full w-32 h-32 mx-auto object-cover"/>
                    <h2 className="font-albulaHeavy text-xl mt-4 text-[#4a2c2a]">{member.name}</h2>
                    <p className="font-albula text-sm text-[#23120B]">Role in Design</p>
                    <div className="social-links mt-4">
                      <a href="#" className="mr-2 text-[#5d3a33]"><i className="fab fa-instagram"></i></a>
                      <a href="#" className="text-[#5d3a33]"><i className="fab fa-linkedin"></i></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
