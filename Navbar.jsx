// import React from 'react'
// import "./style.css"
// import { Link } from 'react-router-dom'

// function Navbar() {
//     return (
//         <nav className='my-nav'>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
//         </nav>
//     )
// }

// export default Navbar



import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom'

function Navbar() {

    // css style function
    const navStyle = ({ isActive }) => {
        return {
            fontSize: isActive ? "25px" : "20px",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "",

        };
    };

    return (
        <nav className='my-nav'>
            <NavLink style={navStyle} to="/">Home</NavLink>
            <NavLink style={navStyle} to="/about">About</NavLink>
            <NavLink style={navStyle} to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Navbar
