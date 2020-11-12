import React, { useEffect, useState } from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


const Work = ({ work, handleClick }) => {
    const [audio, setAudio] = useState();
    const [active, setActive] = useState(false);
    if (work?.id) {
        const audioData = require(`../../../data/audio/audio${work.id}.mp3`)
        var audioPath = audioData["default"];
    }

    useEffect(() => { setAudio(new Audio(audioPath)) }, [work?.id])
    const handlePlayMusic = () => {
        audio.play();
        setActive(!active);
        audio.addEventListener('ended', () => setActive(false));
    }

    const handlePauseMusic = () => {
        audio.pause();
        setActive(!active);
    }
    const [backgroundColor, setBackgroundColor] = useState(work?.workColor);
    useEffect(() => {
        if (work?.workColor) {
            setBackgroundColor(work.workColor)
        } else {
            setBackgroundColor(work?.bgColor)
        }
    }, [])

    return (
        <div style={{position:"relative"}}>
             <div className="col-sm-1 spacer"  onClick={ ()=> handleClick() } >  </div>
             <div className="col-sm-1 spacer spacer-bottom" onClick={ ()=> handleClick() } >  </div>
        <div id="work" style={{ backgroundColor: backgroundColor }}>
           
            <div className="button-group">
                <a href="../../../data/Resume/IL.docx" download> <button className="resume" > <span> RESUME   </span>  </button> </a>
                <a href="../../../data/Resume/US.docx" download> <button className="letter"> <span>   LETTER   </span>  </button> </a>
                <span className="or"> or </span>
            </div>
            <div className="info">
                <div className="btn-play-pause">
                    {!active ? <FontAwesomeIcon onClick={() => handlePlayMusic()} icon={faPlay} />
                        : <FontAwesomeIcon onClick={() => handlePauseMusic()} icon={faPause} />}
                </div>
                <span className="company"> <span> $ </span> {work?.company} </span>
                <span className="position"> <span> $ </span> {work?.position} </span>
                {work?.startDate && <span className="date"> <span> $ </span> {work?.startDate} </span>}
                {work?.endDate && <span className="date"> <span> $ </span> {work?.endDate} </span>}
                {work?.summary && <span className="summary"> <span> $ </span> {work?.summary} </span>}
                {work?.highlights && <span className="mt-3">   Highlights </span>}
                {work?.highlights && work?.highlights.map(item => <span> {`->`} {item} </span>)}

            </div>
        </div>
        
        </div>
    );
};

export default Work;