import React from "react";
import myimg from "../img/myimg.jpg";
import { useSpring, animated } from "react-spring";
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
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div>
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
              style={{ transform: props.xys.interpolate(trans) }}
            >
              <img
                src={myimg}
                className="img-fluid borderNew"
                alt="not found"
              />
            </animated.div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Web Developer &amp; Freelancer</h3>
              <p className="fst-italic">
                My name Shivanshu Upadhuay, I am a Full Stack Web Developer and
                Web Designer. An Open Source enthusiast and a Computer Science
                student from India.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>30 June 2000</span>
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
                      <strong>Phone:</strong> <span>+917880811002</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Delhi In</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Age:</strong> <span>22</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>PhEmailone:</strong>
                      <span>heyshivanshu01@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I love working on new and exciting technologies emerging
                nowadays. I have good work experience as a MERN Stack Developer
                in startup(s) and UI/UX Designer where I was core member of the
                development team and done quite some contribution to open source
                as well. :Skills- React.js Next.js Node.js Express.js Mongodb
                MySql React-Native JavaScript Material UI, Bootstrap,
                Tailwind.css Html Css
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;