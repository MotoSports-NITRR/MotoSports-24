import './headDetailExpansion.css'

function HeadDetailExpansion(...data) {
    // const data = data[0];
    // console.log(data);
    return (
        <div className="memberDetailExpansion">
            <div id={data[0].index + "Detailed"} className={"headMemberExpansion flex "}>
                <div className="expansionLeft">
                    <h1 className='text'>
                        <span className='text-2xl font-bold text-red-700 domainName'>{data[0].DomainName + " "}</span>
                        <span className='span2'>{data[0].Role}</span></h1>
                    <h1 className='text-4xl flex flex-wrap my-14 expandedName'>{data[0].name}</h1>
                    <div className="socialDetial">
                        <ul className=' aligncenter justify-center'>
                            {data[0].linkedin &&
                                <li className=''>
                                    <a href={data[0].linkedin}>LinkedIn
                                        <img src="/linkedIn.png" alt="" />
                                    </a>
                                </li>
                            }
                            <li>
                                <a href={data[0].insta}>Instagram
                                    <img src="/instagram.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="expansionRight">
                    <img src={data[0].img} alt="" />
                </div>
            </div>
        </div>
        // <>
        // </>
    )
}

export default HeadDetailExpansion;