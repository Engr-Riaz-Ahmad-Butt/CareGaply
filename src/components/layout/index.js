import React from "react";

import Navbar from "../navbar";
import Footer from "../footer";

import style from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={style.children}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
