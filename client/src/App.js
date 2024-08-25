import Layout from "./components/Layout/layout";
import About from "./pages/About/about";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Project/Projects";
import Skills from "./pages/Skills/Skills";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  return (
    <>
      <MobileNav />
      <Layout />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <div className="footer">
        <h4 className="text-center">
          Made by Vedant Patel &copy;2024 - Present
        </h4>
      </div>
      <div className="mobile-footer">
        <h4 className="text-center">Made by Vedant Patel</h4>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#03045e", borderRadius: "50%" }}
      />
    </>
  );
}

export default App;
