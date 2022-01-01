var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var NavBarTab = function NavBarTab(_ref) {
  var name = _ref.name,
      color_class = _ref.color_class,
      setCurrentTab = _ref.setCurrentTab;

  var handleTabClick = function handleTabClick() {
    setCurrentTab(name);
  };

  return React.createElement(
    "div",
    { "class": "col-md-3" },
    React.createElement(
      "div",
      { "class": "navbar__tab rounded_border tabbg__" + color_class, onClick: handleTabClick },
      name
    )
  );
};
var NavBar = function NavBar(_ref2) {
  var setCurrentTab = _ref2.setCurrentTab;

  var navBarTabs = [{ name: "About", color_class: "orange" }, { name: "Experience", color_class: "lightblue" }, { name: "Tools & Skills", color_class: "whitegreen" }, { name: "More", color_class: "purple" }];

  return React.createElement(
    "div",
    { "class": "container-fluid" },
    React.createElement(
      "div",
      { "class": "row px-2 px-md-4 gx-5 pt-3 gy-3 gy-md-0" },
      navBarTabs.map(function (t, ind) {
        return React.createElement(NavBarTab, {
          name: t.name,
          color_class: t.color_class,
          setCurrentTab: setCurrentTab,
          key: "navbartab" + ind
        });
      })
    )
  );
};

var TabContent = function TabContent(_ref3) {
  var currentTab = _ref3.currentTab;

  switch (currentTab) {
    case "About":
      return React.createElement(AboutTab, null);
    case "Experience":
      return React.createElement(ExperienceTab, null);
    case "Tools & Skills":
      return React.createElement(ToolsTab, null);
    case "More":
      return React.createElement(MoreTab, null);
    default:
      return React.createElement(
        "div",
        { "class": "" },
        currentTab
      );
  }
};

var AboutTab = function AboutTab(props) {
  var expYears = new Date().getFullYear() - 2019;

  return React.createElement(
    "div",
    { "class": "container-fluid" },
    React.createElement(
      "div",
      { "class": "row px-2 px-md-4 gx-5 py-5 py-md-4 gy-3 gy-md-0" },
      React.createElement(
        "div",
        { "class": "col-12 col-md-9 py-md-2" },
        React.createElement(
          "div",
          { "class": "rounded_border transparent_bg px-4 py-5 py-md-0 d-flex flex-column justify-content-center" },
          React.createElement(
            "h1",
            null,
            " Hi! I'm Sandil "
          ),
          React.createElement("hr", null),
          React.createElement(
            "p",
            null,
            "I'm a Fullstack Web Developer with ",
            expYears,
            " years of experience and a computer science enthusiast and student."
          )
        )
      ),
      React.createElement(
        "div",
        { "class": "col-12 col-md-3 py-md-2" },
        React.createElement(
          "div",
          { "class": "card border-0 rounded-0 rounded_border overflow-hidden" },
          React.createElement("img", { src: "./assets/Photo.png", "class": "card-img rounded-0", alt: "my picture" })
        )
      )
    ),
    React.createElement(
      "div",
      { "class": "row px-2 px-md-4 gx-2 pb-2 pb-md-0" },
      React.createElement(
        "div",
        { "class": "rounded_border transparent_bg px-2 px-md-4 py-3 col d-flex flex-row justify-content-evenly justify-content-md-start" },
        React.createElement(
          "div",
          { "class": "me-md-4" },
          " Sandil S. Ranasinghe "
        ),
        React.createElement(
          "div",
          { "class": "mx-md-4 about_icon" },
          React.createElement("i", { "class": "fas fa-envelope me-1" }),
          React.createElement(
            "a",
            { href: "mailto: ranasinghewmdss.20@uom.lk" },
            "Email"
          )
        ),
        React.createElement(
          "div",
          { "class": "mx-md-4 about_icon" },
          React.createElement("i", { "class": "fab fa-linkedin me-1" }),
          React.createElement(
            "a",
            {
              href: "https://www.linkedin.com/in/sandil-ranasinghe-a8563890/",
              target: "_blank"
            },
            "LinkedIn"
          )
        )
      )
    )
  );
};

var experienceList = [{
  index: "1",
  title: "Freelance FullStack Developer",
  duration: "September 2021 - present"
}, {
  index: "2",
  title: "Undergraduate - University of Moratuwa",
  duration: "2021 - present",
  additional_subtitle: "Bsc Engineering"
}, {
  index: "3",
  title: "Intern - Stack Technologies",
  duration: "September 2019 - August 2021",
  additional_subtitle: "Fullstack Development"
}, {
  index: "4",
  title: "Student - Royal College, Colombo 07",
  duration: "2011 - 2019",
  additional_subtitle: "GCE AL - Mathematics Stream"
}];
var ExperienceBubble = function ExperienceBubble(props) {
  var duration = props.duration;

  return React.createElement(
    "div",
    { "class": "row py-2 ps-4 ps-md-0 pe-2 pe-md-0" },
    props.index % 2 == 1 ? null : React.createElement("div", { "class": "col-md-6" }),
    React.createElement(
      "div",
      { "class": "col col-md-6 timeline_bubble_" + (props.index % 2 == 1 ? "left" : "right") },
      React.createElement(
        "div",
        { "class": "transparent_bg_dark rounded_border card border-0 rounded-0 pb-2 pb-md-4" },
        React.createElement(
          "div",
          { "class": "card-body" },
          React.createElement(
            "h3",
            { "class": "card-title" },
            props.title
          ),
          duration ? React.createElement(
            "h6",
            { "class": "card-subtitle text-muted" },
            duration
          ) : null,
          props.additional_subtitle ? React.createElement(
            "h6",
            { "class": "card-subtitle mt-1" },
            props.additional_subtitle
          ) : null
        )
      )
    ),
    props.index % 2 == 1 ? React.createElement("div", { "class": "col-md-6" }) : null
  );
};
var ExperienceTab = function ExperienceTab(props) {

  return React.createElement(
    "div",
    { "class": "container-fluid py-2" },
    React.createElement(
      "div",
      { "class": "row px-2 px-md-4 py-5 py-md-4 gx-2" },
      React.createElement(
        "div",
        { "class": "timeline rounded_border transparent_bg col px-2 px-md-4 py-3" },
        React.createElement(
          "div",
          { "class": "row ps-4 ps-md-0 mb-2" },
          React.createElement(
            "div",
            { "class": "col-12 col-md-6" },
            React.createElement(
              "strong",
              null,
              " EXPERIENCE "
            )
          )
        ),
        experienceList.map(function (exp) {
          return React.createElement(ExperienceBubble, exp);
        })
      )
    )
  );
};

var ToolsTab = function ToolsTab(props) {
  return React.createElement(
    "div",
    { "class": "container-fluid py-2" },
    React.createElement(
      "div",
      { "class": "row px-2 px-md-4 py-5 py-md-4 gx-2" },
      "Under Construction"
    )
  );
};

var MoreTab = function MoreTab(props) {
  return React.createElement(
    "div",
    { "class": "container-fluid py-2" },
    React.createElement(
      "div",
      { "class": "row px-2 px-md-4 py-5 py-md-4 gx-2" },
      "Coming Soon"
    )
  );
};

var App = function App() {
  var _React$useState = React.useState("About"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentTab = _React$useState2[0],
      setCurrentTab = _React$useState2[1];

  return React.createElement(
    "div",
    { "class": "container-fluid" },
    React.createElement(NavBar, { setCurrentTab: setCurrentTab }),
    React.createElement(TabContent, { currentTab: currentTab })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("siteroot"));