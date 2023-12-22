import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

import {
  MdOutlineHouse,
  MdOutlineMailOutline,
  MdOutlineMessage,
} from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { RiBriefcaseLine } from "react-icons/ri";
import { TbTools } from "react-icons/tb";
import {BsCurrencyDollar} from 'react-icons/bs';
import { FaArrowDownLong, FaCubesStacked } from "react-icons/fa6";
import { GrProjects, GrReactjs } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TfiHtml5 } from "react-icons/tfi";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap, FaNode } from "react-icons/fa";
import {LiaLinkedinIn} from 'react-icons/lia';
import { BiLogoTwitter } from "react-icons/bi";
import { RiGithubLine, RiInstagramFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeOutlet.css";


const HomeOutlet = () => {
  

  useEffect(() => {
   
  });


  const getRandomDirection = () => {
    const directions = ["up", "down", "left", "right"];
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
  };
  const stickyBarDetailsArray = [
    {
      names: "Home",
      icon: <MdOutlineHouse />,
      target: "#home",
    },
    {
      names: "About",
      icon: <LuUser />,
      target: "#about",
    },
    {
      names: "Resume",
      icon: <RiBriefcaseLine />,
      target: "#resume",
    },
    {
      names: "Services",
      icon: <TbTools />,
      target: "#service",
    },
    {
      names: "Skills",
      icon: <FaCubesStacked />,
      target: "#skills",
    },
    {
      names: "Portfolios",
      icon: <GrProjects />,
      target: "#portfolio",
    },

    {
      names: "contact",
      icon: <MdOutlineMailOutline />,
      target: "#contact",
    },
  ];
  // const messageForRotatingCircle = ["MY PROJECTS - MY PROJECTS -"];



  // useEffect(() => {
  //   const text = document.querySelector(".text p");
  //   text.innerHTML = messageForRotatingCircle
  //     .toString()
  //     .split(" ")
  //     .map(
  //       (char, index) =>
  //         `<span  style={{transform: 'rotate(${index * 8}deg')}}>${char}</span>`
  //     )
  //     .join(' ')
  //   console.log(
  //     messageForRotatingCircle
  //       .toString()
  //       .split("")
  //       .map(
  //         (char, index) =>
  //           `<span style={{transform: "rotate(${index * 5}deg)"}}>${char}</span>`
  //       )
  //       .join("")
  //   );
  // });



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
  const experienceAndEducation = [
    {
      yearStarted: 2021,
      companyName: "TeensCanCode",
      role: "Web Instructor",
      yearEnd: 2024,
    },
  ];
  const skillsArray = [
    {
      icons: <TfiHtml5 />,
      name: "html5",
      percentOfKnowledge: 90,
    },
    {
      icons: <SiTailwindcss />,
      name: "TailwindCss",
      percentOfKnowledge: 80,
    },
    {
      icons: <FaBootstrap />,
      name: "Bootstrap 5",
      percentOfKnowledge: 80,
    },
    {
      icons: <FaNode />,
      name: "NodeJs",
      percentOfKnowledge: 50,
    },
    {
      icons: <GrReactjs />,
      name: "React Js",
      percentOfKnowledge: 70,
    },
  ];

  return (
    <>
      {/* First Section */}
      
        <div id="home" className="w-full flex flex-wrap home">
          <div className="xl:w-[85%] xl:space-y-[2vw] relative ">
            <Fade direction="down" duration={"2000"}>
              <div className="xl:w-[9vw] xl:h-[2.8vw] rounded-[3vw] border-[rgb(87,87,87)] border-[0.1vw] flex justify-center text-[0.9vw] items-center xl:space-x-[0.3vw]">
                <MdOutlineHouse className="text-[1.3vw]" />{" "}
                <span>INTRODUCE</span>
              </div>
              <h1 className="xl:text-[5.3vw]">
                Say Hi from{" "}
                <span className="text-[rgb(40,233,140)]">UKNIC</span> Web
                Developer, Game Developer, A.I Enthusiast and Animation Designer
                , Framer Designer and Developer
              </h1>
              <p className="text-[rgb(146,146,146)] xl:text-[1.5vw]">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
            </Fade>
          </div>

          <div className="xl:w-[15%]  flex flex-col items-center xl:space-y-[6vw]">
            <div className="xl:w-[4vw] xl:h-[4vw] flex flex-wrap justify-center items-center rounded-full border-[rgb(87,87,87)] border-[0.1vw]">
              <HiOutlineMenuAlt3 className="xl:text-[1.9vw]" />
            </div>

            <div className="xl:w-[4vw] xl:rounded-[2.2vw] border-[rgb(87,87,87)] border-[0.1vw] xl:h-[25vw] xl:space-y-[0vw] items-center justify-center flex flex-col fixed">
              {stickyBarDetailsArray.map((content, index) => (
                <a
                  className="text-[1.9vw]"
                  key={index}
                  href={content.target}
                >
                  <button
                    className=" toolTip left xl:text-[1.8vw] text-center"
                    data-tip={content.names}
                  >
                    {content.icon}
                  </button>
                </a>
              ))}
              {/* {backgroundColor:'rgb(64,64,66)', color:'white'} */}
            </div>
          </div>
          <div className="w-full relative flex justify-end py-[6vw]">
            {/* <div className="circleDiv flex relative xl:w-[12vw] xl:mr-[9vw] xl:h-[12vw] border-[rgb(87,87,87)] xl:border-[0.1vw] items-center justify-center rounded-full overflow-hidden">
              
              <div className="logoDiv absolute xl:w-[9vw] xl:h-[9vw] rounded-full text-[white] justify-center items-center flex bg-red-600">
                <FaArrowDownLong className="xl:text-[1.8vw]" />
              </div>
                <div className="text">
                  <p></p>
                </div>
            </div> */}
          </div>
        </div>
      

      {/* Second Section */}

     
        <div id="about" className="w-full">
          <div className="xl:w-[80%]  flex flex-col flex-wrap xl:space-y-[4vw]">
            <Fade direction="down" duration={"2000"}>
              <div className="xl:w-[9vw] xl:h-[2.8vw] rounded-[3vw] border-[rgb(87,87,87)] border-[0.1vw] flex justify-center text-[0.9vw] items-center xl:space-x-[1vw]">
                <LuUser className="text-[1.3vw]" /> <span>ABOUT</span>
              </div>
              <h1 className="xl:text-[4vw]">
                Every great design begin with an even better story
                <span className="text-[rgb(40,233,140)]"> story</span>
              </h1>
              <p className="text-[rgb(146,146,146)] xl:text-[1.2vw]">
                Since beginning my journey as a freelance designer nearly 8
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chopsone design problem at a time.
              </p>
            </Fade>
          </div>
        </div>
    

      {/* Third Section */}

  
        <div id="resume" className="w-full ">
          <div className="xl:w-[80%] flex flex-col xl:space-y-[4vw]">
            <Fade direction="up" duration={"2000"}>
              <div className="xl:w-[9vw] xl:h-[2.8vw] rounded-[3vw] border-[rgb(87,87,87)] border-[0.1vw] flex justify-center text-[0.9vw] items-center xl:space-x-[1vw]">
                <RiBriefcaseLine className="text-[1.3vw]" /> <span>RESUME</span>
              </div>
              <h1 className="xl:text-[4vw]">
                Education &
                <span className="text-[rgb(40,233,140)]"> Experience</span>
              </h1>
            </Fade>

            <div className="w-full flex flex-col xl:space-y-[2vw] flex-wrap overflow-hidden">
              {experienceAndEducation.map((details, char) => (
                <Fade
                  key={char}
                  direction={getRandomDirection()}
                  duration={"1500"}
                >
                  <div className="xl:w-[85%] flex  flex-wrap">
                    <div className="xl:w-[20%] flex flex-col items-center xl:pt-[0.40vw]">
                      <div className="xl:w-[1vw] xl:h-[1vw] rounded-full bg-[rgb(101,101,101)]"></div>
                      <div className="xl:w-[0.01vw] bg-[rgb(101,101,101)] xl:h-[100%]"></div>
                    </div>
                    <div className="xl:w-[80%] flex flex-col xl:space-y-[0.6vw]">
                      <p className="xl:text-[1.4vw]">
                        {details.yearEnd === false
                          ? `${details.yearStarted} - Present`
                          : `${details.yearStarted} - ${details.yearEnd}`}
                      </p>
                      <h1 className="xl:text-[3.2vw]">{details.companyName}</h1>
                      <h3 className="text-[rgb(131,131,131)] xl:text-[1.3vw] font-bold">
                        {details.role}
                      </h3>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
    

      {/* Fourth Section */}
     
        <div id="skills" className="w-full">
          <div className="xl:w-[87%] flex flex-wrap justify-evenly xl:space-y-[2.3vw]">
            <div className="w-full xl:space-y-[1.7vw]">
              <Fade direction="up" duration={"2000"}>
                <div className="xl:w-[9vw] xl:h-[2.8vw] rounded-[3vw] border-[rgb(87,87,87)] border-[0.1vw] flex justify-center text-[0.9vw] items-center xl:space-x-[1vw]">
                  <FaCubesStacked className="text-[1.3vw]" />{" "}
                  <span>MY SKILLS</span>
                </div>
                <h1 className="xl:text-[4vw]">
                  My
                  <span className="text-[rgb(40,233,140)]"> Advantages</span>
                </h1>
              </Fade>
            </div>
            {skillsArray.map((skill, char) => (
              <div
                key={char}
                className="xl:w-[23%] flex flex-col items-center xl:text-[1.5vw] xl:space-y-[2.3vw] xl:relative"
              >
                <Fade direction={getRandomDirection()}>
                  <div className="xl:w-[12vw] border-[0.1vw] border-[rgb(86,86,86)] hover:border-[rgb(40,233,140)] transition-all ease-in delay-[0.2s] flex flex-col items-center xl:p-[2.5vw] xl:rounded-[3vw] xl:text-[4vw] xl:space-y-[2vw] xl:mt-[2vw]">
                    <p>{skill.icons}</p>
                    <p className="xl:text-[2.3vw]">
                      {skill.percentOfKnowledge}%
                    </p>
                  </div>
                  <p>{skill.name}</p>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      

      {/*Fifth Section */}


        <div className="w-full">
                







        </div>














      {/* Sixth Section */}

      <div id="contact" className="w-full xl:space-y-[5vw]">
        <div className="w-full xl:space-y-[1.6vw]">
          <Fade direction="up" duration={"2000"}>
          <div className="xl:w-[9vw] xl:h-[2.8vw] rounded-[3vw] border-[rgb(87,87,87)] border-[0.1vw] flex justify-center text-[0.9vw] items-center xl:space-x-[1vw]">
              <BsCurrencyDollar className="text-[1.3vw]" /> <span>CONTACT</span>
              </div>
            <h1 className="xl:text-[4vw]">
              Let's Work
              <span className="text-[rgb(40,233,140)]"> Together!</span>
            </h1>
            <p className="xl:text-[1.6vw]">jamgbaditehillah@gmail.com</p>
          </Fade>
        </div>
              <div className="xl:w-[85%]  justify-center flex flex-wrap xl:space-x-[1.3vw]">
                  {
                    links.map((char, index)=>(
                      <a key={index} href={char.links} target="_blank" rel="noreferrer">
                       <div className="w-[3.5vw] h-[3.5vw] border-[0.1vw] flex justify-center items-center  bg-[rgb(139,139,139)] rounded-full text-[1.6vw] text-[rgb(255,253,253)] ">
                            <span>
                              {char.icons}
                            </span>
                      


                        </div>
                      </a>
                    ))
                  }

              </div>
      </div>

      {/* Seventh Section */}

              





   
    </>
  );
};

export default HomeOutlet;
