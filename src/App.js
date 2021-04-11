import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import Hero from './components/header/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <AboutUs />
      <AboutAuthor />
      <Footer />
    </div>
  );
}

export default App;
