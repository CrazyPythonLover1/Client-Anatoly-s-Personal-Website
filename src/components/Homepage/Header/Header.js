import React from 'react';
import resumeData from '../../../data/data.json';
import Typical from 'react-typical'

const Header = () => {
    return (
        <div id="header" >
            <div className="container">
            <h1 className="mt-4 mb-4 font-weight-bold">
                {resumeData.basics.name}
            </h1>
            <div >
                <Typical
                    
                    loop={Infinity}
                    wrapper="b"
                    steps={[resumeData.basics.label,1000]}
                />
                
            </div>
            </div>
            
        </div>
        
    );
};

export default Header;