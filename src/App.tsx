import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./containers/Home";
import Artist from "./containers/Artist";
import Content from "./components/Content";
import Header from "./containers/Header";
import styled from "styled-components";

const Footer = styled.footer`
  margin-top: 40px;
`;

function App() {
  return (
    <>
    <Header />
    <section>
      <Content>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/artist/:id"><Artist /></Route>
        </Switch>
      </Content>
    </section>
    <Footer />
    </>
  );
}

export default App;
