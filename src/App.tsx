import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from  './components/Projects/';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Introduction from './components/Introduction/Introduction';
import './styles/global.css';
import  { useEffect } from "react";

function App() {
  useEffect(() => {
    const dot = document.querySelector(".custom-cursor-dot") as HTMLElement;
    const circle = document.querySelector(".custom-cursor-circle") as HTMLElement;

    let mouseX = 0; // Current mouse X position
    let mouseY = 0; // Current mouse Y position
    let circleX = 0; // Circle's current X position
    let circleY = 0; // Circle's current Y position
    const lagFactor = 0.4; // How much lag the circle has

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Instantly move the dot to the mouse position
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateCircle = () => {
      // Gradually update circle position
      circleX += (mouseX - circleX) * lagFactor;
      circleY += (mouseY - circleY) * lagFactor;

      circle.style.left = `${circleX}px`;
      circle.style.top = `${circleY}px`;

      // Recursively call animateCircle for smooth animation
      requestAnimationFrame(animateCircle);
    };

    // Add event listener and start animation
    window.addEventListener("mousemove", onMouseMove);
    animateCircle();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div>
      <div className="custom-cursor-dot"></div>
      <div className="custom-cursor-circle"></div>
      <Header />
      {/*<Hero />*/}
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;