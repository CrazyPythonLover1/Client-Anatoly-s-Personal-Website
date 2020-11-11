import React, { useEffect, useState } from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


const Work = ({work}) => {
    const [audio, setAudio] = useState();

    if(work?.id){
        const audioData = require(`../../../data/audio/audio${work.id}.mp3`)
        var audioPath = audioData["default"];
    }

    useEffect(()=>{ setAudio(new Audio( audioPath))},[work?.id])
    
    return (
        <div id="work" style={{backgroundColor:work?.bgColor}}>
            <div className="button-group">
                <button className="resume" > <span> <a> RESUME </a>   </span>  </button>
                <button className="letter"> <span> <a>   LETTER  </a> </span>  </button>
                <span className="or"> or </span>
            </div>
            <div className="info">
                <div className="btn-play-pause"> 
                    <FontAwesomeIcon onClick={()=>audio.play()}  icon={faPlay} /> 
                </div>
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