import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home Page </h1>
      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
};

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1>About Page</h1>


    </div>
  );
};

const Footer = () =>{
  return (
    <footer>
      {/* <!-- OneTrust Cookie 設定ボタンの始点 --> */}
      <button
        id="ot-sdk-btn"
        class="ot-sdk-show-settings"
        onClick={console.log("aboutののcookie設定クリック")}
      >
        Cookie 設定
      </button>
      {/* <!-- OneTrust Cookie 設定ボタンの終点 --> */}

      {/* <!-- OneTrust Cookie リストの始点 --> */}
      <div id="ot-sdk-cookie-policy"></div>
      {/* <!-- OneTrust Cookie リストの終点 --> */}
    </footer>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <p>SPAのGTM発火テスト</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
