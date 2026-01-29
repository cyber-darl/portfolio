import Navbar from './components/Navbar/Navbar';
import Certified from './components/sections/Certified';
import HeroActive from './components/sections/HeroActive';
import ShowcaseSection from './components/sections/ShowcaseSection';
import SoftSkills from './components/sections/SoftSkills';
import Experience from './components/sections/Experience';
import TechStack from './components/sections/TechStack';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';


const App = () => {
  return (
    <>

      <Navbar />
      <HeroActive/>
      <Tron/>
      <SoftSkills/>
      <ShowcaseSection/>
      <Certified/>
      <TechStack/>
      <Contact/>
      <Footer/>

        
          </>
  );
};

export default App;
