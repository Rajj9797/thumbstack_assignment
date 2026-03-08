import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/HeroSection/hero';
import LinkSection from './components/linkSection/linkSection';
import ProductCard from './components/ProductCard/ProductCard';
import AboutUs from './components/Aboutus/AboutUs';
import RoadMap from './components/RoadMap/RoadMap';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LinkSection />
      <ProductCard />
      <AboutUs />
      <RoadMap />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
