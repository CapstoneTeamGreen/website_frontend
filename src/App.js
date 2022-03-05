import LandingPage from './components/LandingPage';
import ParticleBackground from './components/LandingPage/ParticleBackground';

function App() {
  return (
    // You can only return a single parent element (i.e. only the div)
    <div className="container">
      <ParticleBackground />
      <LandingPage />
    </div>
  );
}

export default App;
