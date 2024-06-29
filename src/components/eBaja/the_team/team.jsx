import The_Team from './the_team';
import domainHeads from '../domain-head-eb.json'
import members from '../member-eb.json'

function Team() {
    return (
        <>
            <The_Team domainHead= {domainHeads} otherMembers = {members} element="eBajaCover"/>
        </>
    )
}

export default Team;