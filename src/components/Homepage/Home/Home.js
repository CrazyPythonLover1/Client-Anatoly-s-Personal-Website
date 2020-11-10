import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import resumeData from '../../../data/data.json';
import Work from '../Work/Work';


const Home = () => {
    const [ siteInfo, setSiteInfo] = useState({
        count: 1,
    });
    const works = [];
    resumeData?.work.map(item => {
        return works.push(item)
    })
    useEffect(()=>{
        works[0] && setSiteInfo({...siteInfo, work:works[0]})
        },[])
    if( works.length === siteInfo.count){
        setSiteInfo({...siteInfo, count:0})
    }
    const handleClick = () => {
        setSiteInfo({count:siteInfo.count+1, work:works[siteInfo.count]})
    }
    return (
        <div id="home" style={{background:siteInfo.work?.bgColor, height: "100vh"}}>
            
                <Navbar color={siteInfo.work?.color} />
                <Header color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor} handleClick={handleClick} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8">
                            <Work work={siteInfo.work}/>
                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default Home;