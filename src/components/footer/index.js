import React from "react";
import './style.css'

const Footer=()=>{
return(

    <>

<footer className="footer">
    <div className="footer-content">
        <div className="footer-logo">
            <a href="/">Fooodish</a>
            <h4>Continue fooodish 2023 all rights reserved</h4>
        </div>
        <div className="footer-navigation">
            <ul className="footer-menu">
                <li>
                    <a href="/">MENU</a>
                    <p>Home</p>
                    <p>Offers</p>
                    <p>Services</p>
                    <p>About Us</p>
                </li>
                <li>
                    <a href="/">INFORMATION</a>
                    <p>Menu</p>
                    <p>Quality</p>
                    <p>Make a choice</p>
                    <p>Salad with vegetable</p>
                    <p>Fast delivery</p>
                    <p>Subscribe</p>
                </li>
                <li>
                    <a href="/">CONTACT</a>
                    <p>+250 785 456 345</p>
                    <p>Explore</p>
                    <p>Info@foodish.com</p>
                    <p>1245, New York, USA</p>
                </li>
                
            </ul>
        </div>
      
    </div>
   
</footer>


    </>
)





}

export default Footer