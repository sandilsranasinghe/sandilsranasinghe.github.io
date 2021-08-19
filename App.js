var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var NavBarTab = function NavBarTab(props) {
  var tab_id = props.tab_id,
      name = props.name,
      _props$right = props.right,
      right = _props$right === undefined ? false : _props$right,
      currentTab = props.currentTab,
      setCurrentTab = props.setCurrentTab;

  var handleClick = function handleClick() {
    if (currentTab !== tab_id) {
      setCurrentTab(tab_id);
    }
  };

  return React.createElement(
    "div",
    {
      onClick: handleClick,
      className: !right ? "NavBar__Tab" : "NavBar__Tab NavBar__Tab--right"
    },
    name
  );
};

var NavBar = function NavBar(props) {
  return React.createElement(
    "div",
    { className: "NavBar" },
    React.createElement("div", { className: "NavBar__Heading" }),
    React.createElement(
      "div",
      { className: "NavBar__TabContainer" },
      React.createElement(NavBarTab, Object.assign({ name: "About", tab_id: "About" }, props)),
      React.createElement(NavBarTab, Object.assign({ name: "Education", tab_id: "Education", right: true }, props))
    )
  );
};

var TabContent = function TabContent(props) {
  var currentTab = props.currentTab;


  switch (currentTab) {
    case "About":
      return React.createElement(AboutTab, props);
    case "Education":
      return React.createElement(EducationTab, props);
    default:
      return React.createElement(AboutTab, props);
  }
};

var AboutTab = function AboutTab(props) {
  return React.createElement(
    "div",
    { className: "TabContent__ContainerHorizontal" },
    React.createElement(
      "div",
      { className: "AboutTab__LeftColumn" },
      React.createElement(
        "div",
        { className: "AboutTab__h1" },
        " Hi! I'm Sandil Ranasinghe "
      ),
      React.createElement(
        "div",
        { className: "AboutTab__h2" },
        " Student | Freelance Fullstack Developer "
      ),
      React.createElement("hr", { className: "AboutTab__hr" })
    ),
    React.createElement(
      "div",
      { className: "AboutTab__RightColumn" },
      React.createElement("img", {
        src: "./assets/Photo.jpg",
        alt: "My Photo",
        className: "AboutTab__Image"
      })
    )
  );
};

var ContentDrawer = function ContentDrawer(props) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var children = props.children,
      drawerName = props.drawerName;


  var handleClick = function handleClick() {
    setIsOpen(!isOpen);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { onClick: handleClick, className: "EducationTab__DrawerHeading" },
      drawerName
    ),
    isOpen ? React.createElement(
      "div",
      { className: "EducationTab__DrawerContent" },
      children
    ) : null,
    React.createElement("hr", null)
  );
};
var EducationTab = function EducationTab(props) {

  return React.createElement(
    "div",
    { className: "TabContent__ContainerVertical" },
    React.createElement(
      ContentDrawer,
      { drawerName: "Undergraduate Studies" },
      React.createElement(
        "p",
        null,
        "University of Moratuwa ,Sri Lanka"
      )
    ),
    React.createElement(
      ContentDrawer,
      { drawerName: "GCE A/L - Physical Science" },
      React.createElement(
        "p",
        null,
        "Royal College, Colombo 10"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "Maths - A"
        ),
        React.createElement(
          "li",
          null,
          "Physics - A"
        ),
        React.createElement(
          "li",
          null,
          "Chemistry - A"
        )
      ),
      React.createElement(
        "p",
        null,
        "Ranked 67 in the island"
      )
    )
  );
};

var ContactTab = function ContactTab(props) {
  return React.createElement(
    "div",
    { className: "TabContent__ContainerVertical" },
    React.createElement(
      "a",
      { href: "tel:0713715087", className: "ContactTab__Field" },
      React.createElement("img", { src: "./assets/tp.png", alt: "telephone", width: "25" }),
      React.createElement(
        "p",
        null,
        " 071 371 5087 "
      )
    ),
    React.createElement("br", null),
    React.createElement(
      "a",
      {
        href: "https://www.facebook.com/kevin.himashasatharasinge.7",
        target: "_blank",
        className: "ContactTab__Field"
      },
      React.createElement("img", { src: "./assets/facebook.png", alt: "facebook", width: "25" }),
      React.createElement(
        "p",
        null,
        "Facebook"
      )
    ),
    React.createElement(
      "a",
      {
        href: "https://www.instagram.com/kevinhimasha/",
        target: "_blank",
        className: "ContactTab__Field"
      },
      React.createElement("img", { src: "./assets/instagram.png", alt: "instagram", width: "25" }),
      React.createElement(
        "p",
        null,
        " Instagram "
      )
    ),
    React.createElement(
      "a",
      { href: "mailto:2019s17365@stu.cmb.ac.lk", className: "ContactTab__Field" },
      React.createElement("img", { src: "./assets/mail.png", alt: "instagram", width: "25" }),
      React.createElement(
        "p",
        null,
        " Send email "
      )
    )
  );
};

var ExtracurricularTab = function ExtracurricularTab(props) {
  return React.createElement(
    "div",
    { className: "TabContent__ContainerVertical" },
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "Sports"
      ),
      React.createElement(
        "ol",
        null,
        React.createElement(
          "li",
          null,
          "Cricket"
        ),
        React.createElement(
          "li",
          null,
          "Chess"
        )
      ),
      React.createElement(
        "li",
        null,
        "Clubs and Societies"
      ),
      React.createElement(
        "ol",
        null,
        React.createElement(
          "li",
          null,
          "Astronomical Society"
        ),
        React.createElement(
          "li",
          null,
          "Buddhist Brotherhood"
        ),
        React.createElement(
          "li",
          null,
          "Mathematics Society"
        )
      )
    )
  );
};

var PersonalTab = function PersonalTab(props) {
  return React.createElement(
    "div",
    { className: "TabContent__ContainerVertical" },
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        React.createElement(
          "p",
          { className: "AboutTab__p" },
          "Full name - Satharasinghege Don Kevin Himasha"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "p",
          { className: "AboutTab__p" },
          " Date of Birth - 15.06.1999 "
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "p",
          { className: "AboutTab__p" },
          "Address - 252/8/A,PinlindaRoad , Suwadapola Piliyandala"
        )
      )
    )
  );
};

var App = function App() {
  var _React$useState3 = React.useState("About"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentTab = _React$useState4[0],
      setCurrentTab = _React$useState4[1];

  return React.createElement(
    "div",
    { className: "layoutcontainer" },
    React.createElement(NavBar, { currentTab: currentTab, setCurrentTab: setCurrentTab }),
    React.createElement(TabContent, { currentTab: currentTab })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("siteroot"));