import { useEffect } from "react";
import myimg from "../assets/Photo.jpg";
import skills from "./skills.json"

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
            I'm a Fullstack Web Developer with {expYears} years of experience, a
            computer science enthusiast and a student.
          </p>
          <p>
            I have worked in both backend and frontend development in agile
            workflows along with git version control. Experienced using several
            languages and tools and quick to learn new ones when necessary.
          </p>
        </div>
        <div className="card card-3 scroll-fade">
          <p>
            <b>Main Tools & Skills</b>
          </p>
          <hr />
          <ul>
            {
              skills.map((v) => <li>{v}</li>)
            }
          </ul>
        </div>
        <img
          src={myimg}
          alt="Image of Sandil"
          className="card-img-3 scroll-fade"
        />
      </div>
    </div>
  );
};
export default HomeTab;
