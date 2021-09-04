

const NavBarTab = ({name, color_class}) => {
  return (
    <div class={"navbar__tab tabbg__"+color_class} >
      {name}
    </div>
  )
}
const NavBar = () => {
  const navBarTabs = [
    {name: 'About', color_class: 'orange'},
    {name: 'Experience', color_class: 'lightblue'},
    {name: 'Tools & Skills', color_class: 'whitegreen'},
    {name: 'More', color_class: 'purple'}
  ]

  return (
    <div class="navbar__container" >
      { navBarTabs.map((t, ind) => (
        <NavBarTab name={t.name} color_class={t.color_class} key={'navbartab'+ind} />
      )) }
    </div>
  )
}

const App = () => {
  const [currentTab, setCurrentTab] = React.useState("About");

  return (
    <div class="layoutcontainer">
      <NavBar />
      <div class="content__container" >ContentContainer</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("siteroot"));
