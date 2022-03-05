import LandingPage from './components/LandingPage';
import About from './components/About';

function App() {
  return (
    // You can only return a single parent element (i.e. only the div)
    <div className="container">
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
