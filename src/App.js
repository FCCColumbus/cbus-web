import './App.css';
import Header from './components/Header';
import Splash from './components/Splash';
import About from './components/About';
import Events from './components/Events'
import Members from './components/Members';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <About />
      <Events />
      <img id="divider" src='/divider.jpg' alt='code on a screen. mostly css' />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
