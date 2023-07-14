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
    <ul className="flex space-x-4 py-6 mx-2 mix-blend-overlay">
      <a href="https://www.youtube.com"
        className="">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com"
        className="">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com"
        className="">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </ul>
    </div>  
  );
}