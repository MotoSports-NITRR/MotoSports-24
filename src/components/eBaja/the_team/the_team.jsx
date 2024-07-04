import { React, useRef, useState, useEffect } from 'react'

import './the_team.css'
import InitializeHeader from '../initialContentHeader/initialHeader'
import MemberList from './memberListDisplay/memberList';
import HeadDetailExpansion from './headDetailExpansion/headDetailExpansion';
import OtherMembers from './otherMembers/otherMembers';


function The_Team(...data) {
    useEffect(() => {
        document.querySelectorAll('.members').forEach(member => {
            member.addEventListener('mouseenter', async (e) => {
                // console.log(e.target);

            })

            member.addEventListener('mouseleave', async (e) => {
                // let memberActive = document.querySelector('.memberActive');
                // if (memberActive) {
                //     memberActive.classList.remove('memberActive');
                //     temp = document.querySelector('#' + memberActive.id + 'Detailed');
                //     temp.style.opacity = "0";
                //     temp.style.zIndex = "1";
                // }
            })
        })
        // console.log(document.querySelectorAll('.memberIcon'));
    })
    // console.log(data);

    const domainHeads = data[0].domainHead;
    const Members = data[0].otherMembers
    const elementClass = data[0].element
    return (
        <>
            <div className="theTeamPage">
                <div className="teamInitialHeader titleHeader">
                    <InitializeHeader header='Domain Heads' />
                </div>
                {domainHeads &&
                    <div className="teamMembers">
                        <MemberList {...domainHeads} />
                    </div>
                }
            </div>
            {/* {domainHeads &&
                <HeadDetailExpansion {...domainHeads} />
            } */}
            {/* <div className="otherMembers">
                <div className="othersInitialHeader titleHeader">
                    <InitializeHeader header='Extra Ordinary Members' />
                </div>
                <OtherMembers {...Members}/>
            </div> */}
        </>
    )
}

export default The_Team;