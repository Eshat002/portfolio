import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-dark">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
