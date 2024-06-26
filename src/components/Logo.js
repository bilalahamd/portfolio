import React from "react";
import { motion } from "framer-motion";

const svgAnimation = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  show: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};
const svgAnim1 = {
  hidden: {
    opacity: 0,
    x: -110,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const svgAnim2 = {
  hidden: {
    opacity: 0,
    y: 210,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
function Logo() {
  return (
    <div>
      <svg
        width="83"
        height="54"
        viewBox="0 0 83 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M11.4451 10.5599C12.8853 7.2478 13.6054 5.59172 14.8434 4.44881C15.4463 3.89221 16.1313 3.43167 16.8742 3.08337C18.3998 2.36819 20.2052 2.32627 23.8159 2.24243L27.8489 2.1488C35.9965 1.95963 40.0703 1.86504 42.3984 3.8622C43.5015 4.80849 44.3259 6.03739 44.7832 7.41692C45.7483 10.3285 44.1159 14.0621 40.8511 21.5294L38.9108 25.9671C37.3783 29.4722 36.6121 31.2248 35.2844 32.3963C34.6386 32.9661 33.9051 33.4279 33.1121 33.7638C31.4817 34.4546 29.5701 34.3878 25.7469 34.2543L21.8249 34.1173C14.1334 33.8487 10.2876 33.7144 8.107 31.7024C7.07127 30.7467 6.30637 29.5344 5.8897 28.1882C5.01245 25.3538 6.5469 21.8248 9.6158 14.767L11.4451 10.5599Z"
          fill="#98399A"
          variants={svgAnimation}
          initial="hidden"
          animate="show"
        />
        <motion.path
          d="M26.8099 20.0441L47.2926 19.0418C52.7403 18.7752 56.6417 24.228 54.6308 29.298L48.484 44.7954C47.315 47.7425 44.4192 49.6363 41.2506 49.5256L20.3588 48.7961C14.9626 48.6076 11.5275 42.9506 13.8493 38.0757L20.4053 24.3102C21.5923 21.8179 24.0526 20.1791 26.8099 20.0441Z"
          fill="#98399A"
          stroke="#8AB668"
          variants={svgAnim1}
          initial="hidden"
          animate="show"
        />

        <motion.path
          d="M31.672 12.7741C32.9519 9.97528 35.7239 8.15885 38.8009 8.10255L55.1367 7.80368C60.9068 7.69811 64.887 13.5509 62.6681 18.8783L57.1844 32.0439C55.9529 35.0006 53.0766 36.9378 49.8737 36.9676L33.066 37.1238C27.2078 37.1783 23.2798 31.1248 25.7163 25.797L31.672 12.7741Z"
          fill="#E16000"
          variants={svgAnimation}
          initial="hidden"
          animate="show"
        />
        <path
          d="M38.8101 8.60247L55.1459 8.3036C60.5553 8.20463 64.2868 13.6916 62.2065 18.6861L56.7228 31.8517C55.5683 34.6236 52.8717 36.4397 49.8691 36.4676L33.0614 36.6238C27.5693 36.6749 23.8868 30.9998 26.171 26.005L32.1267 12.982C33.3266 10.3582 35.9253 8.65524 38.8101 8.60247Z"
          stroke="#F6F9F3"
        />

        <path
          d="M45.7553 28.6208C47.0586 25.8694 49.8105 24.0962 52.8546 24.0464L69.1093 23.7807C74.916 23.6858 78.8858 29.6149 76.5861 34.9476L71.3736 47.0344C70.1178 49.9465 67.2603 51.8418 64.089 51.8662L47.3869 51.9943C41.4875 52.0396 37.5701 45.9017 40.0955 40.57L45.7553 28.6208Z"
          fill="#E16000"
          variants={svgAnim2}
          initial="hidden"
          animate="show"
        />
      </svg>
    </div>
  );
}

export default Logo;
