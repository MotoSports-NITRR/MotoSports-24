import { React, useRef, useState, useEffect } from 'react'

import './the_team.css'
import InitializeHeader from '../initialContentHeader/initialHeader'
import MemberList from './memberListDisplay/memberList';


function The_Team(...data) {

    const domainHeads = data[0].domainHead;
    const Mentors = data[0].Mentors;
    const BrakesMem = data[0].BrakesMem;
    const SteeringMem = data[0].SteeringMem;
    const FramesMem = data[0].FramesMem;
    const FrontMem = data[0].FrontMem;
    const SuspensionMem = data[0].SuspensionMem;
    const PowerTrain = data[0].PowerTrain;
    return (
        <>
            <div className="theTeamPage">
                <div className="FrontTeam teamMem">
                    {FrontMem &&
                        <div className="teamMembers">
                            <MemberList {...FrontMem} />
                        </div>
                    }
                </div>
                <div className="Mentors teamMem">
                    <div className="teamInitialHeader titleHeader">
                        <InitializeHeader header='Our Mentors' />
                    </div>
                    {Mentors &&
                        <div className="teamMembers">
                            <MemberList {...Mentors} />
                        </div>
                    }
                </div>
                <div className="DomainHeads teamMem">
                    <div className="teamInitialHeader titleHeader">
                        <InitializeHeader header='Domain Heads' />
                    </div>
                    {domainHeads &&
                        <div className="teamMembers">
                            <MemberList {...domainHeads} />
                        </div>
                    }
                </div>
                <div className="Brakes teamMem">
                    <div className="teamInitialHeader titleHeader">
                        <InitializeHeader header='Brakes Domain' />
                    </div>
                    {domainHeads &&
                        <div className="teamMembers">
                            <MemberList {...BrakesMem} />
                        </div>
                    }
                </div>
                <div className="Frames teamMem">
                    <div className="teamInitialHeader titleHeader">
                        <InitializeHeader header='Frames Domain' />
                    </div>
                    {domainHeads &&
                        <div className="teamMembers">
                            <MemberList {...FramesMem} />
                        </div>
                    }
                </div>
                <div className="PowerTrain teamMem">
                    <div className="teamInitialHeader titleHeader">
                        <InitializeHeader header='Electric PowerTrain' />
                    </div>
                    {domainHeads &&
                        <div className="teamMembers">
                            <MemberList {...PowerTrain} />
                        </div>
                    }
                </div>
                <div className="Steering teamMem">
                    <div className="teamInitialHeader titleHeader">
                        <InitializeHeader header='Steering Domain' />
                    </div>
                    {domainHeads &&
                        <div className="teamMembers">
                            <MemberList {...SteeringMem} />
                        </div>
                    }
                </div>
                <div className="Suspension teamMem">
                    <div className="teamInitialHeader titleHeader">
                        <InitializeHeader header='Suspension Domain' />
                    </div>
                    {domainHeads &&
                        <div className="teamMembers">
                            <MemberList {...SuspensionMem} />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default The_Team;