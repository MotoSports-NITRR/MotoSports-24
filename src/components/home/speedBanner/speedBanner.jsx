import React, { useEffect, useRef } from 'react';
import './bannerStyles.css';

function Home() {
    const innerRef = useRef(null);
    const marqueeRef = useRef(null);

    useEffect(() => {
        let ticking = false;
        let isScrolling = false;

        const handleScroll = () => {
            isScrolling = true;
            if (!ticking) {
                requestAnimationFrame(() => {
                    const inner = innerRef.current;
                    if (isScrolling && inner) {
                        const scrollAmount = window.scrollY * 0.5;
                        const initialOffset = -((inner.children.length - 4) * inner.children[0].offsetWidth);
                        inner.style.transform = `translateX(calc(${initialOffset}px + ${scrollAmount}px))`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        const scrollListener = () => {
            isScrolling = true;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    return (
        <div className=''>
            <div className='marquees h-150 sm:h-200px md:h-72'>
                <div className='marquee' ref={marqueeRef}>
                    <div className='marquee--inner' ref={innerRef}>
                        <p aria-hidden='true'>Speed alert!</p>
                        <p aria-hidden='true'>Speed alert!</p>
                        <p aria-hidden='true'>Speed alert!</p>
                        <p aria-hidden='true'>Speed alert!</p>
                        <p aria-hidden='true'>Speed alert!</p>
                        <p aria-hidden='true'>Speed alert!</p>
                        <p aria-hidden='true'>Speed alert!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;