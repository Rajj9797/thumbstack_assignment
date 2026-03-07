import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/HeroSection/hero';
import LinkSection from './components/linkSection/linkSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LinkSection />
    </div>
  );
}

export default App;
