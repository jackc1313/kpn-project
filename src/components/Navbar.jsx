import "../styles/global.css";

export default function Navbar(){
    return(
        <nav className="m-5 flex justify-between gap-10 items-center lg:p-5 lg:pr-40 relative box-shadow-bottom">
            <img src="src/assets/logo.png" alt="KPN logo" className="logo-navbar"></img>
            <ul className="nav-voices-font flex gap-10 text-xl text-lime-400 font-semibold italic uppercase">
                <li>Home</li>
                <li>il park</li>
                <li>la sala prove</li>
                <li>Contatti</li>
            </ul>
        </nav>
    )
}