import { Outlet } from 'react-router-dom'
import Header from './eBajaHeader/header'
import { React, useRef, useState, useEffect } from 'react'


function EBaja() {
    const eleRef = useRef(null);
    const [eBajaNavisInView, eBajaNavsetIsInView] = useState(false);

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    };

    const checkInView = () => {
        const rect = eleRef.current.getBoundingClientRect();
        eBajaNavsetIsInView(
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    };
    useEffect(() => {
        checkInView();
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", checkInView);
        return () => {
            document.removeEventListener("scroll", checkInView);
        };
    }, []);

    const eBajawasInView = usePrevious(eBajaNavisInView);

    useEffect(() => {
        const ebajaNav = document.querySelector('.header')
        if (ebajaNav) {
            if (eBajawasInView && !eBajaNavisInView) {
                ebajaNav.style.position = 'fixed';
                ebajaNav.style.top = '0';
                ebajaNav.style.width = '100%';
            }
            else {
                ebajaNav.style.width = '100%';
                ebajaNav.style.position = 'absolute';

            }
        }

    }, [eBajaNavisInView]);

    return (
        <>
            <div className="ebajaNav relative" ref={eleRef}>
                <Header />
            </div>
            <div className="eBajaCover">
                <Outlet />
            </div>
        </>
    )
}

export default EBaja;
