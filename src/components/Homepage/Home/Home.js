import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import resumeData from '../../../data/data.json';
import Work from '../Work/Work';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';


const Home = () => {
    const [siteInfo, setSiteInfo] = useState({
        bgColor: "white",
        count: 1,
    });
    const works = [];
    resumeData?.work.map(item => {
        return works.push(item)
    })
    useEffect(() => {
        works[0] && setSiteInfo({ ...siteInfo, work: works[0] })
    }, [])
    if (works.length === siteInfo.count) {
        setSiteInfo({ ...siteInfo, count: 0 })
    }
    const handleClick = () => {
        setSiteInfo({ bgColor: works[siteInfo.count].bgColor, count: siteInfo.count + 1, work: works[siteInfo.count] })
        
    }
    return (
        <div id="home" style={{ background: siteInfo.bgColor, minHeight: "100vh" }}>

            <Navbar color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor} />
            <Header color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor} handleClick={handleClick} bgColor={siteInfo.work?.bgColor} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-1 col-xs-1 " onClick={() => handleClick()}  >

                    </div>
                    <div className="col-md-8 col-sm-9 col-xs-9 mx-auto work-column p-0 m-0">

                        <Work key={siteInfo.count} work={siteInfo.work} handleClick={handleClick} />
                        <div style={{ width: " 100%", minHeight: "50px" }} onClick={() => handleClick()} > </div>
                    </div>
                    <div className="col-md-2 col-sm-1 col-xs-1" onClick={() => handleClick()}   >

                    </div>
                </div>

                <div className="row">
                    <div className=" col-md-1 col-sm-1 px-3 " onClick={() => handleClick()}  >

                    </div>

                    <div className=" col-md-10 col-sm-9 mx-auto p-0 m-0" style={{ position: "relative", margin: "0 !important" }}>
                        <div className="col-sm-1 spacer"  onClick={() => handleClick()} >  </div>
                        <div className="col-sm-1 spacer spacer-bottom"  onClick={() => handleClick()} >  </div>
                        <div className="container m-0 p-0">
                            <div className="row" >

                                <div className="col-md-11 mx-auto">
                                    <Education education={resumeData.education} color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor} handleClick={handleClick} />
                                    <div style={{ width: " 100%", minHeight: "50px" }} onClick={() => handleClick()} > </div>
                                    <Skills color={siteInfo.work?.color} handleClick={handleClick} />
                                    <div style={{ width: " 100%", minHeight: "130px" }} onClick={() => handleClick()} > </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className=" col-md-1 col-sm-1 px-3" onClick={() => handleClick()}   >

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;