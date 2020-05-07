import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/utils/HomePage";
import IndiaPage from "./components/utils/IndiaPage";
import Learn from "./components/Learn/Learn";
import Navbara from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";
import Zones from "./components/utils/Zones";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbara />
          <div className="container">
            <Route path="/" exact component={HomePage} />
            <Route path="/india" component={IndiaPage} />
            <Route path="/learn" component={Learn} />
            <Route path="/zones" component={Zones} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
