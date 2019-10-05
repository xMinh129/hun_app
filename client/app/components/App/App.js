import React, { Component } from 'react';
import Footer from "../Common/Footer/Footer";
import NavBar from "../Common/NavBar/NavBar";
import Auth from "../../modules/Auth.js";

const App = ({ children }) => (
  <>
    <NavBar/>

    <main>
      {children}
    </main>
    <Footer/>
  </>
);

export default App;
