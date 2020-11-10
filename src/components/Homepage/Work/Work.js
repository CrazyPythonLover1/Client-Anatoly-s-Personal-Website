import React from 'react';

const Work = ({work}) => {
    return (
        <div id="work">
            <p> <span> $ </span> {work.company} </p>
            <p> <span> $ </span> {work.position} </p>
            <p> <span> $ </span> {work.startDate} </p>
            <p> <span> $ </span> {work.endDate} </p>
            <p> <span> $ </span> {work.summary} </p>
        </div>
    );
};

export default Work;