import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skils from "./components/Skils";
import SlideBar from "./components/SlideBar";

function App() {
  return (
    <div>
      <NavBar />
      <SlideBar />
      <Home />
      <About />
      <Skils />
      <Projects />
      <Contact />
    </div>
  );
}
// deneme 2

export default App;
