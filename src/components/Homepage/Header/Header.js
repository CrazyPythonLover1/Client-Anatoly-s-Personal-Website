import React, { useEffect, useState } from 'react';
import './Header.css';
import resumeData from '../../../data/data.json';
import Typical from 'react-typical'

const Header = ({color,fontColor, bgColor}) => {
    const [backgroundColor, setBackgroundColor] = useState("#f8f8fa");
    useEffect(() => {
        if (bgColor) {
            setBackgroundColor(bgColor)
        }
    }, [bgColor])
    return (
        <div id="header" style={{backgroundColor:backgroundColor}} >
            <div className="">
                <div className="text-center pb-5" >
                    <h1 className="pt-4 pb-3 header-title" style={{color:fontColor, fontWeight:"900", fontSize:" 2em"}} >
                        {resumeData.basics.name}
                    </h1>
                    <div style={{color:color, fontFamily:"'Nunito Sans', sans-serif"}}>
                        <Typical
                            loop={Infinity}
                            wrapper="p"
                            steps={[resumeData.basics.label,1000]}
                        />
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;