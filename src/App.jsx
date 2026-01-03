import Navbar from './components/Navbar/Navbar';
import HeroActive from './components/sections/HeroActive';
import ShowcaseSection from './components/sections/ShowcaseSection';
import SoftSkills from './components/sections/SoftSkills';
import Experience from './components/sections/Experience';


const App = () => {
  return (
    <>
      <Navbar />
      <HeroActive/>
    
      <ShowcaseSection/>
      <SoftSkills/>
      <Experience/>
          </>
  );
};

export default App;
