import HeroSection from './components/Sections/HeroSection';
import MediaSection from './components/Sections/MediaSection';
import Navbar from './components/Sections/Navbar';
import PhotoSection from './components/Sections/PhotoSection';
import SnapSection from './components/Sections/SnapSection';
import TrialSection from './components/Sections/TrialSection';



function App() {
  return (
    <div >
      <Navbar/>
      <HeroSection/>
      <SnapSection/>
      <MediaSection/>
      <PhotoSection/>
      <TrialSection/>
    </div>
  );
}

export default App;
