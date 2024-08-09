import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import './memberCard.css'

function MemberCard(data) {
    return (
        <>
            <div key={data.name} style={{ backgroundImage: `url(${data.img})` }}
                className=' memberCard hover:shadow-2xl card bg-no-repeat bg-cover bg-center h-[380px] w-80 text-black rounded-xl flex flex-wrap flex-col justify-end items-center relative overflow-hidden group'>
                <div className="lol h-[110px] w-full bg-black bg-opacity-50 p-4 flex flex-col flex-wrap justify-center items-center transition-opacity duration-300 group-hover:bg-opacity-0">
                    <div className=''>
                        <div className='diss text-2xl text-amber-400 flex justify-center items-center gap-4 py-1'>
                            <p>
                                {data.name}
                            </p>
                        </div>
                        <div className='diss text-white text-xl flex justify-center items-center gap-4'>
                            {data.desig}
                        </div>
                    </div>

                    <div className='diss2 flex justify-between items-center gap-4'>
                        <a href={data.insta} className='py-1 -mt-14'>
                            <FontAwesomeIcon className='icon' icon={faInstagram} />
                        </a>

                        <a href={data.linkedin} className='py-1 -mt-14'>
                            <FontAwesomeIcon className='icon' icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberCard;