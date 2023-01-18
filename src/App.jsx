import Intro from "./components/intro/Intro";
import About from "./components/about/about";
import Portfolio from "./components/portfolio-work/Portrait/portfolio";
import Navbar from "./components/navbar/navbar";
import EventsPortfolio from "./components/portfolio-work/Event/events";
import GraphicPortfolio from "./components/portfolio-work/Graphic-Design/graphicDesign";
import { Routes, Route} from "react-router-dom";


function App() {

  return (  
    <>
    <div>
      <Navbar />

    <Routes>
      <Route path="/" element={
        <>
          <Intro />
          <About />
          <Portfolio />
        </>} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio-work" element={<Portfolio />} />
      <Route path="/events" element={<EventsPortfolio/>} />
      <Route path="/graphicDesign" element={<GraphicPortfolio/>}/>
    </Routes>
    </div>
    </>
  )
};

export default App;