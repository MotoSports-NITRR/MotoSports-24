import React, { Fragment } from 'react';
import EventCard from '../eventCard/eventCard';

//Timeline
const Timeline = ({ events }) => {
    return (
        <>
            <div className="flex" style={{width: '50%'}}>
                <div className="flex flex-col gap-y-3 w-full my-4">
                    <Circle />

                    {events.map((event, key) => {
                        return <Fragment key={key}>
                            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                                {event.direction === 'left' ? (
                                    <EventCard heading={event.heading} subHeading={event.subHeading} description={event.description} />
                                ) : (
                                    <div></div>
                                )}

                                <Pillar />

                                {event.direction === 'right' ? (
                                    <EventCard heading={event.heading} subHeading={event.subHeading} description={event.description} />
                                ) : (
                                    <div></div>
                                )}
                            </div>

                            {key < (events.length - 1) && <Circle />}
                        </Fragment>
                    })}
                    <Circle />
                </div>
            </div>
        </>
    )
}

const Circle = () => {
    return (
        <div className='bg-gradient-to-r from-amber-400 to-amber-900 rounded-full w-4 h-4 bg-blue-500 mx-auto'></div>
    )
}


const Pillar = () => {
    return (
        <div className='bg-gradient-to-b from-amber-400 to-amber-900 rounded-t-full rounded-b-full w-2 h-full bg-amber-500 mx-auto'></div>
    )
}


export default Timeline;