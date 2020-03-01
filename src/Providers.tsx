import React from "react";
import {BrowserRouter} from "react-router-dom";

const Providers: React.FC = ({children}) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

export default Providers;
