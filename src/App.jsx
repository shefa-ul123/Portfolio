
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Education from './Components/Education/Education.jsx'
import Hero from './Components/Hero/Hero.jsx'

function App() {
 

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
