var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var NavBarTab = function NavBarTab(_ref) {
  var name = _ref.name,
      color_class = _ref.color_class;

  return React.createElement(
    'div',
    { 'class': "navbar__tab tabbg__" + color_class },
    name
  );
};
var NavBar = function NavBar() {
  var navBarTabs = [{ name: 'About', color_class: 'orange' }, { name: 'Experience', color_class: 'lightblue' }, { name: 'Tools & Skills', color_class: 'whitegreen' }, { name: 'More', color_class: 'purple' }];

  return React.createElement(
    'div',
    { 'class': 'navbar__container' },
    navBarTabs.map(function (t, ind) {
      return React.createElement(NavBarTab, { name: t.name, color_class: t.color_class, key: 'navbartab' + ind });
    })
  );
};

var App = function App() {
  var _React$useState = React.useState("About"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentTab = _React$useState2[0],
      setCurrentTab = _React$useState2[1];

  return React.createElement(
    'div',
    { 'class': 'layoutcontainer' },
    React.createElement(NavBar, null),
    React.createElement(
      'div',
      { 'class': 'content__container' },
      'ContentContainer'
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("siteroot"));