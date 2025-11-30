import "../styles/global.css";

export default function Navbar(){
    return(
        <nav className="m-5 flex justify-center items-center">
            <img src="src/assets/logo.png" alt="KPN logo" className="logo-navbar"></img>
            <ul className="nav-voices flex gap-5">
                <li>Home</li>
                <li>IL PARK</li>
                <li>LA SALA PROVE</li>
                <li>Contatti</li>
            </ul>
        </nav>
    )
}