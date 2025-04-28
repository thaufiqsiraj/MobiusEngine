import HeartShake from "./assets/HeartShake.tsx";
import ProfileGlyph from "./assets/ProfileGlyph.tsx";
import Star from "./assets/Star.tsx";

export default function SectionFive(){
    return(
        <div className="sectionFive">
            <h2 className="sFive-h2">Why Choose Us?</h2>
            <div>
                <div className="sFive-c1">
                   <div className="heart-shake"> <HeartShake/></div>
                    <h4>Tried, Tested, Trusted</h4>
                    <p>Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.</p>
                </div>
                <div className="sFive-c2">
                    <div className="profile-glyph"><ProfileGlyph/></div>
                    <h4>Real People, Real Help</h4>
                    <p>A hands-on team that actually cares — guiding you through every twist in your career path.</p>
                </div>
                <div className="sFive-c3">
                    <div className="star"><Star/></div>
                    <h4>Beat the Line</h4>
                    <p>We search, shortlist, and apply for you, so your name shows up first — every single day.</p>
                </div>
            </div>
        </div>
    )
}