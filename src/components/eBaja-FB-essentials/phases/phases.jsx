import Timeline from "../timeline/timeline";

function Phases() {
    
//Timeline-1 Data about Phases
const phases = [
    {
        heading: "PHASE 1",
        subHeading: "Quiz Session, Formula Bharat 2025",
        description: "The first leg of the event is Phase 1-Quiz Session which examines participant teams on the basis of the Rule Book and assigns Car number based on ranking",
        direction: "left"

    },
    {
        heading: "PHASE 2",
        subHeading: "Static Events",
        description: "The second leg is based on Static Events which involve presenting Vehicle Design Reports, a Business Presentation, and Cost and Manufacturing Reports.",
        direction: "right"

    },
    {
        heading: "PHASE 3",
        subHeading: "Physical Round, BAJA SAEINDIA 2025",
        description: "The final leg of the event is Phase 3, the Physical round, which include Technical Inspection, Skidpad, Acceleration, Autocross, and Endurance. ",
        direction: "left"

    },

]
    
    return (
        <div className="flex">
            <div style={{ width: '50%', height: 'auto' }}>
                <img src=".\src\components\formulabharat\pics\fbcar.png" alt="" className='img' />
            </div>
            <Timeline events={phases} />
        </div>
    )
}

export default Phases;