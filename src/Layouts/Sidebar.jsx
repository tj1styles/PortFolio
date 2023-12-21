import React from 'react';
import green_suit from '../assets/images/green_suit.jpg'
import white_suit from '../assets/images/white_suit.jpg';
import {LiaLinkedinIn} from 'react-icons/lia';
import { BiLogoTwitter } from "react-icons/bi";
import { RiGithubLine, RiInstagramFill } from "react-icons/ri";

import { MdOutlineMailOutline } from "react-icons/md";

const Sidebar = () => {
  const links = [
    { id:1,
    icons: <RiInstagramFill />,
    links: 'https:www.instagram.com/uknic_tjstyles'
    },
    { id:2,
      icons: <BiLogoTwitter />,
      links: 'https://x.com/TehillahJa89535'
    },
    { id:3,
      icons: <LiaLinkedinIn />,
      links: 'https://www.linkedin.com/in/tehillah-jamgbadi-40a578267'
    },
    { id:4,
      icons: <RiGithubLine />,
      links: 'https://www.github.com/uknicTjstyles'
    }
    


]
  const newDate = new Date();
  const getYear = newDate.getFullYear();
  console.log(getYear)
  return (
    <div className='xl:h-full  border-[0.2vw] border-[rgb(86,86,86)] xl:w-[100%] border-y-[0px] flex flex-col  space-y-[3vw] items-center text-white xl:px-[2vw] '>
      <div className="w-full flex flex-row justify-evenly pt-[1vw]">
        <div className="w-[50%] flex space-x-[1vw]">
        <span className='text-[2.4vw] font-bold'>UKNIC</span>
        <span className='w-[1.9vw] flex items-center justify-center h-[1.9vw] border-[0.2vw] border-[white] rounded-full text-[0.9vw]'>U</span>

        </div>
        <div className="w-[45%] text-right">
        <span className='text-[1.1vw]'>Web Developer, Game Developer,  A.I Enthusiast and Animation Designer</span>

        </div>
      </div>

      <div className="w-[60%]  rounded-[1vw] h-[30vh]  object-cover overflow-hidden">
        <img src={green_suit} className='w-full green_suit translate-y-[-2vw]'  alt="" />
      </div>
      <div className="w-full text-center text-[2.3vw] space-y-[0.5vw]">
        <p className='text-[1.9vw]'>jamgbaditehillah@gmail.com</p>
        <p>Base in Lagos, Nigeria</p>
        <p className='text-[1.2vw] text-[rgb(139,139,139)]'>&copy; {getYear} Uknic. All Rights Reserved</p>
      </div>
      <div className="w-full flex flex-row justify-center space-x-[0.8vw]">
          {
            links.map((link, index)=>( 
              <a key={index} target='_blank' rel='noreferrer' href={link.links}>
                <div  className="w-[3.5vw] h-[3.5vw] border-[0.1vw] flex justify-center items-center border-[rgb(139,139,139)] rounded-full text-[1.6vw] text-[rgb(139,139,139)]">
                  {link.icons}
                </div>

              </a>
            ))
          }
          
      </div>
      <button className="w-full flex hover:bg-transparent  border-[0.2vw] border-[rgb(40,233,140)] hover:text-[rgb(40,233,140)] transition-all ease-in delay-[0.2s]  bg-[rgb(40,233,140)] p-[1.2vw] text-[1.6vw] text-black rounded-full justify-center space-x-[1vw] items-center">
              <MdOutlineMailOutline />
              <span>HIRE ME!</span>
      </button>

    </div>
  )
}

export default Sidebar