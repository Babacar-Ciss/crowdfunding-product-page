import "./Header.scss";
import crowdFoundingLogo from "../../assets/images/logo.svg";
import { GlobalContext } from "../../App";
import { useState, useContext } from "react";

const Header = () => {

    const {isMenuHamburgerChecked, isMenuHamburgerCheckedHandler} = useContext(GlobalContext);

    return(
        <div className="Header">
            <div className="Header__container">
                <img src={crowdFoundingLogo} alt="logo of crowdFounding" />
                <nav className="Header__container--navigation">
                    <ul>
                        <li> <a href="#"> About </a></li>
                        <li> <a href="#"> Discover </a></li>
                        <li> <a href="#"> Get Started </a></li>
                    </ul>
                </nav>
                {
                    !isMenuHamburgerChecked ? <svg onClick={isMenuHamburgerCheckedHandler} className="Header__container--hamburger-nav" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
                                            : <svg onClick={isMenuHamburgerCheckedHandler} className="Header__container--hamburger-nav" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>
                }
                
            </div>
        </div>
    )
}

export default Header;