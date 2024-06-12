import React from 'react';

const backgroundStyle = {
    background: 'linear-gradient(to bottom, #f3e9dc, #481f01)',
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

function About() {
    return (
        <>
            <div className="about-page" style={backgroundStyle}>
                <div style={overlayStyle}></div>
                <div className="container mx-auto px-4 relative">
                    <section className="who-are-we text-center mb-20">
                        <h1 className="font-albulaHeavy text-5xl text-[#4a2c2a] mt-10">WHO ARE WE?</h1>
                        <p className="font-albula text-lg text-[#5d3a33] mt-5 mx-auto w-3/5">
                            Motorsports is a dynamic and innovative club dedicated to pushing the boundaries of automotive technology and competitive racing. Our club has a track record of excellence, actively participating in a range of competitions where we showcase our skills and passion for motorsports. Through our commitment to excellence and state-of-the-art technologies, we have established ourselves as leaders within the Indian automotive sector. NIT Raipur Motorsports provides a platform for students to pursue their passions and demonstrate their abilities on a broader stage. Join us and experience the thrill of Motorsports at NIT Raipur!
                        </p>
                    </section>
                    
                    <section className="what-do-we-do text-center mb-20">
                        <h1 className="font-albulaHeavy text-5xl text-[#4a2c2a] mt-10">WHAT DO WE DO?</h1>
                        <p className="font-albula text-lg text-[#5d3a33] mt-5 mx-auto w-3/5">
                            We, at NIT Raipur Motorsports, are a dedicated team of over 85 members who devote our time and expertise to creating robust and durable cars that outperform the competition. Our club is actively involved in two prestigious races eBaja and Formula Bharat, where we showcase our innovation, engineering prowess, and teamwork. Through rigorous testing, meticulous design processes, and a relentless pursuit of excellence, we push the boundaries of what’s possible in the realm of Motorsports. Join us on this exciting journey of innovation and competition!
                        </p>
                        <div className="mt-10">
                            <button className="btn bg-[#e07b39] text-white py-2 px-4 rounded-full mr-4 hover:bg-[#4a2c2a]">eBaja</button>
                            <button className="btn bg-[#e07b39] text-white py-2 px-4 rounded-full mr-4 hover:bg-[#4a2c2a]">f - Bharat</button>
                        </div>
                    </section>
                    
                    <section className="meet-the-team text-center mb-20">
                        <h1 className="font-albulaHeavy text-5xl text-[#4a2c2a] mt-10">MEET THE TEAM</h1>

                        <div className="team-section mb-10">
                            <h2 className="font-albulaHeavy text-3xl text-[#4a2c2a] mt-10">Captain / Vice-Captain</h2>
                            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="team-member bg-white p-4 rounded-lg shadow-lg">
                                        <img src="/mnt/data/image.png" alt="Team Member" className="rounded-full w-32 h-32 mx-auto"/>
                                        <h2 className="font-albulaHeavy text-xl mt-4 text-[#4a2c2a]">Aman</h2>
                                        <p className="font-albula text-sm text-[#5d3a33]">Web Developer</p>
                                        <div className="social-links mt-4">
                                            <a href="#" className="mr-2 text-[#5d3a33]"><i className="fab fa-instagram"></i></a>
                                            <a href="#" className="text-[#5d3a33]"><i className="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="team-section mb-10">
                            <h2 className="font-albulaHeavy text-3xl text-[#4a2c2a] mt-10">Domain Head</h2>
                            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="team-member bg-white p-4 rounded-lg shadow-lg">
                                        <img src="/mnt/data/image.png" alt="Team Member" className="rounded-full w-32 h-32 mx-auto"/>
                                        <h2 className="font-albulaHeavy text-xl mt-4 text-[#4a2c2a]">Aman</h2>
                                        <p className="font-albula text-sm text-[#5d3a33]">Web Developer</p>
                                        <div className="social-links mt-4">
                                            <a href="#" className="mr-2 text-[#5d3a33]"><i className="fab fa-instagram"></i></a>
                                            <a href="#" className="text-[#5d3a33]"><i className="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="team-section">
                            <h2 className="font-albulaHeavy text-3xl text-[#4a2c2a] mt-10">Treasurer</h2>
                            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div key={index} className="team-member bg-white p-4 rounded-lg shadow-lg">
                                        <img src="/mnt/data/image.png" alt="Team Member" className="rounded-full w-32 h-32 mx-auto"/>
                                        <h2 className="font-albulaHeavy text-xl mt-4 text-[#4a2c2a]">Aman</h2>
                                        <p className="font-albula text-sm text-[#5d3a33]">Web Developer</p>
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
