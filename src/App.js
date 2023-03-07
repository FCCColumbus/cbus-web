import './App.css';
import Header from './Header';
import Splash from './Splash';
import About from './About';
import Events from './Events'
import Members from './Members';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Splash />
      <About />
      <Events />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
