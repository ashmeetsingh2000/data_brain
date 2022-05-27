import React, { useState, useEffect } from 'react'
import navstyle from './navbar.module.css'

import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className={navstyle.Navigation_bar}>
            <div className={navstyle.link_Container}>
                <NavLink exact to="/apicall" className={({ isActive }) => isActive ? navstyle.active : navstyle.notactive}>
                    Api Call
                </NavLink>
                <NavLink exact to="/" className={({ isActive }) => isActive ? navstyle.active : navstyle.notactive}>
                    Form
                </NavLink>
                <NavLink exact to="/e-com" className={({ isActive }) => isActive ? navstyle.active : navstyle.notactive}>
                    E-Commerce
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar