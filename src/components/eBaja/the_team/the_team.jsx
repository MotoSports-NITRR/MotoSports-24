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


                let memberActive = document.querySelector('.memberActive');
                if (memberActive) {
                    memberActive.classList.remove('memberActive');
                    temp = document.querySelector('#' + memberActive.id + 'Detailed');
                    // temp.style.display = "none";
                    temp.style.opacity = "0";
                    temp.style.zIndex = "1";
                    for (let i = 0; i < memberActive.length; i++) {
                    }
                }

                if (!member.classList.contains('memberActive')) {
                    member.classList.add('memberActive')
                }
                let memberName = "#" + member.id + "Detailed";
                const opaque = document.querySelector(memberName);
                // opaque.style.display = "flex";
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