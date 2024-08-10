import "./eventCard.css"

const EventCard = ({ heading, subHeading, description, imgSrc }) => {
    return (
        <div className='lol transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4'>
            {imgSrc && <img
                src={imgSrc}
                alt={heading}
                className='rounded-xl mb-4'
                style={{
                    width: '100%',
                    height: 'auto',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                    filter: 'sepia(0.5)',
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.style.filter = 'none';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.opacity = 0.7;
                    e.currentTarget.style.filter = 'sepia(0.5)';
                }}
            />
            }
            <div className='lo2 lol font-bold text-lg border-b'> {heading} </div>
            <div className='lol text-sm font-black w-52'> {subHeading} </div>
            <div className='lol text-sm text-gray-700 w-52'> {description} </div>
        </div>
    )
}

export default EventCard;