import { Outlet } from 'react-router-dom'
import Header from './eBajaHeader/header'
import { React, useRef, useState, useEffect } from 'react'


function EBaja() {
    const eleRef = useRef(null);
    const [isInView, setIsInView] = useState(false);


    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    };


    const checkInView = () => {
        const rect = eleRef.current.getBoundingClientRect();
        setIsInView(
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
    const wasInView = usePrevious(isInView);

    useEffect(() => {
        const phaseHead = document.querySelector(".headerPhase");
        if (phaseHead) {
            if (!wasInView && isInView) {
                // Element has come into view
                // Do something with the element ...
                // console.log("Element is in view");
                phaseHead.style.position = 'absolute';
                phaseHead.style.top= '0';
            } else {
                // console.log("out of view");
                phaseHead.style.position = 'fixed';
                phaseHead.style.top = '100px';
                // console.log(phaseHead);
            }
        }
    }, [isInView]);

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
