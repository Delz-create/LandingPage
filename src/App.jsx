import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ChildAbusePolicy from "./components/ChildAbusePolicy";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/child-abuse-policy"
        element={<ChildAbusePolicy />}
      />
    </Routes>
  );
};

export default App;
