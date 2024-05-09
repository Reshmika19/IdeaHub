import { Link, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import HomePosts from "../components/HomePosts"
import Loader from "../components/Loader"
import banner from "./ideafactory.jpeg";
import "../styles/about.css";


const About= () => {

return (
    <div>
        <Navbar/>
        {/* Banner Section */}
        <section className="banner-section">
                <img src={banner} alt="Banner" />
            </section>

            {/* About Us Section */}
            <section className="about-section">
                <div className="container">
                    <h2 className="section-heading">About Us</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3 className="section-subheading">Our Mission</h3>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3 className="section-subheading">Our Team</h3>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </section>
        <Footer/>
    </div>
  )
}

export default About
