import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import LandingVideo from "./components/Video";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingVideo />
      <About />
    </div>
  );
}

export default App;
