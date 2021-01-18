import logo from './logo.svg';
import './App.css';
//import Sass from "sass.js"; // memory dump
import Sass from "sass.js/dist/sass"; 
const sass = new Sass();  //SecurityError: Failed to construct 'Worker': Script at 'http://sass.worker.js/' cannot be accessed from origin 'http://localhost:3000'.

function App() {

  var scss = '$someVar: 123px; .some-selector { width: $someVar; }';
  sass.compile(scss, function(result) {
    console.log(result);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
