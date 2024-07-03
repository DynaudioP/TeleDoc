import MaleFemaleDoctor from '../assets/Group-86.svg'
import React from 'react'

function AboutUs() {
  return (
    <main id="about-us">
        <div id="about-us-left">
            <div>
                <h1>About Us</h1>
            </div>
            <div name="about-us-content">
                <p>Teledoc merupakan website kesehatan yang memberikan solusi kesehatan lengkap dan terpercaya untuk memenuhi kebutuhan kesehatan kamu dan keluarga.</p>
            </div>
        </div>
        <div id="about-us-right">
            <div>
                <img src={MaleFemaleDoctor} alt="Male-Female-Doctor" />
            </div>
        </div>
    </main>
  )
}

export default AboutUs