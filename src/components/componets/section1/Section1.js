
import sm4 from "../../../assets/kalai-port/sm4.png";
import purush from "../../../assets/kalai-port/kal-imag1.png";
import Mobilesection1 from "./components/mobilesection1/Mobilesection1";
import { Link } from "react-scroll";

import experiencet from "../../../assets/kalai-port/experiencet.png";
import skillst from "../../../assets/kalai-port/skillst.png";
import aboutst from "../../../assets/kalai-port/aboutst.png";
import educationt from "../../../assets/kalai-port/educationt.png";
import contactust from "../../../assets/kalai-port/contactt.png";
import activet from "../../../assets/kalai-port/activet.png";
import React from "react";
import "./styles/Section1.scss";
import vts2 from "../../../assets/kalai-port/vts2.gif";
import { NavLink, useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typewriter from 'typewriter-effect';
function Section1({ color, dark, setdark }) {
    const history = useHistory();
    const ContactTest = () => toast(`ContactMe:8778377119`);
    return (
        <>
            <div className="main-home-page d-none d-lg-block">
                <ToastContainer />
                <div className="inside-home-page">
                    <div className="top-navbars">
                        <div className="name-section">
                            kalai
                        </div>
                        <div className="list-section">

                            <Link>
                                <span>
                                    Home
                                </span>
                            </Link>
                            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                                <span>
                                    AboutUs
                                </span>
                            </Link>
                            <Link to="education" spy={true} smooth={true} offset={50} duration={500}>
                                <span>
                                    Educations
                                </span></Link>
                            <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
                                <span>
                                    Experience
                                </span></Link>
                            <Link to="skill" spy={true} smooth={true} offset={50} duration={500}>
                                <span>
                                    Skills
                                </span></Link>
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                                <span>
                                    Contactus
                                </span>
                            </Link>
                            <NavLink to="/animation" spy={true} smooth={true} offset={50} duration={500} className="links">
                                <span>
                                    Animation
                                </span>
                            </NavLink>
                        </div>
                        <div className="dark-section">
                            <div class="App App--Day" id="app" >
                                <label for="switch" class="Switch">
                                    <input id="switch" type="checkbox" class="Switch__CheckBox" onClick={() => setdark(!dark)} />
                                    <span class="Switch__Label Switch__Label--Day">DAY</span>
                                    <div class="Switch__Slider">
                                        <div class="Switch__SliderDot"></div>
                                    </div>
                                    <span class="Switch__Label Switch__Label--Night">NIGHT</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="another-section-split">
                        <div>
                            <h1 className="kalai">kalai</h1>
                        </div>
                        <div className="left-section1-home">
                            <div className="image1">
                                <img src={vts2} className="section-image" />
                            </div>
                            <div className="text-button-section mt-5">
                                <h1
                                    className="hy mb-1"
                                    style={{
                                        color: color,
                                        fontWeight: 700,
                                        zIndex: 800000000000000000000000000000000000000000000000000000000000000,
                                        position: "relative",
                                    }}
                                >
                                    Hello I'Am
                                </h1>
                                <div>
                                    <h3 className="kalais">Kalaisurya</h3>
                                </div>
                                <div className='typesection mb-2 mt-2'>
                                    <Typewriter
                                        options={{
                                            strings: ['React Developer 😀', "NextJs Developer 😃", "Javascript 😄", "React Native 😁", "UI and UX 😄"],
                                            autoStart: true,
                                            loop: true,

                                        }}
                                    />
                                </div>
                                <div>
                                    <p className='build mt-4 mb-4'> A  Building Applications with Front End Developer Operations</p>
                                </div>
                                <div className='socialicons mt-3'>
                                    <span ><a href="https://www.facebook.com/"><ion-icon name="logo-facebook" style={{ color: "orangered" }}></ion-icon></a></span>
                                    <span><ion-icon name="logo-google"></ion-icon></span>
                                    <span><ion-icon name="logo-instagram"></ion-icon></span>
                                    <span><ion-icon name="logo-linkedin"></ion-icon></span>
                                    <span><ion-icon name="logo-twitter"></ion-icon></span>
                                </div>
                                <button className="hire mt-4" onClick={ContactTest}>
                                    Contact{" "}
                                    <span
                                        style={{ color: color, fontWeight: 700 }}
                                        className="ms-2"
                                    >
                                        Me
                                    </span>
                                </button>
                                <div>
                                    <i class="fa-solid fa-star stars1"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-star stars2"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-star stars3"></i>
                                </div>
                            </div>
                        </div>
                        <div className="right-section1-home">
                            <div className="purush">
                                <img src={purush} className="purushed" />
                            </div>
                            <div className="profile">
                                <Link to="work">
                                    <img src={experiencet} className="profiles" />
                                </Link>
                            </div>
                            <div className="settings-kalai">
                                <Link to="active">
                                    <img
                                        src={activet}
                                        alt="no"
                                        className="settings-kalais"
                                    />
                                </Link>
                            </div>
                            <div className="about">
                                <Link to="about">
                                    <img
                                        src={aboutst}
                                        to="about"
                                        alt="no"
                                        className="abouts-kalai"
                                    />
                                </Link>
                            </div>
                            <div className="chats">
                                <Link to="skill">
                                    <img
                                        src={skillst}
                                        alt="no"
                                        className="chats-kalai"
                                    />
                                </Link>
                            </div>
                            <div className="developers">
                                <Link to="education">
                                    <img
                                        src={educationt}
                                        alt="no"
                                        className="developers-kalai"
                                    />
                                </Link>
                            </div>
                            <div className="services">
                                <Link to="contact">
                                    <img
                                        src={contactust}
                                        alt="no"
                                        className="services-kalai"
                                    />
                                </Link>
                            </div>

                            <div className="smile4">
                                <img src={sm4} className="smiles3" />
                            </div>

                            <div>
                                <i class="fa-solid fa-star stars1"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star stars2"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star stars3"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Mobilesection1 dark={dark} setdark={setdark} />
            </div>
        </>
    );
}

export default Section1;
