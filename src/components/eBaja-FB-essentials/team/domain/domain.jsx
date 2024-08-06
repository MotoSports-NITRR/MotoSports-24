import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

function TeamComp(data) {
    console.log(data);

    // const d = data.domainHead;
    return (
        <>
            {data.map((d) => {
                console.log(d);
                
                <>
                    <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>{data.heading}</h1>
                    <div className='w-11/12 m-auto'>
                        <div className='resp -mt-10 flex justify-center items-center flex-wrap'>
                            <div key={d.name} style={{ backgroundImage: `url(${d.img})` }}
                                className='hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] w-80 text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
                                <div className="lol h-[110px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-0">
                                    <div className=''>
                                        <div className='diss text-3xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
                                            {d.name}
                                        </div>
                                        <div className='diss text-white text-xl font-bold flex justify-center items-center gap-4'>
                                            {d.desig}
                                        </div>
                                    </div>

                                    <div className='diss2 flex justify-between items-center gap-4'>
                                        <a href={d.insta} className='py-1 -mt-14'>
                                            <FontAwesomeIcon className='icon' icon={faInstagram} />
                                        </a>

                                        <a href={d.linkedin} className='py-1 -mt-14'>
                                            <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-11/12 m-auto'>
                            <div className='resp mt-10 flex justify-evenly'>
                                {data.members.map((d) => (
                                    <div key={d.name} style={{ backgroundImage: `url(${d.img})` }}
                                        className='hover:shadow-2xl card h-[320px] w-[238px] bg-no-repeat bg-cover bg-center text-black rounded-xl flex flex-col justify-end items-center m-4 relative overflow-hidden group'>
                                        <div className="lol h-[80px] w-full bg-black bg-opacity-50 p-4 flex flex-col justify-end items-center transition-opacity duration-300 group-hover:bg-opacity-0">
                                            <div className='flex flex-col justify-center items-center'>
                                                <div className='diss text-xl text-amber-400 font-bold flex justify-center items-center gap-4 py-1'>
                                                    {d.name}
                                                </div>
                                                <div className='diss text-gray-50 font-bold flex justify-center items-center gap-4'>
                                                    {d.desig}
                                                </div>
                                            </div>
                                            <div className='diss2 flex justify-between items-center gap-4'>
                                                <a href={d.insta} className='py-1 -mt-14'>
                                                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                                                </a>
                                                <a href={d.linkedin} className='py-1 -mt-14'>
                                                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            })}

        </>

    )
}

export default TeamComp;