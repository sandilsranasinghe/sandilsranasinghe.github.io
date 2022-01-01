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
      return React.createElement(
        "div",
        { "class": "" },
        currentTab
      );
    case "Tools & Skills":
      return React.createElement(
        "div",
        { "class": "" },
        currentTab
      );
    case "More":
      return React.createElement(
        "div",
        { "class": "" },
        currentTab
      );
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
        { "class": "rounded_border transparent_bg px-2 px-md-4 py-3 col d-flex flex-row justify-content-evenly" },
        React.createElement(
          "div",
          null,
          " Sandil S. Ranasinghe "
        ),
        React.createElement(
          "div",
          { "class": "about__bottomcontainer__email " },
          React.createElement("i", { "class": "fas fa-envelope about__bottomcontainer__icon" }),
          React.createElement(
            "a",
            { href: "mailto: ranasinghewmdss.20@uom.lk" },
            "Email"
          )
        ),
        React.createElement(
          "div",
          { "class": "about__bottomcontainer__linkedin " },
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