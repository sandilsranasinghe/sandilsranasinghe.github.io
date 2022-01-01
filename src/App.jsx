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
      return <ExperienceTab />;
    case "Tools & Skills":
      return <ToolsTab />;
    case "More":
      return <MoreTab />;
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
        <div class="rounded_border transparent_bg px-2 px-md-4 py-3 col d-flex flex-row justify-content-evenly justify-content-md-start">
          <div class="me-md-4" > Sandil S. Ranasinghe </div>
          <div class="mx-md-4 about_icon">
            <i class="fas fa-envelope me-1"></i>
            <a href="mailto: ranasinghewmdss.20@uom.lk">Email</a>
          </div>
          <div class="mx-md-4 about_icon">
            <i class="fab fa-linkedin me-1"></i>
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

const experienceList = [
  {
    index: "1",
    title: "Freelance FullStack Developer",
    duration: "September 2021 - present"
  },
  {
    index: "2",
    title: "Undergraduate - University of Moratuwa",
    duration: "2021 - present",
    additional_subtitle: "Bsc Engineering"
  },
  {
    index: "3",
    title: "Intern - Stack Technologies",
    duration: "September 2019 - August 2021", 
    additional_subtitle: "Fullstack Development"
  },
  {
    index: "4",
    title: "Student - Royal College, Colombo 07",
    duration: "2011 - 2019",
    additional_subtitle: "GCE AL - Mathematics Stream"
  }
]
const ExperienceBubble = (props) => {
  const duration = props.duration

  return (
    <div class="row py-2 ps-4 ps-md-0 pe-2 pe-md-0">
      {props.index%2==1 ? null : <div class="col-md-6" /> }
      <div class={"col col-md-6 timeline_bubble_"+(props.index%2==1 ? "left" : "right")}>
        <div class="transparent_bg_dark rounded_border card border-0 rounded-0 pb-2 pb-md-4" >
          <div class="card-body">
            <h3 class="card-title">{props.title}</h3>
            { duration ? <h6 class="card-subtitle text-muted">{duration}</h6> : null }
            { props.additional_subtitle ? <h6 class="card-subtitle mt-1">{props.additional_subtitle}</h6> : null }
          </div>
        </div>
      </div>
      {props.index%2==1 ? <div class="col-md-6" /> : null }
    </div>
  )
}
const ExperienceTab = (props) => {

  return (
    <div class="container-fluid py-2">
      <div class="row px-2 px-md-4 py-5 py-md-4 gx-2">
        <div class="timeline rounded_border transparent_bg col px-2 px-md-4 py-3">

          <div class="row ps-4 ps-md-0 mb-2">
            <div class="col-12 col-md-6" ><strong> EXPERIENCE </strong></div>
          </div>

          {
            experienceList.map((exp) => <ExperienceBubble {...exp} />)
          }

        </div>
      </div>
    </div>
  )
}

const ToolsTab = (props) => {
  return (
    <div class="container-fluid py-2">
      <div class="row px-2 px-md-4 py-5 py-md-4 gx-2">
        Under Construction
      </div>
    </div>
  )
}

const MoreTab = (props) => {
  return (
    <div class="container-fluid py-2">
      <div class="row px-2 px-md-4 py-5 py-md-4 gx-2">
        Coming Soon
      </div>
    </div>
  )
}

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
