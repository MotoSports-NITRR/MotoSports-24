import './phase.css'

function Phase(...data) {
    // console.log(data);
    let img = data[0].img; 
    return (
        <>
            <div className={"phase" + data[0].index + " my-2" + " bgContain"}    >
                <h1 className='font-medium text-xl my-2'> <span>{data[0].name}</span> - {data[0].header}</h1>
                <div className="roundCover flex">
                    <img src={img} alt="" />
                    <p className='text-xl'>
                        {data[0].para}
                    </p>
                </div>
            </div >
        </>
    )
}

export default Phase;