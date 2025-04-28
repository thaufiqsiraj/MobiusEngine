import Nav from "./Nav.tsx";
import GetStarted from "./assets/GetStarted.tsx";

export default function SectionOne() {
    return(
        <div className="sectionOne">
        <Nav/>
            <h1 className="land">Land job interviews
                10x faster</h1>
            <p className="sOp">Custom-built resumes that match your goals, keywords, and recruiter expectations.</p>
           <div className='gsO'> <GetStarted/> </div>
        </div>
    )
}