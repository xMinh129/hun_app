import React, { Component } from 'react';
import Footer from "../Common/Footer/Footer";
import NavBar from "../Common/NavBar/NavBar";

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
