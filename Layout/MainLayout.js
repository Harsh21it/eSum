import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import VideoPlay from '../Components/Video'

function MainLayout({children}) {
  return (
    <div>
        <Navbar />
        <VideoPlay />
        <div>{children}</div>
        <Footer />
    </div>
  )
}

export default MainLayout
