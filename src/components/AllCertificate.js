import React from "react";
import Cerficate from "./Certificate";
import { styled } from "styled-components";
import Image from "./images/ed.jpg";
import Image1 from "./images/certificate1.jpg";
import Image2 from "./images/certificate2.jpg";
import Image3 from "./images/certificate3.jpg";
import Image4 from "./images/certificate4.jpg";
import Image5 from "./images/certificate5.jpg";
import { motion } from "framer-motion";
import { PageAnimation } from "./Animation/Animation";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
const AllImages = [
  { id: 1, src: Image, alt: "image" },
  { id: 2, src: Image1, alt: "image1" },
  { id: 3, src: Image2, alt: "image2" },
  { id: 3, src: Image3, alt: "image3" },
  { id: 4, src: Image4, alt: "image4" },
  { id: 5, src: Image5, alt: "image5" },
];
const AllCertificate = () => {
  return (
    <StyledAllCertificate
      variants={PageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      {AllImages.map((img) => (
        <Cerficate id={img.id} source={img.src} alt={img.alt} />
      ))}
      <Footer />
      <ScrollTop />
    </StyledAllCertificate>
  );
};

export default AllCertificate;
const StyledAllCertificate = styled(motion.div)`
  padding: 6rem 2rem;
  background: black;
  color: white;
`;
