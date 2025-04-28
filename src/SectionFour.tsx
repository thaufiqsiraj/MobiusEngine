import PlayButton from "./assets/PlayButton.tsx";

export default function SectionFour() {
    return(
            <div className="sectionFour">
                <h2 className="fourH2">What our clients have to say</h2>
                <div>
                    <div className="sectionFour-container1">
                        <div className="sectionFour-container1-1">
                            <div className="playbtn-1"><PlayButton/></div>
                        </div>
                        <div className="sectionFour-container1-2">
                            <p>Holly is a senior executive who got over 10 job interviews and an offer she accepted</p>
                        </div>
                    </div>
                    <div className="sectionFour-container2">
                        <div className="sectionFour-container2-1">
                            <div className="playbtn-2"><PlayButton/></div>
                        </div>
                        <div className="sectionFour-container2-2">
                            <p>Holly is a senior executive who got over 10 job interviews and an offer she accepted</p>
                        </div>
                    </div>
                    <div className="sectionFour-container3">
                        <div className="sectionFour-container3-1">
                            <div className="playbtn-3"><PlayButton/></div>
                        </div>
                        <div className="sectionFour-container3-2">
                            <p>Holly is a senior executive who got over 10 job interviews and an offer she accepted</p>
                        </div>
                    </div>
                </div>
                <button className="sectionFour-b1">More Customer testimonials</button>
                <button className="sectionFour-b2">Get Started</button>
            </div>
    )
}