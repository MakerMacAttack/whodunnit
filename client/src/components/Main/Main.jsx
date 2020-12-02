import React from "react";
import { Switch, Route } from "react-router-dom";
import useModal from "../../services/useModal";
import Instructions from "../../components/Instructions/Instructions";
import NavBar from "./../shared/NavBar/NavBar";
import Footer from "./../shared/Footer/Footer";
import Forensics from "./../../screens/Forensics/Forensics";
import Home from "./../../screens/Home/Home";
import Login from "./../../screens/LogIn/Login";
import Lose from "./../../screens/Lose/Lose";
import Notebook from "./../../screens/Notebook/Notebook";
import NoteDetail from "./../../screens/NoteDetail/NoteDetail";
import SignUp from "./../../screens/SignUp/SignUp";
import SuspectDetail from "./../../screens/SuspectDetail/SuspectDetail";
import SuspectList from "./../../screens/SuspectList/SuspectList";
import Win from "./../../screens/Win/Win";
import "./Main.css";

export default function Main(props) {
  const { instructionsShowing, toggle } = useModal();
  return (
    <div>
      <NavBar toggle={toggle} />
      <body>
        <Instructions instructionsShowing={instructionsShowing} hide={toggle} />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forensics">
            <Forensics />
          </Route>
          <Route path="/lose">
            <Lose />
          </Route>
          <Route path="/notebook">
            <Notebook />
          </Route>
          <Route path="/note">
            <NoteDetail />
          </Route>
          <Route path="/suspect">
            <SuspectDetail />
          </Route>
          <Route path="/suspects">
            <SuspectList />
          </Route>
          <Route path="/win">
            <Win />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </body>
      <Footer />
    </div>
  );
}
