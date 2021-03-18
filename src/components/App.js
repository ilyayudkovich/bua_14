import bua_logo from '../assets/bua_logo.png'
import '../css/App.css';

import Letter from '../components/Letter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bua_logo} className="App-logo" alt="logo" />
        <p>
          <Letter />
        </p>
        <a
          className="App-link"
          href="https://forms.gle/SSy78TLqWHRgQ6Zt6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fill out this form!
        </a>
      </header>
    </div>
  );
}

export default App;
