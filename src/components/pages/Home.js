import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "../Hero";
import About from "../About";
import ResumeParts from "../Resumeparts";
import { motion } from "framer-motion";
import { PageAnimation } from "../Animation/Animation";
import Contact from "../Contact";
import Footer from "../Footer";
import Work from "../work";
import Certificates from "../Cerficates";

import ScrollTop from "../ScrollTop";

const Home = () => {
  return (
    <motion.div
      variants={PageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Hero />
      <About />
      <ResumeParts />
      <Work />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollTop />
    </motion.div>
  );
};

export default Home;
