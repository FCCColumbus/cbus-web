import './App.css';
import About from './components/About';
import DividerImage from './components/DividerImage';
import Events from './components/Events'
import Footer from './components/Footer';
import Header from './components/Header';
import Members from './components/Members';
import Splash from './components/Splash';

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <About />
      <Events />
      <DividerImage />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
