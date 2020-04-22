import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/utils/HomePage";
import IndiaPage from "./components/utils/IndiaPage";
import Learn from "./components/Learn/Learn";
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">
            <Route path="/" exact component={HomePage} />
            <Route path="/india" component={IndiaPage} />
            <Route path="/learn" component={Learn} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
