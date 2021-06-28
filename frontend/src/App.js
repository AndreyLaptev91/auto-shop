import React from "react";
import Header from "./Header";
import Catalog from "./Catalog";
import Contacts from "./Contacts";
import Basket from "./Basket";
import Main from "./Main";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Navbar />
          <div>
            <Route path="/Catalog" component={Catalog} />
            <Route path="/Contacts" component={Contacts} />
            <Route path="/Basket" component={Basket} />
            <Route path="/Main" component={Main} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
