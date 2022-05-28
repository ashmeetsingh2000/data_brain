import React from 'react'

import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navigation_bar">
            <div className="link_Container">
                <NavLink exact to="/apicall" className={({ isActive }) => isActive ? "navactive" : "notactive"}>
                    Api Call
                </NavLink>
                <NavLink exact to="/" className={({ isActive }) => isActive ? "navactive" : "notactive"}>
                    Form
                </NavLink>
                <NavLink exact to="/e-com" className={({ isActive }) => isActive ? "navactive" : "notactive"}>
                    E-Commerce
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar