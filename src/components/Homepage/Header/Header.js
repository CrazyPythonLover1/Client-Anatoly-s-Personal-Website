import React from 'react';
import resumeData from '../../../data/data.json';
import Typical from 'react-typical'

const Header = ({color,fontColor, handleClick}) => {
    return (
        <div id="header" >
            <div className="">
                <div onClick={ ()=> handleClick() } className="text-center mb-5" >
                    <h1 className="mt-4 mb-4 font-weight-bold" style={{color:fontColor}} >
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