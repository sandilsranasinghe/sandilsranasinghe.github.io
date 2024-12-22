import { HomeTab, ExperienceTab, MoreTab } from "./tabs";
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import cvPDF from "./assets/cv.pdf";

const AppLayout = () => (
  <div id="inner-root">
    <NavBar />
    <Outlet />
    <Footer />
    <AnimatedSquares />
  </div>
);

const NavBar = () => {
  const location = useLocation();
  return (
    <header id="tab-menu">
      <div
        id="tab-home"
        className={location.pathname === "/" ? "selected-tab" : ""}
      >
        <Link to={`/`} className="link">
          Home
        </Link>
      </div>
      <div
        id="tab-experience"
        className={location.pathname === "/experience" ? "selected-tab" : ""}
      >
        <Link to={`/experience`} className="link">
          Experience
        </Link>
      </div>
      {/* <div
        id="tab-more"
        className={location.pathname === "/more" ? "selected-tab" : ""}
      >
        <Link to={`/more`} className="link">
          More
        </Link>
      </div> */}
      <div id="tab-cv">
        <a
          href={cvPDF}
          target="_blank"
          rel="noreferrer"
          className="link"
          download="Sandil_Ranasinghe_CV.pdf"
        >
          CV
        </a>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="mailto: sandilsranasinghe@gmail.com">Email</a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/sandilsranasinghe/"
          target={"_blank"}
        >
          Linkedin
        </a>
      </div>
      <div>
        <a href="https://www.github.com/sandilsranasinghe" target={"_blank"}>
          Github
        </a>
      </div>
      <div>
        <a
          href="https://stackoverflow.com/users/12036671/sandil-ranasinghe"
          target={"_blank"}
        >
          Stackoverflow
        </a>
      </div>
    </footer>
  );
};

const AnimatedSquares = () => {
  return (
    <div id="square-animation-container">
      <div aria-hidden="true" className="square-md square-animated"></div>
      <div aria-hidden="true" className="square-sm square-animated"></div>
      <div aria-hidden="true" className="square-lg square-animated"></div>
      <div aria-hidden="true" className="square-sm square-animated"></div>
      <div aria-hidden="true" className="square-sm square-animated"></div>
      <div aria-hidden="true" className="square-md square-animated"></div>
      <div aria-hidden="true" className="square-lg square-animated"></div>
      <div aria-hidden="true" className="square-sm square-animated"></div>
      <div aria-hidden="true" className="square-sm square-animated"></div>
      <div aria-hidden="true" className="square-md square-animated"></div>
      <div aria-hidden="true" className="square-sm square-animated"></div>
    </div>
  );
};

const TabRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomeTab />,
      },
      {
        path: "/experience",
        element: <ExperienceTab />,
      },
      {
        path: "/more",
        element: <MoreTab />,
      },
    ],
  },
]);
export const TabContent = () => <RouterProvider router={TabRouter} />;
