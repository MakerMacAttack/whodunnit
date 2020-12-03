import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import useModal from "../../services/useModal";
import { removeToken, verifyUser } from "./services/auth";
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

export default function Main(props) {
  const [currentUser, setCurrentUser] = useState(null);
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
  }, []);

  return (
    <div>
      <NavBar toggle={toggle} />
      <body>
        <Instructions isShowing={isShowing} hide={toggle} />
        <Switch>
          <Route path="/signup">
            <SignUp setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/forensics">
            <Forensics />
          </Route>
          <Route path="/lose">
            <Lose />
          </Route>
          <Route path="/win">
            <Win />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <NotesContainer />
        <SuspectsContainer />
      </body>
      <Footer />
    </div>
  );
}
