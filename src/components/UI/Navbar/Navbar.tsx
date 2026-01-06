import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to='/'>Custom websites</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to='/about-us' end>About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/contacts' end>Contacts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;