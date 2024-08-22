import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return ( <>
    <div>
        <NavLink to="/">
        <p>Home</p>
        </NavLink>

        <NavLink to="/recipes">
        <p>Rezepte</p>
        </NavLink>

        <NavLink to="/ueberuns">
        <p>Über Uns</p>
        </NavLink>    
    </div>
    
    </> );
}
 
export default Nav;