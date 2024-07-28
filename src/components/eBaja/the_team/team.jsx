import The_Team from './the_team';
import domainHeads from '../domain-head-eb.json'
// import members from '../member-eb.json'
import Mentors from '../Mentors.json'
import Steering from '../steeringMembers.json'
import Suspension from '../suspensionMember.json'
import Brakes from '../brakesMembers.json'
import Frames from '../frameMembers.json'
import FrontMem from '../frontTeamNames.json'
import PowerTrain from '../PowerTrainMembers.json'

function Team() {
    return (
        <>
            <The_Team
                domainHead={domainHeads}
                BrakesMem={Brakes}
                FramesMem={Frames}
                FrontMem={FrontMem}
                Mentors={Mentors}
                PowerTrain = {PowerTrain}
                SteeringMem={Steering}
                SuspensionMem={Suspension}
            />
        </>
    )
}

export default Team;