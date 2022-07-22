import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from './../../constants/images';

import './Navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.gericht} alt='logo-images' />
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'>
                    <a href='#home'>Home</a>
                </li>
                <li className='p__opensans'>
                    <a href='#about'>About</a>
                </li>
                <li className='p__opensans'>
                    <a href='#menu'>Menu</a>
                </li>
                <li className='p__opensans'>
                    <a href='#awards'>Awards</a>
                </li>
                <li className='p__opensans'>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <div className='app__navbar-login'>
                <a href='#login' className='p__opensans'>
                    Login/Registration
                </a>
                <div />
                <a href='/' className='p__opensans'>
                    Book Table
                </a>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu
                    color='#fff'
                    fontSize={27}
                    onClick={() => setToggle(true)}
                />
                {toggle && (
                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <MdOutlineRestaurantMenu
                            className='overlay__close'
                            onClick={() => setToggle(false)}
                        />
                        <ul className='app__navbar-smallscreen_links'>
                            <li className='p__opensans'>
                                <a href='#home' onClick={() => setToggle(false)}>Home</a>
                            </li>
                            <li className='p__opensans'>
                                <a href='#about' onClick={() => setToggle(false)}>About</a>
                            </li>
                            <li className='p__opensans'>
                                <a href='#menu' onClick={() => setToggle(false)}>Menu</a>
                            </li>
                            <li className='p__opensans'>
                                <a href='#awards' onClick={() => setToggle(false)}>Awards</a>
                            </li>
                            <li className='p__opensans'>
                                <a href='#contact' onClick={() => setToggle(false)}>Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
