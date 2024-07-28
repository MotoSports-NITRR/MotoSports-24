import '../globalStyles.css';
import linkedinIcon from '../assets/icons/linkedinLogoSVG.svg';
import instagramIcon from '../assets/icons/instagramLogoSVG.svg';
import facebookIcon from '../assets/icons/facebookLogoSVG.svg';

function Footer() {
    return (
        <>
            <footer className='bg-blackbean min-h-400 flex justify-center'>
                <div className="w-full lg:w-85vw 2xl:w-65vw box-border text-left mt-2.5 px-10 py-10 flex-col items-start">
                    <div className='font-inter font-bold text-dustyWhite text-2xl inline-block'>Motosports NITRR</div>

                    <div className='flex flex-col lg:flex-row justify-between items-start mt-10 mb-10 sm:mb-5 xsm:mb-2'>
                        <div className='lg:w-1/2 flex flex-col mb-10'>
                            <h1 className='font-poppins font-xs text-dustyWhite mt-7 mb-9 cursor-text'>The official motorsports club of National Institute of Technology, Raipur</h1>
                            <h1 className='font-poppins font-medium text-dustyWhite mb-3 cursor-text'>Social Handles</h1>

                            <div className='flex justify-between items-center w-125'>
                                <a href="https://www.linkedin.com/company/nit-raipur-motosports/">
                                    <div className='inline-block'>
                                        <img src={linkedinIcon} alt="Linked In Icon" className='w-5 transition-opacity duration-300 hover:opacity-60'/>
                                    </div>
                                </a>

                                <a href="https://www.instagram.com/nitrr_racing/">
                                    <div className='inline-block'>
                                        <img src={instagramIcon} alt="Instagram Icon" className='w-5 transition-opacity duration-300 hover:opacity-60'/>
                                    </div>
                                </a>

                                <a href="https://www.facebook.com/nitrrmotosports/">
                                    <div className='inline-block'>
                                        <img src={facebookIcon} alt="Facebook Icon" className='w-5 transition-opacity duration-300 hover:opacity-60'/>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div id='footerlinkHOLDER' className='flex justify-evenly items-start flex-col xsm:flex-row xsm:items-center'>

                            <div className='flex flex-col lg:w-auto'>
                                <ul className='cursor-text'>
                                    <h1 className='font-poppins font-medium text-dustyWhite mb-3 cursor-text'>Important Links</h1>
                                    
                                    <a href="/about" className='cursor-pointer'>
                                        <li className='font-poppins font-light text-barelyBrown py-0.5 hover:text-dustyWhite transition-colors duration-300'>About Us</li>
                                    </a>

                                    <a href="/notices" className='cursor-pointer'>
                                        <li className='font-poppins font-light text-barelyBrown py-0.5 hover:text-dustyWhite transition-colors duration-300'>Notices</li>
                                    </a>

                                    <a href="/team" className='cursor-pointer'>
                                        <li className='font-poppins font-light text-barelyBrown py-0.5 hover:text-dustyWhite transition-colors duration-300'>Our Team</li>
                                    </a>

                                    <a href="/recruitment" className='cursor-pointer'>
                                        <li className='font-poppins font-light text-barelyBrown py-0.5 hover:text-dustyWhite transition-colors duration-300'>Recruitment</li>
                                    </a>
                                </ul>
                            </div>

                            <div className='flex flex-col mt-10 xsm:ml-10 xsm:mt-0 lg:w-auto'>
                                <ul className='cursor-text'>
                                    <h1 className='font-poppins font-medium text-dustyWhite mb-3 cursor-text'>Contact Us</h1>
                                    
                                    <li className='font-poppins font-light text-barelyBrown py-0.5'>Address: <br/> <span className='text-barestBrown hover:text-dustyWhite transition-colors duration-300 hover:cursor-pointer'> National Institute of Technology, Raipur</span></li>

                                    <a href="mailto:motosports.nitrr@gmail.com" className='cursor-pointer'>
                                        <li className='font-poppins font-light text-barelyBrown py-0.5'>Email: <span className='text-barestBrown hover:text-dustyWhite transition-colors text-sm duration-300'>motosports.nitrr@gmail.com</span></li>
                                    </a>

                                    <a href="tel:9893539767" className='cursor-pointer'>
                                        <li className='font-poppins font-light text-barelyBrown py-0.5'>Phone: <span className='text-barestBrown hover:text-dustyWhite transition-colors duration-300'>9893539767</span></li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='font-poppins font-light text-dustyWhite text-sm text-center mt-2'>Copyright &copy; 2024 All rights reserved by MOTOSPORT, NITRR | Designed by Dev Team MotoSport</div>
                </div>
            </footer>
        </>
    );
}
  
export default Footer;
