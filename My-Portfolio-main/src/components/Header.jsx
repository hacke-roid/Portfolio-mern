import React, { useEffect, useState } from "react";
import "./Header.css";
import image from "./WhatsApp Image 2024-10-17 at 8.30.42 PM.jpeg";
import REACT from "../Image/react-1.svg";
import JS from "../Image/javascript.png";
import EXPRESS from "../Image/express-js.png";
import MONGO from "../Image/mongodb.webp";
import NODE from "../Image/Node.js_logo.svg.png";
import CPP from "../Image/c++.png";
import PROJ1 from "../Image/Screenshot from 2024-12-22 17-21-54.png";
import PROJ2 from "../Image/Screenshot from 2024-12-22 17-50-34.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveContainer, setIsActiveContainer] = useState(false);

  useEffect(() => {
    console.log("Setting active state");
    setIsActive(true);
  }, []);

  useEffect(() => {
    console.log("Setting active container state");
    setIsActiveContainer(true);
  }, []);

  return (
    <div>
      <section>
        <div className="header-image">
          <div className="all-container">
            <div className={`card ${isActive ? "active" : ""}`}>
              <div className="img-container">
                <img src={image} alt="photo" />
              </div>
              <div className="name-container">
                <h2>Ramakrishna</h2>
                <p>Software Developer Engineer</p>
              </div>
            </div>

            <div
              className={`card-holder2 ${isActiveContainer ? "activate" : ""}`}
            >
              <span>Hello</span>
              <p>Here's who I am & what I do</p>
              <button>
                <a
                  href="/Ramakrishna_resume.pdf"
                  target="_blank"
                  className="link-deco"
                  download
                >
                  Resume
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/orgs/quadsquadproject/repositories"
                  className="link-deco"
                >
                  Projects
                </a>
              </button>
              <div className="description-container">
                <p>
                  I am a Software Development Engineer with expertise in
                  building scalable and efficient web applications. My
                  experience includes frontend development using React.js, with
                  a focus on delivering seamless user experiences. Passionate
                  about problem-solving and continuous learning, I thrive in
                  dynamic, fast-paced environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="work-experience-container">
          <h1>Work Experience</h1>
          <div className="work-experience-container-all">
            <div className="bluestock-fintech-container">
              <h2>Frontend Developer Engineer at BlueStock Fintech</h2>
              <br />
              <h3>
                Bluestock is mobile app for stock market content, analytics, and
                community.
              </h3>
              <p>
                We are passionate about helping you succeed in the stock market
                by providing cutting-edge tools, Learning resources and a
                supportive community of traders. Join us on this journey, and
                let's make your stock trading experience better.
              </p>
              <br />
              <br />
              <br />
              <br />
              <h3>My Role and Contributions:</h3>
              <p>
                Contributed into software part in Developing responsive and
                intuitive user interfaces using React.js to ensure a smooth user
                experience across fintech applications.
                <br />
                Collaborating with backend teams to integrate APIs, ensuring
                data-driven functionality and performance.
                <br />
                Implementing best practices for code optimization, leading to
                faster load times and improved application efficiency.
              </p>
            </div>
            <div className="bharath-electronics-container">
              <h2>Software Engineer at Bharat Electronics Limited</h2>
              <br />
              <h3>
                Bharat Electronics Limited (BEL): A leading defense and
                aerospace electronics company in India.
              </h3>
              <p>
                Bharat Electronics Limited (BEL) is a leading Indian public
                sector enterprise under the Ministry of Defence, specializing in
                the design, development, and production of advanced electronic
                products for defense and civilian applications. Renowned for its
                cutting-edge technology solutions, BEL plays a pivotal role in
                strengthening India's defense capabilities and contributing to
                innovation in sectors like communication, aerospace, and
                cybersecurity.
              </p>
              <br />
              <h3>My Role and Contributions:</h3>
              <p>
                As a Software Engineer at BEL, I developed a cutting-edge
                navigation data simulator using React.js. This dynamic simulator
                was designed to mimic real-time GPS navigation, enabling the
                simulation of routes across diverse geographical points. The
                tool served as a critical resource for testing location-based
                services, ensuring seamless functionality and reliability in
                real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="skills-container">
          <span className="span-1">
            I'm currently looking to join a{" "}
            <strong style={{ color: "#763cac" }}>cross-functional</strong> team
          </span>
          <br />
          <span className="span-2">
            that values improving people's lives through accessible design{" "}
          </span>
          <div className="lang-logo-container">
            <div>
              <div className="lang-React">
                <img src={REACT} alt="ReactJS" />
              </div>
              <label>ReactJS</label>
            </div>
            <div>
              <div className="lang-logo">
                <img src={EXPRESS} alt="ReactJS" />
              </div>
              <label>ExpressJS</label>
            </div>
            <div>
              <div className="lang-logo">
                <img src={NODE} alt="ReactJS" />
              </div>
              <label>ExpressJS</label>
            </div>
            <div>
              <div className="lang-logo">
                <img src={MONGO} alt="ReactJS" />
              </div>
              <label>MongoDB</label>
            </div>
            <div>
              <div className="lang-CPP">
                <img src={CPP} alt="ReactJS" />
              </div>
              <label>C++</label>
            </div>
            <div>
              <div className="lang-logo">
                <img src={JS} alt="ReactJS" />
              </div>
              <label>JavaScript</label>
            </div>
          </div>
        </div>
      </section>
      <section className="project-overview">
        <div className="project-overview-container">
        <h1>Project 1</h1>
          <div className="project-overview-left-container">
          
            <div>
              <h3 style={{ fontSize: "bold" }}>Featured Project</h3>
              <label>High Quality Image Search</label>
            </div>
            <br />
            <div className="project-para">
              <p>
                Spearheaded the development of a highly efficient image search
                application using ReactJS and the Unsplash API.This application
                allows users to search for and access a wide range of
                high-quality images contributed by photographers. Key features
                include a user-friendly search interface, responsive design for
                different devices, seamless integration with the Unsplash API
                for image retrieval, and the ability for users to download
                images with proper attribution.
              </p>
            </div>
          </div>
          <div className="project-overview-right-container">
            <div className="proj-1">
              <img src={PROJ1} alt="Project 1" />
            </div>
          </div>
        </div>
        <div className="project-overview-container">
        <h1>Project 2</h1>
          <div className="project-overview-right-container">
            <div className="proj-1">
              <img src={PROJ2} alt="Project 1" />
            </div>
          </div>
          <div className="project-overview-left-container">
            <div>
              <h3 style={{ fontSize: "bold" }}>Featured Project</h3>
              <label>Movie Search App</label>
            </div>
            <br />
            <div className="project-para-2">
              <p>
                Spearheaded the development of a highly efficient image search
                application using ReactJS and the Unsplash API.This application
                allows users to search for and access a wide range of
                high-quality images contributed by photographers. Key features
                include a user-friendly search interface, responsive design for
                different devices, seamless integration with the Unsplash API
                for image retrieval, and the ability for users to download
                images with proper attribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
