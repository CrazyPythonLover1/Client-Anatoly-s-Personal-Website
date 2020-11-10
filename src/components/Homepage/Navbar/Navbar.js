import React, { useState } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [active, setActive] = useState(false)
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-sm navbar-light px-5">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="aboutnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="https://wa.me/+16463732266">
                                <span> US </span>  <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link " href="tel:0502209852">
                            <span> IL </span> <FontAwesomeIcon icon={faPhone} /> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="tel:+16463732266"> 
                                <span> US </span> <FontAwesomeIcon icon={faPhone} /> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/anatoly-raklyar-06034069/">  
                                <FontAwesomeIcon icon={faLinkedinIn} /> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:traklyar@yahoo.com">  
                                <FontAwesomeIcon icon={faEnvelope} /> 
                            </a>
                        </li>
                        <div className="navbar-wraper" onClick={() => setActive(!active)}>
                            { !active ?<li className="nav-item">
                                <div className="nav-link"  href="">  
                                    <FontAwesomeIcon icon={faBars} /> 
                                </div>
                            </li>
                            :<div>
                            <li className="nav-item">
                                <div className="nav-link"  href="">  
                                <strong> X </strong>
                                </div>
                            </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick="revert()" href="">  
                                        <FontAwesomeIcon icon={faGithub} /> 
                                    </a>
                                </li>
                            </div>}
                            
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;