import { React, useRef, useState, useEffect } from 'react'

import './the_team.css'
import InitializeHeader from '../initialContentHeader/initialHeader'
import MemberList from './memberListDisplay/memberList';
import HeadDetailExpansion from './headDetailExpansion/headDetailExpansion';
import teamMembersList from '../teamMembers.json';


function The_Team() {
    let temp;
    // let memberActive = document.querySelector('.memberActive');
    // console.log(memberActive);
    // if (memberActive) {
    //     temp = document.querySelector('#' + memberActive.id + 'Detailed');
    //     console.log(temp);
    // }
    useEffect(() => {
        document.querySelectorAll('.members').forEach(member => {
            member.addEventListener('click', async (e) => {
                console.log(member.classList.contains('memberActive'));
                
                let memberActive = document.querySelectorAll('.memberActive');
                // console.log(memberActive);
                if (memberActive) {
                    temp = document.querySelector('#' + memberActive[0].id + 'Detailed');
                    // console.log(temp);
                    temp.style.display = "none";
                    temp.style.zIndex = "1";
                    temp.style.opacity = "0";
                }
                let memberName = "#" + member.id + "Detailed";
                const opaque = document.querySelector(memberName);
                opaque.style.display = "flex";
                opaque.style.zIndex = "5";
                opaque.style.opacity = "1";

                temp = opaque
            })
        })
    })

    return (
        <>
            <div className="theTeamPage">
                <div className="teamInitialHeader">
                    <InitializeHeader header='Domain Heads' />
                </div>
                <div className="teamMembers">
                    <MemberList {...teamMembersList} />
                </div>
            </div>
            <HeadDetailExpansion {...teamMembersList} />
        </>
    )
}

export default The_Team;