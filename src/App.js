import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
export default App;
