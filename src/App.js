import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    // You can only return a single parent element (i.e. only the div)
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          &#123; Hello, my name is Lorem.<br></br>
          I'm a back-end developer &#125;
        </p>
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
