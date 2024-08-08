import logo from "../assets/Logo.svg";
import NavBar from "./Navbar";


function Header() {
    return(
        <header className="header">
            <img id="main-logo" src={logo} alt="Little Lemon logo" width="148" height="100"/>
            <NavBar/>
                
      </header>
    );
}; 

export default Header;