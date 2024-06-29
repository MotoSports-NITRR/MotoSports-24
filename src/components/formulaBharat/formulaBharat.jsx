import '../globalStyles.css'
import './formulaBharat.css'

function FormulaBharat() {

    return (
        <>
            <div className="formulaBharatPage">
                <div className="formulavideoContent">
                    <div className="formulaVideo">
                        <video src="/nismodesktop.mp4" autoPlay loop></video>
                    </div>
                    <div className="path">
                        <svg width="27" height="41" viewBox="0 0 27 41" fill="none" xmlns="http://www.w3.org/2000/svg" role="none" class="slide">
                            <path class="path-1" d="M1 1L13.5001 14.3334L26.0002 1" stroke="#fff" stroke-width="2"></path>
                            <path class="path-2" d="M1 14.3339L13.5001 27.6673L26.0002 14.3339" stroke="#fff" stroke-width="2"></path>
                            <path class="path-3" d="M1 27.6663L13.5001 40.9998L26.0002 27.6663" stroke="#fff" stroke-width="2"></path>
                        </svg>
                    </div>
                    <div className="frontHeadingContent">
                        <h1 className='' style={{color:'red', fontWeight:'700'}}>Motosports</h1>
                        <h1>Formula Bharat</h1>
                    </div>
                </div>
                <div className="fbcontent">
                    <p>Ayush Mishra</p>
                </div>
            </div>
        </>
    )
}

export default FormulaBharat