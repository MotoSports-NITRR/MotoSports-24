import '../globalStyles.css'
import carImgOne from '../assets/images/finalizedCarImg/homeCarOne.png'

function Home() {

    return (
        <>
            <main className='flex flex-col justify-between items-center bg-modestBrown'>
                <div id='introDiv' className="w-85vw box-border flex justify-evenly items-center" style={{height: 'calc(100vh - 128px)'}}>
                    <div className='w-650'>
                        <h1 className='text-6xl font-albulaHeavy text-blackbean'>Official <br /><span className="text-brown">Motosports Club</span> of <br /><span className="text-brown">NIT, Raipur</span></h1>
                    </div>
                    <img src={carImgOne} alt="Motosport Car Image One" className='w-600' />
                </div>

                <div id='timelineDiv' className=" bg-slate-500 w-85vw box-border" style={{height: 'calc(100vh - 128px)'}}>

                </div>

                <div id='galaryDiv' className="w-85vw box-border" style={{height: 'calc(100vh - 128px)'}}>

                </div>

                <div id='sponsorDiv' className="w-85vw box-border" style={{height: 'calc(100vh - 128px)'}}>

                </div>
            </main>
        </>
    )
}
  
export default Home