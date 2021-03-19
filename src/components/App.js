import bua_logo from '../assets/bua_logo.png'
import '../css/App.css';
import ReactPlayer from 'react-player'


import Letter from '../components/Letter'

import taylor from '../assets/tswift.mp3'


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
        <div className="footer">
        <ReactPlayer
                    url={taylor}
                    playing={true}
                    controls={true}
                    height="50px"
                />
          </div>
      </header>
    </div>
  );
}

export default App;
