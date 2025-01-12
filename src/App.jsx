import Hero from './component/hero';
import Feature from './component/Feature';
import './App.css'
import About from './component/About';
import Skills from './component/Skills';
import LearningSection from './component/Learning';
import ProjectSection from './component/Projects';
import ContactMe from './component/Contact';
import Footer from './component/Footer';

function App() {


  return (
    <div>
      <Hero />
   <Feature />
   <About/>
   <Skills/>
   <LearningSection/>
   <ProjectSection/>
   <ContactMe/>
   <Footer/>
    </div>
   
  )
}

export default App
