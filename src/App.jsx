const NavBarTab = ({ name, color_class, setCurrentTab }) => {
  const handleTabClick = () => {
    setCurrentTab(name);
  };

  return (
    <div class="col-md-3" >
      <div class={"navbar__tab rounded_border tabbg__" + color_class} onClick={handleTabClick}>
        {name}
      </div>
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
    <div class="container-fluid">
      <div class="row px-2 px-md-4 gx-5 pt-3 gy-3 gy-md-0">
        {navBarTabs.map((t, ind) => (
          <NavBarTab
            name={t.name}
            color_class={t.color_class}
            setCurrentTab={setCurrentTab}
            key={"navbartab" + ind}
          />
        ))}
      </div>
    </div>
  );
};

const TabContent = ({ currentTab }) => {
  switch (currentTab) {
    case "About":
      return <AboutTab />;
    case "Experience":
      return <div class="">{currentTab}</div>;
    case "Tools & Skills":
      return <div class="">{currentTab}</div>;
    case "More":
      return <div class="">{currentTab}</div>;
    default:
      return <div class="">{currentTab}</div>;
  }
};

const AboutTab = (props) => {
  const expYears = new Date().getFullYear() - 2019;

  return (
    <div class="container-fluid">
      <div class="row px-2 px-md-4 gx-5 py-5 py-md-4 gy-3 gy-md-0">
        <div class="col-12 col-md-9 py-md-2">
          <div class="rounded_border transparent_bg px-4 py-5 py-md-0 d-flex flex-column justify-content-center">
          <h1> Hi! I'm Sandil </h1>
          <hr />
          <p>
            I'm a Fullstack Web Developer with {expYears} years of experience
            and a computer science enthusiast and student.
          </p>
          </div>
        </div>
        <div class="col-12 col-md-3 py-md-2" >
          <div class="card border-0 rounded-0 rounded_border overflow-hidden">
            <img src="./assets/Photo.png" class="card-img rounded-0" alt="my picture" />
          </div>
        </div>
      </div>
      <div class="row px-2 px-md-4 gx-2 pb-2 pb-md-0">
        <div class="rounded_border transparent_bg px-2 px-md-4 py-3 col d-flex flex-row justify-content-evenly">
        <div > Sandil S. Ranasinghe </div>
        <div class="about__bottomcontainer__email ">
          <i class="fas fa-envelope about__bottomcontainer__icon"></i>
          <a href="mailto: ranasinghewmdss.20@uom.lk">Email</a>
        </div>
        <div class="about__bottomcontainer__linkedin ">
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
    </div>
  );
};

const App = () => {
  const [currentTab, setCurrentTab] = React.useState("About");

  return (
    <div class="container-fluid">
      <NavBar setCurrentTab={setCurrentTab} />
      <TabContent currentTab={currentTab} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("siteroot"));
