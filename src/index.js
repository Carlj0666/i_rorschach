import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
// //router
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
// import Homepage from './components/Homepage'
// import ImageList from './components/images/ImageList'


import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import imageReducer from './reducers/imageReducer'

const store = createStore(imageReducer, applyMiddleware(thunk))

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// const Navbar = () =>
//   <div>
//     <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Homepage</NavLink>
//     <NavLink to="/images" exact style={link} activeStyle={{background: 'darkblue'}}>Images</NavLink>
//   </div>


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router> */}
        <div>
          <App />
          {/* <Navbar />
          <br />
          <hr />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/images" component={ImageList} /> */}

        </div>
      {/* </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
