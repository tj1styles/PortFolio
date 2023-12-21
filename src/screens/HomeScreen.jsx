import React from 'react';
import HomeOutlet from '../Layouts/HomeOutlet';
import Sidebar from '../Layouts/Sidebar';
import {Outlet} from 'react-router-dom';
import { HiOutlineCog8Tooth } from "react-icons/hi2";

const HomeScreen = () => {
  return (
    <div className='bg-[rgb(31,31,31)] h-[100vh] xl:w-[100vw] flex xl:flex-row'>
        <div className="xl:w-[30vw] xl:h-[100vh]  xl:pl-[1.7vw] relative">
            <Sidebar />
            <div className="absolute z-10 top-[5vw] bg-[rgb(31,31,31)] xl:w-[2vw] xl:h-[4vw]  xl:text-[2vw] xl:flex xl:flex-row text-white items-center justify-center left-[0.8vw]">
              <HiOutlineCog8Tooth />
            </div>
        </div>
        <div className=" xl:w-[70vw] xl:h-[100vh] xl:overflow-y-scroll px-[3vw] xl:py-[6vw] xl:space-y-[19vw]">
            <Outlet />
        </div>









        {/* 
        
        
        import { IoCloudUploadSharp } from "react-icons/io5";
        import { FaNode } from "react-icons/fa";
        import { RiJavascriptFill } from "react-icons/ri";
        import { GrReactjs } from "react-icons/gr";
        import { HiOutlineCog8Tooth } from "react-icons/hi2";
        import { IoLogoGithub } from "react-icons/io5";
        import { RiInstagramFill } from "react-icons/ri";
        import { BsFillThreadsFill } from "react-icons/bs";
        import { FaBootstrap } from "react-icons/fa";
        import { SiTailwindcss } from "react-icons/si";
        import { BiLogoTwitter } from "react-icons/bi";
        import { FaCubesStacked } from "react-icons/fa6";
        import { MdOutlineMailOutline } from "react-icons/md";
        import { RiBriefcaseLine } from "react-icons/ri";
        import { LuUser } from "react-icons/lu";
        import { MdOutlineHouse } from "react-icons/md";
        import { TfiHtml5 } from "react-icons/tfi";
        
        
        
        */}
    </div>
  )
}

export default HomeScreen