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
    { "class": "navbar__tab tabbg__" + color_class, onClick: handleTabClick },
    name
  );
};
var NavBar = function NavBar(_ref2) {
  var setCurrentTab = _ref2.setCurrentTab;

  var navBarTabs = [{ name: "About", color_class: "orange" }, { name: "Experience", color_class: "lightblue" }, { name: "Tools & Skills", color_class: "whitegreen" }, { name: "More", color_class: "purple" }];

  return React.createElement(
    "div",
    { "class": "navbar__container" },
    navBarTabs.map(function (t, ind) {
      return React.createElement(NavBarTab, {
        name: t.name,
        color_class: t.color_class,
        setCurrentTab: setCurrentTab,
        key: "navbartab" + ind
      });
    })
  );
};

var TabContent = function TabContent(_ref3) {
  var currentTab = _ref3.currentTab;

  switch (currentTab) {
    case "About":
      return React.createElement(AboutTab, null);
    case "Experience":
      return React.createElement(
        "div",
        { "class": "content__container" },
        currentTab
      );
    case "Tools & Skills":
      return React.createElement(
        "div",
        { "class": "content__container" },
        currentTab
      );
    case "More":
      return React.createElement(
        "div",
        { "class": "content__container" },
        currentTab
      );
    default:
      return React.createElement(
        "div",
        { "class": "content__container" },
        currentTab
      );
  }
};

var AboutTab = function AboutTab(props) {
  var expYears = new Date().getFullYear() - 2019;

  return React.createElement(
    "div",
    { "class": "content__container" },
    React.createElement(
      "div",
      { "class": "about__innercontainer" },
      React.createElement(
        "div",
        { "class": "about__leftcolumn" },
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
      ),
      React.createElement("img", { src: "./assets/Photo.png", "class": "about__rightimage" })
    ),
    React.createElement(
      "div",
      { "class": "about__bottomcontainer" },
      React.createElement(
        "div",
        null,
        " Sandil S. Ranasinghe "
      ),
      React.createElement(
        "div",
        { "class": "about__bottomcontainer__email" },
        React.createElement("i", { "class": "fas fa-envelope about__bottomcontainer__icon" }),
        React.createElement(
          "a",
          { href: "mailto: ranasinghewmdss.20@uom.lk" },
          "Email"
        )
      ),
      React.createElement(
        "div",
        { "class": "about__bottomcontainer__linkedin" },
        React.createElement("i", { "class": "fab fa-linkedin about__bottomcontainer__icon" }),
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
  );
};

var App = function App() {
  var _React$useState = React.useState("About"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentTab = _React$useState2[0],
      setCurrentTab = _React$useState2[1];

  return React.createElement(
    "div",
    { "class": "layoutcontainer" },
    React.createElement(NavBar, { setCurrentTab: setCurrentTab }),
    React.createElement(TabContent, { currentTab: currentTab })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("siteroot"));