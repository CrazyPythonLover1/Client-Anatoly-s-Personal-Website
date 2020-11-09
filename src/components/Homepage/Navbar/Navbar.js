import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope  } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"> US <FontAwesomeIcon icon={faWhatsapp} /><span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> IL <FontAwesomeIcon icon={faPhone} /> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> US <FontAwesomeIcon icon={faPhone} /> </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"> US <FontAwesomeIcon icon={faLinkedinIn} /> </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"> US <FontAwesomeIcon icon={faEnvelope} /> </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;