import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar";
import "./App.css";
import AboutPage from "./components/About/AboutPage";
import Skills from "./components/skill/Skills";
import Experience from "./components/Experience/Experience";

function App() {
  const roles = [
    "Full Stack Developer",
    "Android Developer",
    "UI/UX Designer",
    "Programmer",
  ];
  return (
    <div>
      <Header />
      <AboutPage />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
