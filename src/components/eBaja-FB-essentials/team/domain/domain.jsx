import MemberCard from "../../memberCard/memberCard";
import './domain.css'

function DomainComp(d) {
    const data = d.data;
    // const d = data.domainHead;
    console.log(data.domainHead);
    
    return (
        <>
            {d.domain && <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>{d.domain}</h1>}
            <div className='domain m-auto'>
                {data.domainHead &&
                    <div className='resp -mt-10 flex justify-center items-center flex-wrap'>
                        <MemberCard {...data.domainHead} />
                    </div>
                }
                <div className='m-auto domainMembers'>
                    <div className='resp mt-10 flex flex-wrap justify-evenly items-center' key="">
                        {data.members.map((m) => (
                            <MemberCard {...m} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DomainComp;