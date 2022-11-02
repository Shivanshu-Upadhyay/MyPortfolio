import React from "react";
import myimg from "../img/myimg.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSpring, animated } from "react-spring";
import resume from '../img/shivanshu.pdf'
function About() {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 60 },
  }));

  

  const skills = [
    {name:"HTML",val:"90"},
    {name:"CSS",val:"80"},
    {name:"Bootstrap",val:"92"},
    {name:"Material UI",val:"85"},
    {name:"Tailwind",val:"90"},
    {name:"JavaScript",val:"80"},
    {name:"React",val:"80"},
    {name:"NodeJs",val:"70"},
    {name:"ExpressJS",val:"70"},
    {name:"MongoDB",val:"80"},
    {name:"MySql",val:"70"},
    {name:"React Native",val:"70"},
  ]

  return (
   
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <animated.div
            className="col-lg-4"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.to(trans) }}
          >
            <img src={myimg} className="img-fluid borderNew" alt="not found" />
          </animated.div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Web Developer &amp; Freelancer</h3>
            <p className="fst-italic">
              My name Shivanshu Upadhuay, I am a Full Stack Web Developer and
              Web Designer. An Open Source enthusiast and a Computer Science
              student from India.I love working on new and exciting technologies
              emerging nowadays.I have good work experience as a MERN Stack
              Developer in startup(s) and UI/UX Designer where I was core member
              of the development team and done quite some contribution to open
              source as well. :Skills- React.js Next.js Node.js Express.js
              Mongodb MySql React-Native JavaScript Material UI, Bootstrap,
              Tailwind.css Html Css
            </p>

            <div className="row">
              <div className="col-lg-6">
                <h5 style={{ color: "#728394" }}>Contact Contact Details</h5>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <a
                      href="mailto:heyshivanshu01@gmail.com"
                      style={{ textDecoration: "none" }}
                    >
                      heyshivanshu01@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://heyshivanshu.netlify.app"
                      style={{ textDecoration: "none" }}
                    >
                      https://heyshivanshu.netlify.app
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+917880811002"
                      style={{ textDecoration: "none" }}
                    >
                      +917880811002
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Delhi In</span>
                  </li>
                </ul>
                
              </div>
              <div className="col-lg-6 d-flex  align-items-center">
                <a href={resume} className="button-58" download>
                  <span className="text">
                    <i className="fa-solid fa-download"></i> Download Resume
                  </span>
                </a>
              </div>
              
            </div>
          </div>

         
        </div>
        <div id="skills" className="skills section-bg my-5">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>I love working on new and exciting technologies emerging nowadays.I have good work experience as a MERN Stack Developer in startup(s) and UI/UX Designer where I was core member of the development team and done quite some contribution to open source as well</p>
        </div>
        <div className="row skills-content">
          {skills.map((item)=>{
            return <div className="col-lg-6"key={item.name}>
             <div className="progress" >
              <span className="skill">{item.name} <i className="val">{item.val}%</i></span>
              <div className="progress-bar-wrap" style={{borderRadius:"5px"}}>
              <ProgressBar completed={item.val} height="10px" isLabelVisible={false} transitionDuration="3s" animateOnRender={true} />
              </div>
            </div>
          </div>
          })}
        </div>
      </div>
    </div>
      </div>
      
    
    </section>
   
  );
}

export default About;
