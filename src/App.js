import React from "react";
import { Switch, Route } from "react-router-dom"
import NavBar from "./Components/NavBar";
import CreatureFinder from "./Components/CreatureFinder";
import Dice from "./Components/Dice";
import CreatureList from "./Components/CreatureList";
import CreatureCreator from "./Components/CreatureCreator";
import Home from "./Components/Home";



function App() {

return (
<div> 
<NavBar />
  <Switch>
      <Route exact path="/diceroller">
        <Dice />
      </Route>
      <Route exact path="/creaturefinder">
        <CreatureFinder />
      </Route>
      <Route exact path="/creaturelist">
        <CreatureList />
      </Route>
      <Route exact path="/creaturecreator">
        <CreatureCreator />
      </Route>
      <Route exact path="/"> 
          <Home />
      </Route>
      <Route path="*">
<h1>Page Not Found</h1>
      </Route>
  </Switch>
</div>
)
}

export default App;
