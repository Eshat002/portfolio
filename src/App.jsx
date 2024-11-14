import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./hocs/Layout";
import Projects from "./components/Projects";
import ProfileInfo from "./components/ProfileInfo";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/profile" element={<ProfileInfo />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
