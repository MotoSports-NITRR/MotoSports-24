import './otherMembers.css'
import members from '../../member-eb.json'

function OtherMembers() {
    let count = 0;
    const individuals = document.querySelectorAll('.individuals')
    // console.log(individuals);
    for (let i = 0; i < individuals.length; i++) {
        if (i%2 === 0) {
            individuals[i].classList.add('level')
        }
    }
    return (
        <>
            <ul>
                {
                    Object.keys(members).map((key) => (
                        <li id={members[key].index} className="individuals" >
                            {/* ++count */}
                            <div className="individual">
                                <div className="individualImage" style={{ 'backgroundImage': "url('" + members[key].img + "')" }}></div>
                                <div className="individualsDetail">
                                    <p className="name">
                                        <span className='text-xl'>{members[key].name}</span>
                                    </p>
                                    <p className="domain">
                                        <span>Domain:</span>
                                        <span className='text-lg'>{members[key].DomainName}</span>
                                    </p>
                                    <p className="role">
                                        <span>{members[key].Role}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="individualHover">

                            </div>
                        </li>
                        // console.log(members[key].img)
                    ))
                }
            </ul>
        </>
    )
}

export default OtherMembers;