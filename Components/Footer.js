import React from 'react';
import logo from '../Images/logo.png';
import mail from '../Images/mail.png';
import {Link} from "react-router-dom";
import SocialFollow from "./socialFollow"

function Footer(){
    return(
            <div className="flex bg-slate-200 py-10">
                <div className="flex-col lg:ml-24 sm:ml-16 lg:px-24 py-6 w-1/3 md:px-16 sm:px-8">
                    <img src={logo} alt="Esummit-logo" className="w-16 " />
                    <h1 className="px-3 py-4 lg:text-xl md:text-lg sm:text-md">Esummit'24</h1>
                     <SocialFollow />
                </div>
                <div className="w-1/3 lg:px-24 py-6 md:px-16 sm:px-8">
                    <ul className="list-none flex-col space-y-3">
                        <li className="lg:text-lg md:text-md sm:text-sm"><Link to="/">Home</Link></li>
                        <li className="lg:text-lg md:text-md sm:text-sm"><Link to="/workwithus">Work with Us</Link></li>
                        <li className="lg:text-lg md:text-md sm:text-sm"><Link to="/ourteam">Our Team</Link></li>
                        <li className="lg:text-lg md:text-md sm:text-sm"><Link to="/sponsorship">Sponsorship</Link></li>
                        <li className="lg:text-lg md:text-md sm:text-sm"><Link to="/faq">FAQ</Link></li>
                        <li className="lg:text-lg md:text-md sm:text-sm"><Link to="/aboutevent">About Event</Link></li>
                    </ul>
                </div>
                <div className="w-1/3 lg:px-24 py-6 mr-24 md:px-16 sm:px-8">
                    <h1 className="flex-col lg:text-xl md:text-lg">Contact Us</h1>
                    <h1 className="flex lg:text-md md:text-sm sm:text-[0.6rem]"><img src={mail} alt="mail" className="w-6 py-1" />esummit24@gmail.com</h1>
                    <h1 className="flex-col lg:text-xl md:text-lg pt-8">Address</h1>
                    <h1 className="flex text-md py-3">New Delhi, India</h1>
                </div>
            </div>
    );
}
export default Footer;
