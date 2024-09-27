import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home Page</h1>
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

const Footer = ({ flg }) => {
  return (
    <footer id="footer">
      {/* flgがtrueの時のみCookie設置ボタンを表示 */}
      {flg && <button className="optanon-show-settings">Cookie 設置</button>}
    </footer>
  );
};

function App() {
  const [flg, setFlg] = useState(false);

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
      <Footer flg={flg} />
      {/* フラグの状態を更新するボタン */}
      <button onClick={() => setFlg(!flg)}>フラグを切り替える</button>
    </Router>
  );
}

export default App;
