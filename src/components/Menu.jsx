import React, { useState } from "react";
import data from '../utils/data.json'
import { Link } from "react-router-dom";
import '../sass/menu.scss'
import {HiMenuAlt3} from 'react-icons/hi'

const Menu = () => {

    const [isOpen, setOpen] = useState(false)

    const handleOpenMenu = () => {
        setOpen(!isOpen)
    }

    return ( 
        <nav className='nav'>
            {/* MENU DESKTOP */}
            <div className='nav-menu' style={{right: isOpen ? '0': '-100%'}}>
                <ul className='list-airlines' >
                {
                    data.map(airline => (
                        <li key={airline.id} className='airline'>
                            <Link to={`/${airline.name}`}  className='airline-item' style={{textDecoration: 'none'}}>{airline.name}</Link>
                        </li>
                    ))
                }
                </ul>
            </div>
            {/* MENU MOBILE */}
            <button className='nav-toggle' onClick={handleOpenMenu}>
                <HiMenuAlt3/>
            </button>
        </nav>
    );
}

export default Menu;