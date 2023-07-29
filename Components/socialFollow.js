import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
    <ul className="flex flex-col md:flex-row space-x-4 md:py-6 mx-2y">
      <a href="https://www.youtube.com"
        className="ml-3">
        <FontAwesomeIcon icon={faYoutube} className="hover:animate-bounce"  size="2x" />
      </a>
      <a href="https://www.facebook.com"
        className="hover:animate-bounce">
        <FontAwesomeIcon icon={faFacebook}  size="2x" />
      </a>
      <a href="https://www.twitter.com" className="hover:animate-bounce">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com"
        className="hover:animate-bounce">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </ul>
    </div>  
  );
}