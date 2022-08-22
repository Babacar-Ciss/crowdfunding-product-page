import "./MenuHamburger.scss"
import { useRef, useEffect } from "react";
import gsap from "gsap";

const MenuHamburger = () => {

    const menuHamburgerRef = useRef(null)

    useEffect (() => {
        gsap.fromTo(menuHamburgerRef.current, {y: "-50vh"}, {y : "-9vh",  duration : 1} )
    })

    return (
        <div className="MenuHamburger">
            <div className="MenuHamburger__container">
                <div className="modal" ref={menuHamburgerRef}>
                    <nav>
                        <ul>
                            <li>About</li>
                            <li>Discover</li>
                            <li>Get Started</li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default MenuHamburger;