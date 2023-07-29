import React from "react";
import logo from "../Images/logo.png";
import mail from "../Images/mail.png";
import { Link } from "react-router-dom";
import SocialFollow from "./socialFollow";

function Footer() {
  return (
    <div className="grid grid-cols-2 md:flex bg-green-50 py-10 text-green-800">
      <div className="flex-col lg:ml-24 py-6 w-auto md:px-16">
        <img src={logo} alt="Esummit-logo" className="w-16 " />
        <h1 className="px-3 py-4 lg:text-xl md:text-lg sm:text-md">
          Esummit'24
        </h1>
        <SocialFollow />
      </div>
      <div className="grid grid-rows-2 md:flex">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 py-6 md:ml-64 md:mx-auto text-teal-800">
          <div className="">
            <ul className="list-none flex-col space-y-3">
              <li className="lg:text-lg md:text-md text-sm hover:animate-bounce">
                <Link to="/">Home</Link>
              </li>
              <li className="lg:text-lg md:text-md text-sm hover:animate-bounce">
                <Link to="/workwithus">Work with Us</Link>
              </li>
              <li className="lg:text-lg md:text-md text-sm hover:animate-bounce">
                <Link to="/ourteam">Our Team</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-none flex-col space-y-3">
              <li className="lg:text-lg md:text-md text-sm hover:animate-bounce">
                <Link to="/sponsorship">Sponsorship</Link>
              </li>
              <li className="lg:text-lg md:text-md text-sm hover:animate-bounce">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="lg:text-lg md:text-md text-sm hover:animate-bounce">
                <Link to="/aboutevent">About Event</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-auto md:py-6 md:ml-80 text-green-800">
          <h1 className="flex-col lg:text-xl md:text-lg">Contact Us</h1>
          <h1 className="flex lg:text-md md:text-sm sm:text-[0.6rem]">
            <img src={mail} alt="mail" className="w-10" />
            esummit24@gmail.com
          </h1>
          <h1 className="flex-col lg:text-xl md:text-lg pt-8">Address</h1>
          <h1 className="flex text-md py-3">New Delhi, India</h1>
        </div>
      </div>
    </div>
  );
}
export default Footer;
