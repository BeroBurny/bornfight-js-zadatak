import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./containers/Home";
import Artist from "./containers/Artist";

function App() {
  return (
    <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/artist/:id"><Artist /></Route>
    </Switch>
  );
}

export default App;
