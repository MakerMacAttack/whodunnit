import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./../../components/shared/NavBar/Navbar";
import Footer from "./../../components/shared/Footer/Footer";
import Home from "./../../screens/Home/Home";
import "./Main.css";

export default function Main(props) {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
