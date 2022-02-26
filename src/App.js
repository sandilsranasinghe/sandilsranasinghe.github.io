import "./App.css";
import { useState } from "react";
import { Footer, NavBar, TabContent, AnimatedSquares } from "./Layout";

function App() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div id="inner-root">
      <NavBar setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <TabContent currentTab={currentTab} />
      <Footer />
      <AnimatedSquares />
    </div>
  );
}

export default App;
