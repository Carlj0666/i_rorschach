import './App.css';

import Homepage from './components/Homepage'
import About from './components/About';
import InkblotList from './containers/InkblotList'
import Navbar from './components/navBar';

//router
import { BrowserRouter as Router, Route, Switch, NavLink, Link} from 'react-router-dom'



function App() {
  return (
   
    <Router>
      
      <Switch>
    <>
        <div className="App">
              <Navbar />
              <br />
              <hr />
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/inkblots" component={InkblotList} />
        </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
