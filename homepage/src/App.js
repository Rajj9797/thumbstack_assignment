import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/HeroSection/hero';
import LinkSection from './components/linkSection/linkSection';
import ProductCard from './components/ProductCard/ProductCard';
import AboutUs from './components/Aboutus/AboutUs';
import RoadMap from './components/RoadMap/RoadMap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LinkSection />
      <ProductCard />
      <AboutUs />
      <RoadMap />
    </div>
  );
}

export default App;
