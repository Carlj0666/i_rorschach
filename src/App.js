import './App.css';

import Homepage from './components/Homepage'
import InkblotList from './components/inkblots/InkblotList'
// import ImageCard from './components/images/ImageCard'
// import ImageShow from './components/images/ImageShow'
// import ImageDetail from './components/images/ImageDetail'
// import Comments from './components/comments/Comments'
// import Comment from './components/comments/Comment'
// import CommentForm from './components/comments/CommentForm'

//router
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

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
    <NavLink to="/images" exact style={link} activeStyle={{background: 'darkblue'}}>Images</NavLink>
  </div>


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
          <br />
          <hr />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/images" component={InkblotList} />
    </div>
    </Router>
  );
}

export default App;
