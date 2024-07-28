import { useEffect, useRef, useState } from 'react';
import './initialHeader.css'

function InitializeHeader(...data) {
    let bd = "black"
    if (data[0].bdColor) {
        bd = data[0].bdColor;
    }

    const initialHeader = useRef(null)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 1 }
        );

        if (initialHeader.current) {
            observer.observe(initialHeader.current);
        }

        return () => {
            if (initialHeader.current) {
                observer.unobserve(initialHeader.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const postHeadingUnderline = document.querySelectorAll('.postHeadingUnderline');
            for (let i = 0; i < postHeadingUnderline.length; i++) {
                postHeadingUnderline[i].style.width = '100%';
            }
        }
    })

    let bdColor = "1px solid " + bd;

    return (
        <>
            <div className={"initialHeader " + data[0].className} >
                <div className="headerText" style={{ "color": data[0].color }}>
                    {data[0].header}
                </div>
                <div className="span">
                    <span style={{ "border": bdColor }} className='postHeadingUnderline' ref={initialHeader}></span>
                </div>
            </div>
        </>
    )
}

export default InitializeHeader;