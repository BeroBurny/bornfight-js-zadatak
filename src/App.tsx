import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./containers/Home";
import Artist from "./containers/Artist";

function App() {
  return (
    <>
    <header />
    <section>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/artist/:id"><Artist /></Route>
      </Switch>
    </section>
    <footer />
    </>
  );
}

export default App;
