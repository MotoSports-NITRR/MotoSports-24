import { useState, useRef, useEffect } from 'react';
import './memberList.css'

function MemberList(...data) {
    const memIcon = useRef(null)
    const [count, setCount] = useState(0);

    useEffect(() => {
        const eBajaCover = document.querySelector('.eBajaCover');

        function handleClick() {
            const membersIcons = document.querySelectorAll('.members');
            if (count == 0) {
                membersIcons[0].classList.add('memberActive')
                setCount(count + 1);

                const memberActive = document.querySelector('.memberActive');
                const activeMemberId = memberActive.id;
                const showMembeerDetailed = document.querySelector('#' + activeMemberId + 'Detailed');
                showMembeerDetailed.style.display = "flex";
                showMembeerDetailed.style.zIndex = "5";
                showMembeerDetailed.style.opacity = "1";
            }
            eBajaCover.removeEventListener('mouseover', handleClick);
        }


        if (eBajaCover) {
            eBajaCover.addEventListener('mouseover', handleClick);
        }

        return () => {
            if (eBajaCover) {
                eBajaCover.removeEventListener('mouseover', handleClick);
            }
        };
    }, []);
    return (
        <>
            <div className="teamMemberList flex">
                <div className="membersIcon">
                    <ul>
                        {Object.keys(data[0]).map((key) => (
                            <li id={data[0][key].index} ref={memIcon} className='members'>
                                <div className='member'>
                                    <div className="memberImageContainer" style={{ 'backgroundImage': "url('" + data[0][key].img + "')" }}>
                                    </div>
                                </div>
                                <p>{data[0][key].name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="iconScrollIndicator indicator">
                    <span>&#62;</span>
                    <span>&#62;</span>
                    <span>&#62;</span>
                </div>
            </div>
        </>
    )
}

export default MemberList;