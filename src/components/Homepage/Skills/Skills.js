import React from 'react';
import './Skills.css';
import resumeData from '../../../data/data.json';

const Skills = ({color, handleClick}) => {
    const skills = resumeData.skills;
    console.log(skills)
    return (
        <div id="skills"  onClick={ ()=> handleClick() }>
            <h1 className="section-title" style={{color:color}} > Skills </h1>
            {
                skills.map(skill=>{
                    return(
                        <div className="skill">
                            <h3 className="section-subtitle" style={{color:color}}> {skill.name} </h3>
                            <p> {skill.keywords.map(keyword=> <span> {keyword}, </span>)} </p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Skills;