import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import resumeData from '../../../data/data.json';
import Work from '../Work/Work';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';


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
        <div id="home" style={{background:siteInfo.work?.bgColor,  minHeight:"100vh"}}>
            
                <Navbar color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor}/>
                <Header color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor} handleClick={handleClick} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-sm-1 col-xs-12 " onClick={ ()=> handleClick() }  >

                        </div>
                        <div className="col-md-8 col-sm-10 col-xs-12">
                            <Work work={siteInfo.work}/>
                            <div style={{width: " 100%", minHeight: "80px"}} onClick={ ()=> handleClick() } > </div>
                        </div>
                        <div className="col-md-2 col-sm-1 col-xs-12" onClick={ ()=> handleClick() }   >

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1 col-sm-1 " onClick={ ()=> handleClick() }  >

                        </div>
                        <div className="col-md-10 col-sm-10">
                            <Education education={resumeData.education} color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor} handleClick={handleClick} />
                            <div style={{width: " 100%", minHeight: "50px"}} onClick={ ()=> handleClick() } > </div>
                            <Skills color={siteInfo.work?.color}  handleClick={handleClick}/>
                            <div style={{width: " 100%", minHeight: "50px"}} onClick={ ()=> handleClick() } > </div>
                        </div> 
                        <div className="col-md-1 col-sm-1" onClick={ ()=> handleClick() }   >

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;