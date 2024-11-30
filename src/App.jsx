import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}
// deneme 2

export default App;
