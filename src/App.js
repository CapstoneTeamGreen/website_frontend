import LandingPage from './components/LandingPage';
import About from './components/About';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    // You can only return a single parent element (i.e. only the div)
    <Router>
      <LandingPage />
      <About />
    </Router>
  );
}

export default App;