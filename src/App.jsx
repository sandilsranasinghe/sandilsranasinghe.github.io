const NavBarTab = ({ name, color_class, setCurrentTab }) => {
  const handleTabClick = () => {
    setCurrentTab(name);
  };

  return (
    <div class={"navbar__tab tabbg__" + color_class} onClick={handleTabClick}>
      {name}
    </div>
  );
};
const NavBar = ({ setCurrentTab }) => {
  const navBarTabs = [
    { name: "About", color_class: "orange" },
    { name: "Experience", color_class: "lightblue" },
    { name: "Tools & Skills", color_class: "whitegreen" },
    { name: "More", color_class: "purple" },
  ];

  return (
    <div class="navbar__container">
      {navBarTabs.map((t, ind) => (
        <NavBarTab
          name={t.name}
          color_class={t.color_class}
          setCurrentTab={setCurrentTab}
          key={"navbartab" + ind}
        />
      ))}
    </div>
  );
};

const TabContent = ({ currentTab }) => {
  switch (currentTab) {
    case "About":
      return <AboutTab />;
    case "Experience":
      return <div class="content__container">{currentTab}</div>;
    case "Tools & Skills":
      return <div class="content__container">{currentTab}</div>;
    case "More":
      return <div class="content__container">{currentTab}</div>;
    default:
      return <div class="content__container">{currentTab}</div>;
  }
};

const AboutTab = (props) => {
  const expYears = new Date().getFullYear() - 2019;

  return (
    <div class="content__container">
      <div class="about__innercontainer">
        <div class="about__leftcolumn">
          <h1> Hi! I'm Sandil </h1>
          <hr />
          <p>
            I'm a Fullstack Web Developer with {expYears} years of experience
            and a computer science enthusiast and student.
          </p>
        </div>
        <img src="./assets/Photo.png" class="about__rightimage" />
      </div>
      <div class="about__bottomcontainer">
        <div> Sandil S. Ranasinghe </div>
        <div class="about__bottomcontainer__email">
          <i class="fas fa-envelope about__bottomcontainer__icon"></i>
          <a href="mailto: ranasinghewmdss.20@uom.lk">Email</a>
        </div>
        <div class="about__bottomcontainer__linkedin">
          <i class="fab fa-linkedin about__bottomcontainer__icon"></i>
          <a
            href="https://www.linkedin.com/in/sandil-ranasinghe-a8563890/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentTab, setCurrentTab] = React.useState("About");

  return (
    <div class="layoutcontainer">
      <NavBar setCurrentTab={setCurrentTab} />
      <TabContent currentTab={currentTab} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("siteroot"));
