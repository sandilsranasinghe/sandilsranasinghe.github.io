import { HomeTab, ExperienceTab, MoreTab } from "./tabs";

export const TabContent = ({ currentTab }) => {
  switch (currentTab) {
    case "home":
      return <HomeTab />;
    case "experience":
      return <ExperienceTab />;
    case "more":
      return <MoreTab />;
    default:
      return <HomeTab />;
  }
};

export const NavBar = ({ currentTab, setCurrentTab }) => {
  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
    console.log(currentTab);
  };

  return (
    <header id="tab-menu">
      <div
        id="tab-home"
        onClick={() => handleTabClick("home")}
        className={currentTab === "home" ? "selected-tab" : ""}
      >
        Home
      </div>
      <div
        id="tab-experience"
        onClick={() => handleTabClick("experience")}
        className={currentTab === "experience" ? "selected-tab" : ""}
      >
        Experience
      </div>
      <div
        id="tab-more"
        onClick={() => handleTabClick("more")}
        className={currentTab === "more" ? "selected-tab" : ""}
      >
        More
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="mailto: sandil.20@cse.mrt.ac.lk">Email</a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/sandilsranasinghe/"
          target={"_blank"}
        >
          Linkedin
        </a>
      </div>
      <div>
        <a href="https://www.github.com/sandilsranasinghe" target={"_blank"}>
          Github
        </a>
      </div>
      <div>
        <a
          href="https://stackoverflow.com/users/12036671/sandil-ranasinghe"
          target={"_blank"}
        >
          Stackoverflow
        </a>
      </div>
    </footer>
  );
};

export const AnimatedSquares = () => {
  return (
    <div id="square-animation-container">
      <div className="square-md square-animated"></div>
      <div className="square-sm square-animated"></div>
      <div className="square-lg square-animated"></div>
      <div className="square-sm square-animated"></div>
      <div className="square-sm square-animated"></div>
      <div className="square-md square-animated"></div>
      <div className="square-lg square-animated"></div>
      <div className="square-sm square-animated"></div>
      <div className="square-sm square-animated"></div>
      <div className="square-md square-animated"></div>
      <div className="square-sm square-animated"></div>
    </div>
  );
};
