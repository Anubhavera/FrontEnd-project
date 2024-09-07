import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  px,
} from "framer-motion"
import { gsap } from "gsap";


function App() {
  const [count, setCount] = useState(0)


window.addEventListener('scroll',setScrollVar)
window.addEventListener('resize',setScrollVar)
function setScrollVar(){
  const htmlElement= document.documentElement;
  const percentOfScreenHeightScrolled = htmlElement.scrollTop/htmlElement.clientHeight
  console.log(Math.min(percentOfScreenHeightScrolled*100,100))
  htmlElement.style.setProperty('--scroll',Math.min(percentOfScreenHeightScrolled*100,100))
}
setScrollVar()



  return (
    <>
      <div className="text">
        <h1>
          How does <br />
          it <span className="highlight"> Work </span>
          <span className="question-mark">?</span>
        </h1>
        <div className="bar"></div>
        <h2>
          We make it possible in a quick and easy <br />
          few steps process, takes max 5 mins
        </h2>
      </div>
      <div className="scrolls">
        <img src="/img/Ellipse 92.png" />
      </div>
      <div className="image-container">
        <section>
        <img src="/img/1.png" />
        </section>
      </div>
      <div className="rect">
        <img src="/img/Screenshot 2024-09-06 223906.png" />
      </div>
      
    </>
  )
}
// export default function App() {
  // gsap.to('.image-container img', {
  //   scrollTrigger: '.image-container img', // start the animation when ".box" enters the viewport (once)
  //   x: 500
// });
// }


export default App

/////

// import "./App.css"
// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   MotionValue
// } from "framer-motion";
// import { gsap } from "gsap";

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Image({ id }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (<div className="scrolls">
// <div className="text">
//         <h1>
//           How does <br />
//           it <span className="highlight"> Work </span>
//           <span className="question-mark">?</span>
//         </h1>
//         <div className="bar"></div>
//         <h2>
//           We make it possible in a quick and easy <br />
//           few steps process, takes max 5 mins
//         </h2>
//       </div>

//     <section>
//       <div ref={ref}>
//         <img src={`/img/${id}.png`} alt="A London skyscraper" />
//       </div>
//       <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
//     </section>
//     </div>
//   );
// }

// export default function App() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <>
//       {[1, 2, 3, 4, 5,6].map((image) => (
//         <Image key={image} id={image} />
//       ))}
//       <motion.div className="progress" style={{ scaleX }} />
//     </>
//   );
// }
