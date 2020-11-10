import React from 'react';
import resumeData from '../../../data/data.json';
import Typical from 'react-typical'

const Header = ({color,fontColor, handleClick}) => {
    return (
        <div id="header" >
            <div className="">
                <div onClick={ ()=> handleClick() } className="text-center pb-5" >
                    <h1 className="pt-4 pb-3" style={{color:fontColor, fontWeight:"900", fontSize:" 2rem"}} >
                        {resumeData.basics.name}
                    </h1>
                    <div style={{color:color}}>
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[resumeData.basics.label,1000]}
                        />
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;