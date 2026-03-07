import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/HeroSection/hero';
import LinkSection from './components/linkSection/linkSection';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LinkSection />
      <ProductCard />
    </div>
  );
}

export default App;
