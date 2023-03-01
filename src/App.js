import logo from './assets/img/logo.png';
import './App.css';
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer'
import headerImg from "./assets/img/header-img.png";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
