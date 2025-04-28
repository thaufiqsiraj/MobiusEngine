import LogoWhite from "./assets/Logo/White.tsx";
import GetStarted from "./assets/GetStarted.tsx";

export default function Nav() {
    return(
        <div className="nav">
            <LogoWhite/>
            <a>Home</a>
            <a>About Us</a>
            <a>Plans</a>
            <a>Testimonials</a>
            <a>Privacy Policy</a>
            <a>More</a>
            <GetStarted/>
        </div>
    )
}