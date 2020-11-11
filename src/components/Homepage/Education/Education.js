import React, { useEffect, useState } from 'react';
import './Education.css';

const Education = ({education, color, fontColor, handleClick}) => {
    const [edu, setEdu] = useState({})
    useEffect( ()=>{
        education[0] && setEdu(education[0])
    },[] )
    return (
        <div id="education">
            <h2 className="section-title" style={{color:fontColor}} onClick={ ()=> handleClick() }> Education </h2>
            <ul>
                <li onClick={ ()=> setEdu(education[0]) }  className={edu?.studyType?.toLowerCase() === "mba" && "mba" } style={{color:color}}> mba </li>
                <li onClick={ ()=> setEdu(education[1]) } className={edu?.studyType?.toLowerCase() === "bs"  && 'bs'}  style={{color:color}} > bs </li>
            </ul>
            <div className="edu-info">
                <span> Institution : {edu.institution} </span>
                <span>  Area : {edu.area} </span>
                <span> End Date : {edu.endDate} </span>
            </div>
        </div>
    );
};

export default Education;