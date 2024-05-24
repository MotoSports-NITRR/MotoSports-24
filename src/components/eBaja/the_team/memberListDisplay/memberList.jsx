import './memberList.css'

function MemberList(...data) {
    // let members = data[0]
    // console.log(data);
    return (
        <>
            <div className="teamMemberList">
                <div className="membersIcon">
                    <ul>
                        {Object.keys(data[0]).map((key) => (
                            <li id={data[0][key].index} className='members '>
                                <li className='member'>
                                    <img src={data[0][key].img} />
                                </li>
                                {data[0][key].name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MemberList;


// remove name and palace justan image