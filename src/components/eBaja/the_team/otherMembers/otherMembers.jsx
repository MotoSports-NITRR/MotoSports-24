import './otherMembers.css'
import { useEffect } from 'react';

function OtherMembers(...data) {

    const members = data[0]
    // console.log(data);
    
    useEffect(() => {

        document.querySelectorAll('.individuals').forEach((ele, index) => {
            const rn = Math.random() * 350
            ele.style.marginTop = rn + 'px'
        })

        // document.querySelectorAll('.individualImage').forEach((ele, index) => {
        //     let rn = Math.random() * 1000
        //     if (rn > 550)   rn = 550
        //     else if (rn < 300)  rn = 300
        //     ele.style.height = rn + 'px'

        //     let rn2 = Math.random() * 500
        //     if (rn2 > 350)  rn2 = 350
        //     else if (rn2 < 200 && rn > 400) rn2 = rn
        //     else if (rn2 < 300 ) rn2 = 300
        //     ele.style.width = rn2 + 'px'
        //     console.log(rn,rn2);
        // })
    })
    return (
        <>
            <ul>
                {
                    Object.keys(members).map((key) => (
                        <li id={members[key].index} className="individuals" >
                            {/* ++count */}
                            <div className="individual">
                                <div className="social">
                                    <div className="individualImage" style={{ 'backgroundImage': "url('" + members[key].img + "')" }}>
                                    </div>
                                    <div className="accounts">
                                        {members[key].linkedin &&
                                            <a href={members[key].linkedin} className="linkedIn ">
                                                <h1 className=''>Visit LinkedIn</h1>
                                            </a>
                                        }
                                        {members[key].insta &&
                                            <a href={members[key].insta} className="insta ">
                                                <h1 className=''>Visit Insta</h1>
                                            </a>
                                        }
                                    </div>
                                </div>
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
            </ul >
        </>
    )
}

export default OtherMembers;