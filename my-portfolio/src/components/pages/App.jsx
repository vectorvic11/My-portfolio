import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import '../App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;