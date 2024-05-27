import './headDetailExpansion.css'

function HeadDetailExpansion(...data) {
    const person = data[0];
    return (
        <div className="memberDetailExpansion px-5">
            {Object.keys(person).map((key) => (
                <div id={person[key].index + "Detailed"} className={"headMemberExpansion flex my-16 absolute "}>
                    <div className="expansionLeft">
                        <h1 className='text'><span className='text-2xl font-bold text-red-700 domainName'>{person[key].DomainName + " "}</span> Domain Head</h1>
                        <h1 className='text-7xl flex flex-wrap my-14 expandedName'>{person[key].name}</h1>
                        <div className="socialDetial">
                            <ul className=' aligncenter justify-center'>
                                {person[key].linkedin &&
                                    <li className=''>
                                        <a href={person[key].linkedin}>LinkedIn
                                            <img src="/linkedIn.png" alt="" />
                                        </a>
                                    </li>
                                }
                                <li>
                                    <a href={person[key].insta}>Instagram
                                        <img src="/instagram.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="expansionRight">
                        <img src={person[key].img} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeadDetailExpansion;