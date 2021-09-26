// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Singer from './Components/Singer/Singer';

function App() {
  return (
    <div className="App">
      <div className="header-with-fix">
      <Header></Header>
      </div>
      <Singer></Singer>
    </div>
  );
}

export default App;
