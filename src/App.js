import logo from './logo.svg';
import './App.css';

function App() {
  let a = 0;
  let add=() => {
    a =a+1;
    a =2;
  };  // function add(c){ return c}
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello React </h1>
        <button onClick={add} >Add</button>
        {a}


      </header>
    </div>
  );
}

export default App;
