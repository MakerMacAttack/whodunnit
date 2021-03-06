import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import useModal from "../../services/useModal";
import { verifyUser } from "../../services/auth";
import { getAllSuspects } from "../../services/suspects";
import Instructions from "../../components/Instructions/Instructions";
import Footer from "./../shared/Footer/Footer";
import Forensics from "./../../screens/Forensics/Forensics";
import Home from "./../../screens/Home/Home";
import Login from "./../../screens/LogIn/Login";
import Lose from "./../../screens/Lose/Lose";
import NavBar from "./../shared/NavBar/NavBar";
import NotesContainer from "../NotesContainer/NotesContainer";
import SignUp from "./../../screens/SignUp/SignUp";
import SuspectsContainer from "../SuspectsContainer/SuspectsContainer";
import Win from "./../../screens/Win/Win";
import "./Main.css";
import { assignKiller } from "../../services/game";

export default function Main(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentGame, setCurrentGame] = useState([]);
  const [suspects, setSuspects] = useState([]);
  const [guilty, setGuilty] = useState(null);

  const { isShowing, toggle } = useModal();
  const history = useHistory();

  useEffect(() => {
    async function handleVerify() {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push("/login");
      }
    }
    handleVerify();
    // eslint-disable-next-line
  }, []);

  function setKiller(killer) {
    setGuilty(killer);
  }

  useEffect(() => {
    if (suspects.length > 0) {
      const killer = assignKiller(suspects);
      setKiller(killer); // See if you can condense this to just setGuilty
      if (killer.alibi.airtight) {
        suspects.forEach(
          (suspect) => (suspect.alibi.airtight = !suspect.alibi.airtight)
        );
      }
      setCurrentGame(suspects);
    }
    // eslint-disable-next-line
  }, [suspects]);

  async function getSuspects() {
    const lineup = await getAllSuspects();
    setSuspects(lineup);
  }

  useEffect(() => {
    getSuspects();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavBar
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        toggle={toggle}
      />
      <main>
        <Instructions isShowing={isShowing} hide={toggle} />
        <Switch>
          <Route path="/signup">
            <SignUp setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/forensics">
            <Forensics guilty={guilty} />
          </Route>
          <Route path="/lose">
            <Lose getSuspects={getSuspects} />
          </Route>
          <Route path="/win">
            <Win getSuspects={getSuspects} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <NotesContainer suspects={suspects} currentUser={currentUser} />
        <SuspectsContainer currentGame={currentGame} guilty={guilty} />
      </main>
      <Footer />
    </div>
  );
}
