import React from 'react';
import './Work.css';

const Work = ({work}) => {
    console.log(work)
    return (
        <div id="work" style={{backgroundColor:work?.bgColor}}>
            <div className="button-group">
                <button> <span>  RESUME </span>  </button>
                <button> <span> LETTER </span>  </button>
            </div>
            <div className="info">
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