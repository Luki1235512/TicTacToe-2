import {BrowserRouter, Route, Link} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import threexthree from './pages/3x3';
import fivexfive from './pages/5x5';
import sevenxseven from './pages/7x7';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact/>
      <Route path='/3x3' component={threexthree} />
      <Route path='/5x5' component={fivexfive} />
      <Route path='/7x7' component={sevenxseven} />
    </BrowserRouter>
  );
}

export default App;
