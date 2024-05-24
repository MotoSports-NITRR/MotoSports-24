import './initialHeader.css'

function InitializeHeader(...data) {
    let bd =  "black"
    if (data[0].bdColor){
        bd = data[0].bdColor;
    }
    let bdColor = "1px solid " + bd;
    
    return (
        <>
            <div className="initialHeader">
                <div className="headerText" style={{"color" : data[0].color}}>
                    {data[0].header}
                </div>
                <span style={{"border" : bdColor}}></span>
            </div>
        </>
    )
}

export default InitializeHeader;