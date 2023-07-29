import logo from "../Images/logo.png";
import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
    <div>
        <div className="flex flex-col md:flex-row justify-between px-8 text-white bg-green-100 bg-opacity-40">    
            <div className="">
                <img src={logo} alt="Earth" className="w-16" />
            </div>
            <div id="buttons" className="flex flex-col md:flex-row md:py-4 space-x-4 cursor-pointer">
                <button id="home" className="ml-4 md:ml-0 w-fit text-md md:text-lg lg:text-xl text-green-800 hover:border-2 hover:border-green-800 hover:text-white hover:bg-green-600 hover:px-2 rounded-xl"><Link to="/">Home</Link></button>
                <button className="w-fit text-md md:text-lg lg:text-xl text-green-800 hover:border-2 hover:border-green-800 hover:px-2 hover:text-white hover:bg-green-600 rounded-xl"><Link to="/aboutevent">About Event</Link></button>
                <button className="w-fit text-md md:text-lg lg:text-xl text-green-800 hover:border-2 hover:border-green-800 hover:px-2 hover:text-white hover:bg-green-600 rounded-xl"><Link to="/ourteam">Our Team</Link></button>
                <button className="w-fit text-md md:text-lg lg:text-xl text-green-800 hover:border-2 hover:border-green-800 hover:px-2 hover:text-white hover:bg-green-600 rounded-xl"><Link to="/workwithus">Work with Us</Link></button>
                <button className="w-fit text-md md:text-lg lg:text-xl text-green-800 hover:border-2 hover:border-green-800 hover:px-2 hover:text-white hover:bg-green-600 rounded-xl"><Link to="/sponsorship">Sponsorship</Link></button>
                <button className="w-fit text-md md:text-lg lg:text-xl text-green-800 hover:border-2 hover:border-green-800 hover:px-2 hover:text-white hover:bg-green-600 rounded-xl"><Link to="/faq">FAQ</Link></button>
            </div><hr className="md:hidden" />
            <button className="text-sm sm-text-md md:text-lg lg:text-xl text-green-800 hover:border hover:border-green-800 hover:text-white hover:bg-green-600 hover:px-1 rounded-xl hover:py-2 py-4 hover:my-2 hover:text-lg"><Link to="/contactus">Contact Us</Link></button>
        </div>
        <hr className="border-0" />
    </div>
    );
}
export default Navbar;