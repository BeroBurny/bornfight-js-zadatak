import React from "react";
import {BrowserRouter} from "react-router-dom";
import Artist from "./contexts/Artist";

const Providers: React.FC = ({children}) => (
  <Artist>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Artist>
);

export default Providers;
