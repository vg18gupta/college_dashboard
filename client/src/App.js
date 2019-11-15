import React, {Component} from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import homePage from "./components/homePage";
//import detailPage from "./components/detailPage";

function App() {
    return (
      <Router>
        <Route path="/" exact component={homePage} />
        
      </Router>
    )
  
}

export default App;
