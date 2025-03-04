import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import LandingVideo from "./components/Video";
import Registration from "./components/Registration.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Registration /> /
      <LandingVideo />
      <About />
    </div>
  );
}

export default App;
