import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SuspectDetail from "./../../screens/SuspectDetail/SuspectDetail";
import SuspectList from "./../../screens/SuspectList/SuspectList";

export default function SuspectsContainer({ suspects }) {
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
