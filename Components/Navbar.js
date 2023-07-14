import logo from "../Images/logo.png";
import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
    <div>
        <div className="grid grid-col-1 sm:flex md:flex lg:flex justify-between px-8 bg-white">    
            <div className="">
                <img src={logo} alt="Earth" className="w-8 sm:w-12 md:w-16 lg:w-16" />
            </div>
            <div id="buttons" className="sm:flex-row py-4 space-x-4 cursor-pointer">
                <button id="home" className="text-sm sm-text-md md:text-lg lg:text-xl text-black hover:border-2 hover:border-slate-800 hover:px-2 rounded-xl"><Link to="/">Home</Link></button>
                <button className="text-sm sm-text-md md:text-lg lg:text-xl text-black hover:border-2 hover:border-slate-800 hover:px-2 rounded-xl"><Link to="/workwithus">Work with Us</Link></button>
                <button className="text-sm sm-text-md md:text-lg lg:text-xl text-black hover:border-2 hover:border-slate-800 hover:px-2 rounded-xl"><Link to="/ourteam">Our Team</Link></button>
                <button className="text-sm sm-text-md md:text-lg lg:text-xl text-black hover:border-2 hover:border-slate-800 hover:px-2 rounded-xl"><Link to="/sponsorship">Sponsorship</Link></button>
                <button className="text-sm sm-text-md md:text-lg lg:text-xl text-black hover:border-2 hover:border-slate-800 hover:px-2 rounded-xl"><Link to="/faq">FAQ</Link></button>
                <button className="text-sm sm-text-md md:text-lg lg:text-xl text-black hover:border-2 hover:border-slate-800 hover:px-2 rounded-xl"><Link to="/aboutevent">About Event</Link></button>
            </div>
            <button className="text-sm sm-text-md md:text-lg lg:text-xl text-black hover:border hover:border-slate-800 hover:px-1 rounded-xl hover:py-2 py-4 hover:my-2 hover:text-lg"><Link to="/contactus">Contact Us</Link></button>
        </div>
        <hr className="border-0" />
    </div>
    );
}
export default Navbar;