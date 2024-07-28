import { useState, useRef, useEffect } from 'react';
import './memberList.css'
import HeadDetailExpansion from '../headDetailExpansion/headDetailExpansion'

function MemberList(...data) {
    const [memberStates, setMemberStates] = useState({});
    let headsObj = data[0];

    useEffect(() => {
        const members = document.querySelectorAll('.member');
        members.forEach((mem) => {
            mem.addEventListener('mouseover', (e) => {
                const memberId = e.target.parentNode.id;
                setMemberStates((prevStates) => ({ ...prevStates, [memberId]: true }));
                mem.classList.add('hoverDetailsAnimation');
                const hvElement = mem.querySelector('.hoverExpand')
                // hvElement.style.opacity = '0.95'
                if (e.clientX > window.innerWidth / 2) {
                    hvElement.style.right = window.innerWidth - e.clientX + 'px';
                    hvElement.style.left = 'auto';
                }
                else {
                    hvElement.style.right = 'auto';
                    hvElement.style.left = e.clientX + 'px';
                }
                hvElement.style.bottom = window.innerHeight / 2 + 50 - mem.clientHeight + "px";
                e.stopPropagation();
            });
            mem.addEventListener('mouseout', (e) => {
                const memberId = e.target.parentNode.id;
                setMemberStates((prevStates) => ({ ...prevStates, [memberId]: false }));
                mem.classList.remove('hoverDetailsAnimation');
                e.stopPropagation();
            });
        });

        // cleanup function to remove event listeners
        return () => {
            members.forEach((mem) => {
                mem.removeEventListener('mouseover', () => { });
                mem.removeEventListener('mouseout', () => { });
            });
        };
    }, [headsObj]);
    useEffect(() => {
        const hoverExpand = document.querySelectorAll('.hoverExpand');
        hoverExpand.forEach((mem) => {
            mem.addEventListener('mouseover', (e) => {
                const memberId = mem.parentNode.id;
                setMemberStates((prevStates) => ({ ...prevStates, [memberId]: true }));
                e.stopPropagation()

            });
            mem.addEventListener('mouseout', (e) => {
                const memberId = mem.parentNode.id;
                setMemberStates((prevStates) => ({ ...prevStates, [memberId]: false }));
                e.stopPropagation()
            });
        });

        // Add cleanup function to remove event listeners
        return () => {
            hoverExpand.forEach((mem) => {
                mem.removeEventListener('mouseover', () => { });
                mem.removeEventListener('mouseout', () => { });
            });
        };
    }, [headsObj]);
    // console.log(headsObj);

    return (
        <>
            <div className="teamMemberList flex">
                <div className="membersIcon">
                    <ul>
                        {Object.keys(headsObj).map((key) => (
                            <li className='members'>
                                <div className='member' id={headsObj[key].index}>
                                    <div className="memberImageContainer" style={{ backgroundImage: `url('${headsObj[key].img}')` }} />
                                    <div className="hoverExpand">
                                        {memberStates[headsObj[key].index] && (
                                            <HeadDetailExpansion {...headsObj[key]} />
                                        )}
                                    </div>
                                </div>
                                <p className='text-2xl'>{headsObj[key].name}</p>
                                <p className='text-2xl text-red-700'>{headsObj[key].Role}</p>
                                <div className="mobile_social">
                                    {headsObj[key].linkedin &&
                                        <li className=''>
                                            <a href={headsObj[key].linkedin}>
                                                <img src="/linkedIn.png" alt="" />
                                            </a>
                                        </li>
                                    }
                                    <li>
                                        <a href={headsObj[key].insta}>
                                            <img src="/instagram.png" alt="" />
                                        </a>
                                    </li>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MemberList;