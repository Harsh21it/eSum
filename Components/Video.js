import React from "react";
import earth from '../Images/Video/Earth.mp4';

function VideoPlay()
{
    return(
        <div className="flex justify-evenly bg-white">
            <video className="w-screen" controls autoPlay loop>
                <source src={earth} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoPlay;