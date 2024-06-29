import { useState, useRef, useEffect, createElement } from 'react';
import './memberList.css'
import HeadDetailExpansion from '../headDetailExpansion/headDetailExpansion';

function MemberList(...data) {
    const memIcon = useRef(null)
    const [count, setCount] = useState(0);

    // console.log(data);
    const [showExpansion, setShowExpansion] = useState(false); 
    useEffect(() => {
        document.querySelectorAll('.member').forEach((mem) => {
            mem.addEventListener('mouseover', (e) => {
                setShowExpansion(true)
            })
            mem.addEventListener('mouseout', () => {
                setShowExpansion(false);
            })
        })

    })
    let headsObj = data[0].domainHead;
    return (
        <>
            <div className="teamMemberList flex">
                <div className="membersIcon">
                    <ul>
                        {Object.keys(headsObj).map((key) => (
                            <li id={headsObj[key].index} ref={memIcon} className='members'>
                                <div className='member'>
                                    <div className="memberImageContainer" style={{ 'backgroundImage': "url('" + headsObj[key].img + "')" }}>
                                    </div>
                                </div>
                                <div className="hoverExpand">
                                    { showExpansion &&
                                        <HeadDetailExpansion  {...headsObj[key]} />
                                    }
                                </div>
                                <p>{headsObj[key].name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MemberList;