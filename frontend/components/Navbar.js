import { useState } from "react";
import React from "react";
import Link from "next/link";
const Navbar1 = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <Link href="/"><img src="vssut.png" alt="vssut logo" />SPORTS SOCIETY</Link>
                </div>
                <div className="burger-menu" onClick={updateMenu} >
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                <ul className={menu_class}>
                    <li><a href="/#about-us">About Us</a></li>
                    <li><a href="/#gallery">Gallery</a></li>
                    <li><a href="/#events">Events</a></li>
                    <li><a href="/#contact-us">Administration</a></li>
                    <button>Register</button>
                </ul>
            </nav>
            
        </>
   
    );
}
 
export default Navbar1;
