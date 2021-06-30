import './App.css';

import Homepage from './components/Homepage'
import About from './components/About';
import InkblotList from './containers/InkblotList'
import InkblotCard from './components/Inkblot'

//router
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom'



//navbar styling
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
// Navbar
const Navbar = () =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Homepage</NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{background: 'darkblue'}}>About</NavLink>
    <NavLink to="/inkblots" exact style={link} activeStyle={{background: 'darkblue'}}>inkblots</NavLink>
   
  </div>


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
          <br />
          <hr />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/inkblots" component={InkblotList} />

    </div>
    </Router>
  );
}

export default App;
