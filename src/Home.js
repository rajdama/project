import React from 'react'
import "./App.css";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";
import My_Webcam from "./My_Webcam";
import Section_5 from "./Section_5";
import Section_6 from "./Section_6";
import New_section from './New_section';
import New_section_Asl from './New_section_Asl';
import New_section_Asl_2 from './New_section_Asl_2';
import Web_cam_section from './Web_cam_section';

function Home() {
    return (
        <>
    <Section_1/>
    <New_section/> 
    <Section_2/>
    <New_section_Asl/>
    <Section_3/>
    <New_section_Asl_2/>
    <Section_4/>
    <Section_5/>
    <Section_6/>
            
        </>
    )
}

export default Home
