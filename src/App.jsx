import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./hocs/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  );
};

export default App;
