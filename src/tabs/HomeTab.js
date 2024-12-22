import { useEffect } from "react";
import myimg from "../assets/Photo.jpg";
import skills from "./skills.json";

const HomeTab = (props) => {
  const expYears = new Date().getFullYear() - 2019;

  useEffect(() => {
    const scrollFadeElements = document.querySelectorAll(".scroll-fade");
    const elementInView = (element, offset = 0) => {
      const elementTop = element.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) - offset
      );
    };
    const displayScrollElement = (element) => {
      element.style.opacity = 1;
    };
    const hideScrollElement = (element) => {
      element.style.opacity = 0;
    };
    const handleScrollAnimation = (event) => {
      scrollFadeElements.forEach((element) => {
        if (elementInView(element, 0)) {
          displayScrollElement(element);
        } else {
          hideScrollElement(element);
        }
      });
    };
    handleScrollAnimation();

    window.addEventListener("scroll", handleScrollAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <div id="content-home" className="content-container">
      <h1>Hi! I'm Sandil Ranasinghe</h1>

      <div className="horizontal-container">
        <div className="card card-3 scroll-fade">
          <p>
            <b>About Me</b>
          </p>
          <hr />
          <p>
            I'm a Fullstack Web Developer with {expYears} years of experience
            and a computer science engineering undergraduate. Recently I have
            taken an interest in Machine Learning and related applications.
          </p>
          <p>
            As a fullstack developer, I have experience in developing web
            applications using a range of widely used frameworks, doing both
            frontend and backend development as well as containerizing and basic
            server deployment. In addition I have a lot of experience in writing
            scripts for various tasks.
          </p>
          <p>
            I also have some experience coding up and training deep learning models using Pytorch, 
            and lately I have been keeping up a lot with the topics of Neural Processes and Diffusion.
          </p>
        </div>
        <div className="card card-3 scroll-fade">
          <p>
            <b>Stack & Skills</b>
          </p>
          <hr />
          <ul>
            <li>
              <b>Programming Languages</b> - Python, Javascript, C, C++, Java,
              Lua
            </li>
            <li>
              <b>Web Development</b> - HTML, CSS, React, FastAPI, Django, h2o
              wave, Vue, Wagtail, Selenium
            </li>
            <li>
              <b>Machine Learning</b> - Pytorch, Scikit-Learn, Pandas, Numpy,
              Langchain, h2oGPTe, h2o DAI
            </li>
            <li>
              <b>Database Systems</b> - SQL, PostgreSQL, MongoDB
            </li>
            <li>
              <b>Mobile Development</b> - React Native, Solar2D
            </li>
            <li>
              <b>Tools</b> - Git, Docker, Linux, VSCode
            </li>
          </ul>
        </div>
        {/* <img
          src={myimg}
          alt="Image of Sandil"
          className="card-img-3 scroll-fade"
        /> */}
        <div className="card card-3 scroll-fade">
          <p>
            <b>Achievements</b>
          </p>
          <hr />
          <ul>
            <li>Ranked 3 in SL / 112 world rank at IEEEXtreme 17.0 (2023)</li>
            <li>
              Runners up at RootCode Tech-Triathlon Design, Hackathon and
              Datathon organized by RootCode.
            </li>
            <li>
              Runners up at ChallengerX ML Incubator program by Hatch x IFS.
            </li>
            <li>
              Runners up at Datastorm 4.0 (2023), data science and analytics
              competition.
            </li>
            <li>Ranked 2 in SL / 129 world rank at IEEEXtreme 16.0 (2022)</li>
            <li>
              Semi-Finalist at Datastorm 3.0 (2022), data science and analytics
              competition.
            </li>
            <li>
              Honorable Mention at the 58th International Mathematics Olympiad.
              (Brazil 2017)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HomeTab;
