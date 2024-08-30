import { NavLink } from 'react-router-dom'
import logo from '../assets/Destiny.svg'
import closeIcon from '../assets/close-icon.svg'
import "./Navbar.css"
import { useState } from 'react'


export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)

    return (
        <div className='nav-div'>
            <nav>
                <img src={logo}></img>
                <ul className='desktop-links'>
                    <li><NavLink to={'/'}>home</NavLink></li>
                    <li><NavLink to={'#about'}>about</NavLink></li>
                    <li><NavLink to={'#work'}>work</NavLink></li>
                    <li><NavLink to={'#contact'}>contact</NavLink></li>
                </ul>
                {
                    dropdown ?
                    <div className='dropdown-menu'>
                        <img src={closeIcon} width={30} className='close-icon' onClick={() => {setDropdown(false)}}></img>
                        <ul>
                            <li onClick={() => setDropdown(false)}><NavLink to={'/'}>home</NavLink></li>
                            <li onClick={() => setDropdown(false)}><NavLink to={'#about'}>about</NavLink></li>
                            <li onClick={() => setDropdown(false)}><NavLink to={'#work'}>work</NavLink></li>
                            <li onClick={() => setDropdown(false)}><NavLink to={'#contact'}>contact</NavLink></li>
                        </ul>
                    </div>
                    :
                    <div className='ham-menu' onClick={() => setDropdown(true)}>
                        {/* <img src={logo} height={46}></img> */}
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                }
            </nav>
        </div>
    )
}
