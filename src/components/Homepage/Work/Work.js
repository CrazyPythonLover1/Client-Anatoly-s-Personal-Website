import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Work = ({work}) => {
    console.log(work)
    return (
        <div id="work" style={{backgroundColor:work?.bgColor}}>
            <div className="button-group">
                <button className="resume" > <span>  RESUME </span>  </button>
                <button className="letter"> <span> LETTER </span>  </button>
                <span className="or"> or </span>
            </div>
            <div className="info">
                <div className="btn-play-pause"> <FontAwesomeIcon icon={faPlay} /> </div>
                <span className="company"> <span> $ </span> {work?.company} </span>
                <span className="position"> <span> $ </span> {work?.position} </span>
                {work?.startDate && <span className="date"> <span> $ </span> {work?.startDate} </span>}
                {work?.endDate && <span className="date"> <span> $ </span> {work?.endDate} </span> } 
                {work?.summary && <span className="summary"> <span> $ </span> {work?.summary} </span> }
                {work?.highlights &&  <span className="mt-3">   Highlights </span>}
                {work?.highlights && work?.highlights.map(item =>  <span> {`->`} {item} </span>)}
                
            </div>
        </div>
    );
};

export default Work;