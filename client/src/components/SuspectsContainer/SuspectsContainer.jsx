import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllSuspects } from "../../services/suspects";
import SuspectDetail from "./../../screens/SuspectDetail/SuspectDetail";
import SuspectList from "./../../screens/SuspectList/SuspectList";

export default function SuspectsContainer(props) {
  const [suspects, setSuspects] = useState([]);
  async function getSuspects() {
    const lineup = await getAllSuspects();
    setSuspects(lineup);
  }
  useEffect(() => {
    getSuspects();
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/suspects/:id">
          <SuspectDetail suspects={suspects} />
        </Route>
        <Route path="/suspects">
          <SuspectList suspects={suspects} />
        </Route>
      </Switch>
    </div>
  );
}
