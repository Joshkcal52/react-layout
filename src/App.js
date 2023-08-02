import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import Button from "./components/Button.js";
import Image from "./components/Image.js";
import Logo from "./components/Logo.js";
import Main from "./components/Main.js";
import Subheader from "./components/Subheader.js";
import Image2 from "./components/image2.js";
import Main2 from "./components/Main2.js";

function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <Logo /> {}
        <Button /> {}
        <Button /> {}
        <Button /> {}
        <Button /> {}
        <Button /> {}
        <Logo /> {}
      </div>
      <div className="Content">
        <Image /> {}
        <Header /> {}
        <Subheader /> {}
        <Main /> {}
        <div className="Wrapper">
          <Main2 /> {}
          <Image2 /> {}
        </div>
        <div className="rapper">
          <Image2 /> {}
          <Main2 /> {}
        </div>
      </div>
    </div>
  );
}

export default App;
