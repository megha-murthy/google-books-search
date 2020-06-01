import React from "react";
import Search from './components/Search';
import Saved from './components/Saved';
import "./App.css";
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
   
  
    </div>
  );
}


export default App;
