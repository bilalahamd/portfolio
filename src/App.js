import "./App.css";
import About from "./components/About";
import AllCertificate from "./components/AllCertificate";

import Contact from "./components/Contact";
import GlobalStyle from "./components/GlobalStyle";

import Nav from "./components/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./components/pages/Home";
import Work from "./components/work";
import ResumeParts from "./components/Resumeparts";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<ResumeParts />} />
          <Route path="/contact" element={<Contact />} />
          <Route />
          <Route />
          <Route path="/certificates" element={<AllCertificate />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
