import React from "react";





import purush from "../../../../../assets/kalai-port/kal-imag1.png";
import experiencet from "../../../../../assets/kalai-port/experiencet.png";
import skillst from "../../../../../assets/kalai-port/skillst.png";
import aboutst from "../../../../../assets/kalai-port/aboutst.png";
import educationt from "../../../../../assets/kalai-port/educationt.png";
import contactust from "../../../../../assets/kalai-port/contactt.png";
import activet from "../../../../../assets/kalai-port/activet.png";
import vts from "../../../../../assets/kalai-port/vts.gif";
import { Link } from "react-scroll";
import "./styles/Mobilesection1.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typewriter from 'typewriter-effect';
import logo from '../../../../../assets/kalai-port/logokalai.png';
function Mobilesection1({ color, dark, setdark }) {
    const ContactList = () => {
        toast("ContactMe:8778377119");
    };
    return (
        <div className="section1mobile d-block d-lg-none" id="homes">

            <div className="off-can-navbar">
                <div className="names">
                    <span><i class="fa-brands fa-react"></i></span><span>Kalai</span>
                </div>
                <span className="bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i class="fa-solid fa-bars"></i>
                </span>

                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <span data-bs-dismiss="offcanvas" ><i class="fa-solid fa-xmark"></i></span>

                    </div>
                    <div class="offcanvas-body">

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


                        <div class="wrapper">
                            <input class="checkbox" id="checkbox-1" type="checkbox" onClick={() => setdark(!dark)} />
                            <label for="checkbox-1"></label>
                            {dark ? "dark mode 🌙 " : "light Mode 🔆"}

                            <div>
                                {dark ? "😀" : "🤪"}
                            </div>
                        </div>



                    </div>

                </div>
            </div>
            <div className="inside-mobile">
                <ToastContainer />
                <div className="left-mobile">

                    <div className="image1 mt-5 mb-3">
                        {/* <img src={sectios1} className="section-image" /> */}
                        <img src={vts} className="section-image" />
                    </div>
                    <h1 className="hy mb-1">
                        Hy! <span style={{ color: color }}>I Am</span>
                    </h1>
                    <h1 className="kalai mt-4 mb-3">
                        Kalai<span style={{ color: color }}>surya</span>
                    </h1>
                    <div className='typesection mb-4 mt-3'>
                        <Typewriter
                            options={{
                                strings: ['React Developer 😀', "NextJs Developer 😃", "Javascript 😄", "React Native 😁", "UI and UX 😄"],
                                autoStart: true,
                                loop: true,

                            }}
                        />
                    </div>
                    <span
                        className="loream mt-5"
                        style={{
                            paddingRight: "15px",
                            paddingLeft: "10px",
                        }}
                    >
                        To obtain a position with a progressive{" "}
                        <span style={{ color: color }}>web development</span>
                        company with a{" "}
                        <span style={{ color: color }}>strong focus</span> on
                        creativity and{" "}
                        <span style={{ color: color }}>problem solving.</span>{" "}
                        To find a position that is{" "}
                        <span style={{ color: color }}>challenging.</span>
                    </span>
                    <div className='socialicons mt-4'>
                        <span><ion-icon name="logo-facebook"></ion-icon></span>
                        <span><ion-icon name="logo-google"></ion-icon></span>
                        <span><ion-icon name="logo-instagram"></ion-icon></span>
                        <span><ion-icon name="logo-linkedin"></ion-icon></span>
                        <span><ion-icon name="logo-twitter"></ion-icon></span>
                    </div>

                    <button
                        className="hire mt-4 mb-3"
                        onClick={() => ContactList()}
                    >
                        Contact{" "}
                        <span style={{ color: color }} className="ms-2">
                            Me
                        </span>
                    </button>
                </div>
                <div className="right-mobile mt-5">

                    <div className="circles">
                        {/* <img src={purush} className="circles" /> */}
                        <img src={purush} className="kalai-purush" />
                        <div className="educations-kalais">
                            <Link to="education">
                                <img
                                    src={educationt}
                                    alt="no"
                                    className="educations-kalais"
                                />
                            </Link>
                        </div>
                        <div className="skills-kalais">
                            <Link to="skill">
                                <img
                                    src={skillst}
                                    alt="no"
                                    className="skills-kalais"
                                />
                            </Link>
                        </div>

                        <div className="experience-kalais">
                            <Link to="work">
                                <img
                                    src={experiencet}
                                    alt="no"
                                    className="experience-kalais"
                                />
                            </Link>
                        </div>
                        <div className="abouts-kalais">
                            <Link to="about">
                                <img
                                    src={aboutst}
                                    alt="no"
                                    className="abouts-kalais"
                                />
                            </Link>
                        </div>
                        <div className="contactust-kalais">
                            <Link to="contact">
                                <img
                                    src={contactust}
                                    alt="no"
                                    className="contactust-kalais"
                                />
                            </Link>
                        </div>
                        <div className="actives-kalais">
                            <Link to="active">
                                <img src={activet} className="actives-kalais" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mobilesection1;
