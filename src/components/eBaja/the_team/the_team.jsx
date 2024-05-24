import { React, useRef, useState, useEffect } from 'react'

import './the_team.css'
import InitializeHeader from '../initialContentHeader/initialHeader'
import MemberList from './memberListDisplay/memberList';
import DomainHeadDetail from './domainHeadDetail/domainHeadDetail';
import teamMembersList from '../teamMembers.json';

function The_Team() {
    let memberDetail;
    useState(() => {
        setTimeout(() => {
            document.querySelectorAll('.members').forEach(member => {
                member.addEventListener('click', async (e) => {
                    // console.log(e.target);
                    // console.log(member.id);
                    let memberName = member.id;
                    member.className += ' active';
                    // setTimeout(() => {
                    // }, 500);
                    memberDetail = DomainHeadDetail(teamMembersList[memberName]);
                    console.log(memberDetail);
                    // const teamMembers = document.querySelector('.teamMembers');
                })
            })
        }, 1500);
    })
    return (
        <>
            <div className="theTeamPage">
                <div className="teamInitialHeader">
                    <InitializeHeader header='The Team' />
                </div>
                <div className="teamMembers">
                    <MemberList {...teamMembersList} />
                    {memberDetail}
                </div>
            </div>
        </>
    )
}

export default The_Team;