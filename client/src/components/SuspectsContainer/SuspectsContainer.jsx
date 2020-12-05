import React from "react";
import { Switch, Route } from "react-router-dom";
import SuspectDetail from "./../../screens/SuspectDetail/SuspectDetail";
import SuspectList from "./../../screens/SuspectList/SuspectList";

export default function SuspectsContainer({ currentGame, guilty }) {
  return (
    <div>
      <Switch>
        <Route path="/suspects/:id">
          <SuspectDetail currentGame={currentGame} guilty={guilty} />
        </Route>
        <Route path="/suspects">
          <SuspectList currentGame={currentGame} />
        </Route>
      </Switch>
    </div>
  );
}
