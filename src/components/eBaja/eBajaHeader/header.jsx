import { React, useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './header.css'

function Header() {

    // const active = document.querySelector(".active")
    const eBajaNavItems = document.querySelectorAll(".eBajaNavItems")

    function activeRemover() {
        const active = document.querySelector(".active");
        if(active){
            active.classList.remove("active");
        }
    }

    const location = useLocation().pathname;
    useEffect(() => {
        activeRemover();
        if (location == "/eBaja") {
            const eBajaNav = document.querySelector(".eBajaNav");
            eBajaNav.classList.add("active")
        }
        else if (location == "/eBaja/phases") {
            const phasesNav = document.querySelector(".phasesNav");
            phasesNav.classList.toggle("active")
        }
        else if (location == "/eBaja/team") {
            const teamNav = document.querySelector(".teamNav");
            teamNav.classList.toggle("active")
        }
        else if (location == "/eBaja/partners") {
            const partnersNav = document.querySelector(".partnersNav");
            partnersNav.classList.toggle("active")
        }
        else if (location == "/eBaja/gallery") {
            const galleryNav = document.querySelector(".galleryNav");
            galleryNav.classList.toggle("active")
        }
    }, [eBajaNavItems])

    return (
        <>
            <div className="header">
                <div className="left">
                    <ul>
                        <li><a href="/eBaja" className='font-poppins font-medium eBajaNavItems eBajaNav'>eBAJA</a></li>
                    </ul>
                </div>
                <span className='center'></span>
                <div className="right">
                    <ul>
                        <li><a href="/eBaja/phases" className='font-poppins font-medium phasesNav eBajaNavItems'>Phases</a></li>
                        <li><a href="/eBaja/team" className='font-poppins font-medium teamNav eBajaNavItems'>The_Team</a></li>
                        <li><a href="/eBaja/gallery" className='font-poppins font-medium galleryNav eBajaNavItems'>Gallery</a></li>
                    </ul>
                </div>
                <div className="indicator">
                    <span>&#62;</span>
                    <span>&#62;</span>
                    <span>&#62;</span>
                </div>
            </div>
            {/* <span className='hoverBorder'></span> */}
        </>
    )
}

export default Header;