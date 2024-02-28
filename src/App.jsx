import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Services, About, Html, Css, Logo } from "./pages";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="logo" element={<Logo />} />
        </Routes>
        <Footer />
      </Router>
    </main> 
  )
}

export default App;


