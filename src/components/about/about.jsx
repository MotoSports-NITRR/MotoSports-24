import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const backgroundStyle = {
  background: 'linear-gradient(to bottom, #fff1de, #2f1000)',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 0,
  padding: '50px 0',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  backgroundImage: 'url("Motosports.png")',
  backgroundRepeat: 'repeat',
  opacity: 0.2,
};

const teamMembers = {
  sponsorship: [
    { 
      name: "Rishi Singh Rajput (Head)", 
      image: "RishiSinghRajput.jpg",
      instagram: "https://www.instagram.com/shiri_singha/?igsh=MXNlZTY0d3JoNjA0Ng%3D%3D",
      linkedin: "https://www.linkedin.com/in/rishi-singh-aa5387264?trk=contact-info"
    },
    { 
      name: "Ritik Pathak (Head)", 
      image: "RitikPathak.jpg",
      instagram: "https://www.instagram.com/ritik_gear?igsh=bDYzbW5zaGpuaWds",
      linkedin: "https://www.linkedin.com/in/ritik-pathak-31b865247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    { name: "Ashish Jangid", image: "AshishJangid.jpg" },
    { name: "Rishabh Bhati", image: "RishabhBhati.jpg" },
    { name: "Shikha Yadav", image: "ShikhaYadav.jpg" },
    { name: "Astha Jaiswal", image: "AsthaJaiswal.jpg" },
    { name: "Ritika Jain", image: "RitikaJain.jpg" },
    { name: "Kundan Rathi", image: "KundanRathi.jpg" }
  ],
  documentation: [
    { 
      name: "Rahul Kumar Singh (Head)", 
      image: "RahulKumarSingh.jpeg",
      linkedin: "https://www.linkedin.com/in/rahul-kumar-singh-b88636231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    { 
      name: "Gaurab Kumar (Head)", 
      image: "GaurabKumar.jpeg",
      linkedin: "https://linkedin.com/in/gaurav-kumar-b76122251/"
    },
    { name: "Prakarsh Gupta", image: "PrakarshGupta.jpg" },
    { name: "Vighnesh Gupta", image: "VighneshGupta.jpg" }
  ],
  webDevelopment: [
    { 
      name: "Sparsh Jaggi (Head)", 
      image: "SparshJaggi.jpeg",
      instagram: "https://www.instagram.com/sparshjaggi?igsh=ZHVpeHNwN2txcnZm&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/sparsh-jaggi-1aa263257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    { name: "Aman Kumar", image: "AmanKumar.JPG" },
    { name: "Ayush Mishra", image: "AyushMishra.jpg" },
    { name: "Leora Saharia", image: "LeoraSaharia.jpg" },
    { name: "Vivek Verma", image: "VivekVerma.jpeg" }
  ],
  design: [
    { 
      name: "Mridul Bansal (Head)", 
      image: "MridulBansal.jpeg",
      instagram: "https://www.instagram.com/mridszx?igsh=MWE0MXUyc29iZnc2dQ==",
      linkedin: "https://www.linkedin.com/in/mridul-bansal-915b00261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    { name: "Pratibha Sikheriya", image: "PratibhaSikheriya.jpg" },
    { name: "Megha Rathi", image: "MeghaRathi.jpg" },
    { name: "Anshul Wasnik", image: "AnshulWasnik.jpg" },
    { name: "Aman Kumar Sharma", image: "AmanSharma.jpg" }
  ]
};

const TeamMemberCard = ({ name, image, instagram, linkedin }) => (
  <div className="team-member-card">
    <div className="image-container">
      <img src={`/src/components/assets/images/about/${image}`} alt={name} className="profile-image" />
      <div className="overlay">
        <h2 className="name">{name}</h2>
        <div className="social-links">
          {instagram && <a href={instagram} className="social-link"><i className="fab fa-instagram"></i></a>}
          {linkedin && <a href={linkedin} className="social-link"><i className="fab fa-linkedin"></i></a>}
        </div>
      </div>
    </div>
  </div>
);

const events = [
  {
    step: "1",
    description: "NIT RAIPUR has a vast alumni network and conducts alumni meet every year in which more than 300+ alumni having senior positions in various company visits our campus. We conduct a car showcasing event during the meet and also have an interactive session with them.",
    image: "event1.jpg",
  },
  {
    step: "2",
    description: "We conduct workshops and mini events related to automobile in AAVARTAN (tech fest).",
    image: "event2.jpg",
  },
  {
    step: "3",
    description: "Showcasing of our VEHICLE and giving the experience of driving in ECLECTIKA, central Indian’s largest fest having a footfall of more than 30k+.",
    image: "event3.jpg",
  },
  {
    step: "4",
    description: "Various road shows in front of our college main building are conducted by showcasing our vehicle which attracting total of more than 1.5k+ local crowd and students along with the faculties.",
    image: "event4.jpg",
  },
  {
    step: "5",
    description: "Our club regularly conducts the workshop throughout the year in NIT Raipur and near by colleges.",
    image: "event5.jpg",
  },
];

const EventCard = ({ step, description, image }) => (
  <div className="event-card flex flex-col items-center mb-10">
    <div className="step-circle bg-gradient-to-r from-pink-500 to-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
      {step}
    </div>
    <img src={`/src/components/assets/images/about/${image}`} alt={`Event ${step}`} className="event-image w-64 h-64 object-cover mb-4" />
    <p className="font-albula text-lg text-[#5d3a33] mt-5 mx-auto w-3/5">{description}</p>
  </div>
);

function About() {
  return (
    <div className="about-page" style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div className="container mx-auto px-4 relative">
        <section className="who-are-we text-center mb-64 pb-64 flex flex-col items-center">
          <h1 className="font-albulaHeavy text-5xl text-[#23120B] mt-10">WHO ARE WE?</h1>
          <p className="font-albula text-lg text-[#5d3a33] mt-5 mx-auto w-3/5">
            Motorsports is a dynamic and innovative club dedicated to pushing the boundaries of automotive technology and competitive racing. Our club has a track record of excellence, actively participating in a range of competitions where we showcase our skills and passion for motorsports. Through our commitment to excellence and state-of-the-art technologies, we have established ourselves as leaders within the Indian automotive sector. NIT Raipur Motorsports provides a platform for students to pursue their passions and demonstrate their abilities on a broader stage. Join us and experience the thrill of Motorsports at NIT Raipur!
          </p>
        </section>

        <section className="what-do-we-do text-center mb-32 pb-32">
          <h1 className="font-albulaHeavy text-5xl text-[#23120B] mt-10">WHAT DO WE DO?</h1>
          <p className="font-albula text-lg text-[#5d3a33] mt-5 mx-auto w-3/5">
            We, at NIT Raipur Motorsports, are a dedicated team of over 85 members who devote our time and expertise to creating robust and durable cars that outperform the competition. Our club is actively involved in two prestigious races eBaja and Formula Bharat, where we showcase our innovation, engineering prowess, and teamwork. Through rigorous testing, meticulous design processes, and a relentless pursuit of excellence, we push the boundaries of what’s possible in the realm of Motorsports. Join us on this exciting journey of innovation and competition!
          </p>
          <div className="mt-10">
            <h2 className="font-albulaHeavy text-3xl text-[#23120B] mt-5 mb-5">Know more about</h2>
            <div className="flex justify-center space-x-4">
              <Link to="/eBaja" className="btn bg-[#e07b39] text-white py-2 px-4 rounded-full hover:bg-[#4a2c2a] transition-colors duration-300">eBaja</Link>
              <Link to="/formulaBharat" className="btn bg-[#e07b39] text-white py-2 px-4 rounded-full hover:bg-[#4a2c2a] transition-colors duration-300">Formula Bharat</Link>
            </div>
          </div>
        </section>

        <section className="events text-center mb-32 pb-32">
          <h1 className="font-albulaHeavy text-5xl text-[#23120B] mt-10">EVENTS</h1>
          <div className="timeline-container relative">
            {events.map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <EventCard
                  step={event.step}
                  description={event.description}
                  image={event.image}
                />
              </div>
            ))}
            <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full bg-[#e07b39] w-1"></div>
          </div>
        </section>

        <section className="team-members">
          {/* Sponsorship Section */}
          <div className="team-section mb-10">
            <h2 className="font-albulaHeavy text-3xl text-[#23120B] mt-10">Sponsorship</h2>
            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
              {teamMembers.sponsorship.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  image={member.image}
                  instagram={member.instagram}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>

          {/* Documentation Section */}
          <div className="team-section mb-10">
            <h2 className="font-albulaHeavy text-3xl text-[#23120B] mt-10">Documentation</h2>
            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
              {teamMembers.documentation.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  image={member.image}
                  instagram={member.instagram}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>

          {/* Web Development Section */}
          <div className="team-section mb-10">
            <h2 className="font-albulaHeavy text-3xl text-[#23120B] mt-10">Web Development</h2>
            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
              {teamMembers.webDevelopment.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  image={member.image}
                  instagram={member.instagram}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>

          {/* Design Section */}
          <div className="team-section mb-10">
            <h2 className="font-albulaHeavy text-3xl text-[#23120B] mt-10">Design</h2>
            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
              {teamMembers.design.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  image={member.image}
                  instagram={member.instagram}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}

export default About;
