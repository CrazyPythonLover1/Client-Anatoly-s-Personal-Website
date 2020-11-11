import React, { useState } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({color, fontColor}) => {
    const [active, setActive] = useState(false)
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand navbar-light px-5">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <a className="nav-link " href="https://wa.me/+16463732266">
                                <span style={{color:color}}> US </span>  <FontAwesomeIcon style={{color:fontColor}} icon={faWhatsapp} />
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link " href="tel:0502209852">
                            <span style={{color:color}}> IL </span> <FontAwesomeIcon style={{color:fontColor}} icon={faPhone} /> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="tel:+16463732266"> 
                                <span style={{color:color}}> US </span> <FontAwesomeIcon style={{color:fontColor}} icon={faPhone} /> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/anatoly-raklyar-06034069/">  
                                <FontAwesomeIcon style={{color:fontColor}} icon={faLinkedinIn} /> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:traklyar@yahoo.com">  
                                <FontAwesomeIcon style={{color:fontColor}} icon={faEnvelope} /> 
                            </a>
                        </li>
                        <div className="navbar-wraper" onClick={() => setActive(!active)}>
                            { !active ?<li className="nav-item">
                                <div className="nav-link"  href="">  
                                    <FontAwesomeIcon style={{color:fontColor}} icon={faBars} /> 
                                </div>
                            </li>
                            :<div>
                            <li className="nav-item">
                                <div className="nav-link"  href="">  
                                <strong style={{color:fontColor}}> X </strong>
                                </div>
                            </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick="revert()" href="">  
                                        <FontAwesomeIcon style={{color:fontColor}} icon={faGithub} /> 
                                    </a>
                                </li>
                            </div>}
                            
                        </div>
                    </ul>
            </nav>
        </div>
    );
};

export default Navbar;