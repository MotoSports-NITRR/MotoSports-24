import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

import MemberCard from "../../memberCard/memberCard";
function FrontLiner(data) {

    const dt = data.caps;
    return (
        <div className=' caps w-11/12 m-auto frontLiners'>
            <div className='resp -mt-10 flex flex-wrap gap-11 justify-evenly items-center'>
                {Object.keys(dt).map((d) =>
                (
                    <MemberCard {...dt[d]} />
                )
                )}
            </div>
        </div>
    );
}

export default FrontLiner;