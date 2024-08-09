
const EventCard = ({ heading, subHeading, description }) => {
    return (
        <div className='lol transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4'>
            <div className='lo2 lol font-bold text-lg border-b'> {heading} </div>
            <div className='lol text-sm font-black w-52'> {subHeading} </div>
            <div className='lol text-sm text-gray-700 w-52'> {description} </div>
        </div>
    )
}

export default EventCard;