const NavBarTab = (props) => {
  const { tab_id, name, right = false, currentTab, setCurrentTab } = props;
  const handleClick = () => {
    if (currentTab !== tab_id) {
      setCurrentTab(tab_id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={!right ? "NavBar__Tab" : "NavBar__Tab NavBar__Tab--right"}
    >
      {name}
    </div>
  );
};

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <div className="NavBar__Heading"></div>
      <div className="NavBar__TabContainer">
        <NavBarTab name="About" tab_id="About" {...props} />
        <NavBarTab name="Education" tab_id="Education" right={true} {...props} />
      </div>
    </div>
  );
};

const TabContent = (props) => {
  const { currentTab } = props;

  switch (currentTab) {
    case "About":
      return <AboutTab {...props} />;
    case "Education":
      return <EducationTab {...props} />;
    default:
      return <AboutTab {...props} />;
  }
};

const AboutTab = (props) => {
  return (
    <div className="TabContent__ContainerHorizontal">
      <div className="AboutTab__LeftColumn">
        <div className="AboutTab__h1"> Hi! I'm Sandil Ranasinghe </div>
        <div className="AboutTab__h2"> Student | Freelance Fullstack Developer </div>
        <hr className="AboutTab__hr" />
      </div>
      <div className="AboutTab__RightColumn">
        <img
          src="./assets/Photo.jpg"
          alt="My Photo"
          className="AboutTab__Image"
        />
      </div>
    </div>
  );
};

const ContentDrawer = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { children, drawerName } = props;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleClick} className="EducationTab__DrawerHeading">
        {drawerName}
      </div>
      {isOpen ? (
        <div className="EducationTab__DrawerContent">{children}</div>
      ) : null}
      <hr />
    </div>
  );
};
const EducationTab = (props) => {

  return (
    <div className="TabContent__ContainerVertical">
      <ContentDrawer drawerName="Undergraduate Studies">
        <p>University of Moratuwa ,Sri Lanka</p>
      </ContentDrawer>

      <ContentDrawer drawerName="GCE A/L - Physical Science">
        <p>Royal College, Colombo 10</p>
        <ul>
          <li>Maths - A</li>
          <li>Physics - A</li>
          <li>Chemistry - A</li>
        </ul>
        <p>Ranked 67 in the island</p>
      </ContentDrawer>
    </div>
  );
};

const ContactTab = (props) => {
  return (
    <div className="TabContent__ContainerVertical">
      <a href="tel:0713715087" className="ContactTab__Field">
        <img src="./assets/tp.png" alt="telephone" width="25" />
        <p> 071 371 5087 </p>
      </a>
      <br />
      <a
        href="https://www.facebook.com/kevin.himashasatharasinge.7"
        target="_blank"
        className="ContactTab__Field"
      >
        <img src="./assets/facebook.png" alt="facebook" width="25" />
        <p>Facebook</p>
      </a>
      <a
        href="https://www.instagram.com/kevinhimasha/"
        target="_blank"
        className="ContactTab__Field"
      >
        <img src="./assets/instagram.png" alt="instagram" width="25" />
        <p> Instagram </p>
      </a>
      <a href="mailto:2019s17365@stu.cmb.ac.lk" className="ContactTab__Field">
        <img src="./assets/mail.png" alt="instagram" width="25" />
        <p> Send email </p>
      </a>
    </div>
  );
};

const ExtracurricularTab = (props) => {
  return (
    <div className="TabContent__ContainerVertical" >
      <ul>
          <li>Sports</li>
          <ol>
            <li>Cricket</li>
            <li>Chess</li>
          </ol>
          <li>Clubs and Societies</li>
          <ol>
            <li>Astronomical Society</li>
            <li>Buddhist Brotherhood</li>
            <li>Mathematics Society</li>
          </ol>
        </ul>
    </div>
  )
}

const PersonalTab = (props) => {
  return (
    <div className="TabContent__ContainerVertical" >
      <ul>
          <li>
            <p className="AboutTab__p">
              Full name - Satharasinghege Don Kevin Himasha
            </p>
          </li>
          <li>
            <p className="AboutTab__p"> Date of Birth - 15.06.1999 </p>
          </li>
          <li>
            <p className="AboutTab__p">
              Address - 252/8/A,PinlindaRoad , Suwadapola Piliyandala
            </p>
          </li>
        </ul>
    </div>
  )
}

const App = () => {
  const [currentTab, setCurrentTab] = React.useState("About");

  return (
    <div className="layoutcontainer">
      <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TabContent currentTab={currentTab} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("siteroot"));
