import React from 'react'
import './executives.css'

function Executives(data) {

    return (
        <>
            <div className="resp -mt-20 mb-24 flex justify-around flex-wrap">
                {
                    Object.keys(data).map((key) => (
                        <>
                            <div className='mx-16'>
                                <h1 className='text-4xl my-10 exe'>{key}</h1>
                                <ul>
                                    {
                                        data[key].map((k) => (
                                            <li>{k}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </>
                    ))
                }
            </div>
        </>

    )
}
export default Executives;