import { useEffect, useState, useRef } from "react";

export default function Navbar() {
    
    // grabbing the menu
    const mobileNavMenu = useRef(null)
    
    // brings the menu in
    const handleMobileNav = (event) => {
        if (event.target.id === 'nav-button') {
          mobileNavMenu.current.style.display = 'flex'
          mobileNavMenu.current.style.right = '0%'
        }
        
        if(event.target.id === "exit-mobile-nav") {
          mobileNavMenu.current.style.right = '-50%'
          mobileNavMenu.current.style.display = 'none'
        }
    }

    useEffect(()=> {
      
    })
    
  return (
    <>
      <nav id="nav">
        <h2>WEIGHTWORLD</h2>
        <ul id="nav-links">
          <li><a href="#">Our Locations</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Training</a></li>
          <li><a href="#">Amenities</a></li>
        </ul>
        {/* nav button must have id of #nav-button */}
        <h1 id="nav-button" onClick={handleMobileNav} style={{color: 'white'}}>&#9776;</h1>
        <button type="button" id="join-button" onClick={handleMobileNav}>JOIN NOW</button>
      </nav>
      <section ref={mobileNavMenu} id="nav-mobile-menu">
        <ul>
          <li style={{color: 'white', borderBottom: "white solid 2px"}}>NAV</li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Training</a></li>
          <li><a href="#">Amenities</a></li>
        </ul>
        <button id="exit-mobile-nav" onClick={handleMobileNav}>X</button>
      </section>
    </>
  );
}
