import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import resumeData from '../../../data/data.json';


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
        <div id="home" style={{background:siteInfo.work?.bgColor, height: "100vh"}} 
        onClick={()=> handleClick() } 
        >
            <Navbar color={siteInfo.work?.color} />
            <Header  />
            <h2> {siteInfo.work?.company} </h2>
            
        </div>
    );
};

export default Home;