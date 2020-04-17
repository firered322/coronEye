import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/utils/HomePage";
import India from "./components/India/India";
import Learn from "./components/Learn/Learn";
import Navbar from "./components/utils/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">
            <Route path="/" exact component={HomePage} />
            <Route path="/india" component={India} />
            <Route path="/learn" component={Learn} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
